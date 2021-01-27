<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Features;
use Illuminate\Routing\Pipeline;
use Illuminate\Routing\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\Auth\StatefulGuard;
use Laravel\Fortify\Contracts\LoginResponse;
use Laravel\Fortify\Contracts\LogoutResponse;
use Laravel\Fortify\Http\Requests\LoginRequest;
use Laravel\Fortify\Contracts\LoginViewResponse;
use Laravel\Fortify\Actions\AttemptToAuthenticate;
use Laravel\Fortify\Actions\EnsureLoginIsNotThrottled;
use Laravel\Fortify\Actions\PrepareAuthenticatedSession;
use Laravel\Fortify\Actions\RedirectIfTwoFactorAuthenticatable;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionSPAController extends Controller
{
    /**
     * The guard implementation.
     *
     * @var \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected $guard;

    /**
     * Create a new controller instance.
     *
     * @param  \Illuminate\Contracts\Auth\StatefulGuard
     * @return void
     */
    public function __construct(StatefulGuard $guard)
    {
        $this->guard = $guard;
    }


    public function login($rootVaule, array $args)
    {
    
        $data =  $this->username($rootVaule, $args);
       
        $user = User::where($data['field'], $args['input']['username'])->first();
        
        if(! $user || ($user->is_active ==false)) {

            return (object)([
                'user' => null,
                'is_authenticated' => false,
                'errors'=> [
                    [
                    'message' => 'User account does not exist or has been disabled contact support team for more information.'
                    ]
                ],
                'success' => false,
                ]);
        }
    
        if (! $user || ! Hash::check($args['input']['password'], $user->password)) {

            $user->forceFill([
                'login_trial_count' => ($user->login_trial_count-1),
            ])->save();

            return (object)([
                'user' => null,
                'is_authenticated' => false,
                'errors'=> [
                    [
                    'message' => 'Incorrect Cridentials Provided'
                    ]
                ],
                'success' => false,
                ]);
        }

        if($user->email_verified_at == null) {

            $user->sendEmailVerificationNotification();

            return (object)([
                'user' => new UserResource($user),
                'is_authenticated' => false,
                'errors'=> null,
                'success' => true,
            ]);
        }

        if($user->mobile_number_verified_at == null) {

            $user->sendMobileNumberVerificationNotification();
            
            $user->forceFill([
                'text_resend_count' => ($user->text_resend_count-1),
            ])->save();
            
            return (object)([
                'user' => new UserResource($user),
                'is_authenticated' => false,
                'errors'=> null,
                'success' => true,
            ]);
        }

        if($user->enabled_otp == true) {

            $user->sendOtpCodeNotification();

            $user->forceFill([
                'text_resend_count' => ($user->text_resend_count-1),
            ])->save();

            return (object)([
                'user' => new UserResource($user),
                'is_authenticated' => false,
                'errors'=> null,
                'success' => true,
            ]);
        }

        $user->forceFill([
            'text_resend_count' => 5,
            'login_trial_count' => 5
        ])->save();

            $this->guard->login($user);
            
            

        return (object)([
            'user' => new UserResource($user),
            'is_authenticated' => true,
            'errors'=> null,
            'success' => true
            ]);
        
    }

    public function resendOtpCode($rootVaule, array $args)
    {
        $user = User::where('email', $args['input']['email'])->first();

        $user->sendOtpCodeNotification();
        
        return (object)([
            'user' => null,
            'is_authenticated' => false,
            'errors'=> null,
            'success' => true
            ]);
    }

    public function verifyOtpCode($rootVaule, array $args)
    {
        $user = User::where('email', $args['input']['email'])->first();

        if($user->getOtpCodeForVerification() != $args['input']['otp_code'])
        {
            return (object)([
                'user' => new UserResource($user),
                
                'errors'=> [
                    [
                        'message' => 'Incorrect OTP Provided'
                    ]
                    
                ],
                'success' => false,
                ]);
        }
        
        $user->forceFill([
            'otp_code' => null,
            'text_resend_count' => 5,
            'login_trial_count' => 5
        ])->save();

        return (object)([
            'user' => new UserResource($this->guard->login($user)),
            'is_authenticated' => true,
            'errors'=> null,
            'success' => true
            ]);
    }

    public function resendMobileNumberVerificationCode($rootVaule, array $args)
    {
        $user = User::where('email', $args['input']['email'])->first();

        $user->sendMobileNumberVerificationNotification();
        
        return (object)([
            'user' => null,
            'is_authenticated' => false,
            'errors'=> null,
            'success' => true
            ]);
    }

    public function VerifyMobileVerificationCode($rootVaule, array $args)
    {
        $user = User::where('email', $args['input']['email'])->first();

        if($user->getMobileNumberVerificationCode() != $args['input']['verification_code'])
        {
            return (object)([
                'user' => new UserResource($user),
                'is_authenticated' => false,
                'errors'=> [
                    [
                        'message' => 'Incorrect Verification Code Provided'
                    ]
                    
                ],
                'success' => false,
                ]);
        }
        
        $user->markMobileNumberAsVerified();

        if($user->email_verified_at == null) {

            return (object)([
                'user' => new UserResource($user),
                'is_authenticated' => false,
                'errors'=> [
                    [
                        'message' => 'Email is not verified.'
                    ]
                    
                ],
                'success' => false,
                ]);
        }

        return (object)([
            'user' => new UserResource($this->guard->login($user)),
            'is_authenticated' => false,
            'errors'=> null,
            'success' => true
            ]);
    }



    public function resendEmailVerification($rootVaule, array $args)
    {
        $user = User::where('email', $args['input']['email'])->first();

        $user->sendEmailVerificationNotification();

        return (object)([
            'user' => null,
            'is_authenticated' => false,
            'errors'=> null,
            'success' => true
            ]);
    }



    public function username($rootVaule, array $args)
    {
        $login = $args['input']['username'];

        if (filter_var($login, FILTER_VALIDATE_EMAIL)) {
            $field = 'email';
        } else {
            $field = 'mobile_number';
        }
       
       $args =  array_merge([$field => $login], $args);

        return ['field' => $field, 'args' => $args];
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Laravel\Fortify\Contracts\LogoutResponse
     */
    public function logout($rootVaule, $args)
    {
        
        $this->guard->logout();

        // $request->session()->invalidate();

        // $request->session()->regenerateToken();

        return  (object)([
            'user' => null,
            'is_authenticated' => false,
            'errors'=> null,
            'success' => true
            ]);
    
    }
}
