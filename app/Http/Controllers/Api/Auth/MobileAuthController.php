<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;
use Laravel\Fortify\Contracts\TwoFactorAuthenticationProvider;

class MobileAuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:sanctum', ['except' => ['login', 'username', 'resendOtpCode', 'verifyOtpCode']]);
    }
    

    public function login($rootVaule, array $args)
    {
    
        $data =  $this->username($rootVaule, $args);
       
        $user = User::where($data['field'], $args['input']['username'])->first();

        if(! $user || ($user->is_active ==false)) {

            return (object)([
                'user' => null,
                'token' => null, 
                'token_type'=> null,
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
                'token' => null, 
                'token_type'=> null,
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
                'token' => null, 
                'token_type'=> null,
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
                'token' => null, 
                'token_type'=> null,
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
                'token' => null, 
                'token_type'=> null,
                'errors'=> null,
                'success' => true,
            ]);
        }

        if($user->two_factor_secret || $user->two_factor_recovery_codes) {

            return (object)([
                'user' => new UserResource($user),
                'token' => null, 
                'token_type'=> null,
                'errors'=> null,
                'success' => true,
            ]);
        }

        $user->forceFill([
            'text_resend_count' => 5,
        ])->save();

           
        $user->forceFill([
            'login_trial_count' => 5,
        ])->save();
        
        return (object)([
            'user' => new UserResource($user),
            'token' => $user->createToken($args['input']['device_name'])->plainTextToken, 
            'token_type'=> 'bearer',
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
            'token' => null, 
            'token_type'=> null,
            'errors'=> null,
            'success' => true
            ]);
    }

    public function logout($rootVaule, array $args)
    {
        $user = User::where('email', $args['input']['email'])->first();

        $user->tokens()->where('name', $args['input']['device_name'])->delete();

        return (object)([
            'user' => null,
            'token' => null, 
            'token_type'=> null,
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
                'token' => null, 
                'token_type'=> null,
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
        ])->save();

        return (object)([
            'user' => new UserResource($user),
            'token' => $user->createToken($args['input']['device_name'])->plainTextToken, 
            'token_type'=> 'bearer',
            'errors'=> null,
            'success' => true
            ]);
    }

    public function hasValid2FACode(User $user, array $args)
    {
        return $args['input']['code'] && app(TwoFactorAuthenticationProvider::class)->verify(
            decrypt($user->two_factor_secret), $args['input']['code']
        );
    }

    public function valid2FARecoveryCode(User $user, array $args)
    {
        if (! $args['input']['recovery_code']) {
            return;
        }

        return collect($user->recoveryCodes())->first(function ($code) use ($args) {
            return hash_equals($args['input']['recovery_code'], $code) ? $code : null;
        });
    }


    public function verify2FACode($rootValue, array $args)
    {
         $user = User::where('email', $args['input']['email'])->first();
        
        if ($code = $this->valid2FARecoveryCode($user,$args)) {
            $user->replaceRecoveryCode($code);
        } elseif (! $this->hasValid2FACode($user, $args)) {
            return (object)([
                'user' => new UserResource($user),
                'token' => null, 
                'token_type'=> null,
                'errors'=> [
                    [
                        'message' => 'Incorrect 2FA code Provided'
                    ]
                    
                ],
                'success' => false,
                ]);
        }

        return (object)([
            'user' => new UserResource($user),
            'token' => $user->createToken($args['input']['device_name'])->plainTextToken, 
            'token_type'=> 'bearer',
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
            'token' => null, 
            'token_type'=> null,
            'errors'=> null,
            'success' => true
            ]);
    }

    public function VerifyMobileVerificationCode($rootVaule, array $args)
    {
        $user = User::where('email', $args['input']['email'])->first();
        dd($user->getMobileNumberVerificationCode());
        if($user->getMobileNumberVerificationCode() != $args['input']['verification_code'])
        {
            return (object)([
                'user' => new UserResource($user),
                'token' => null, 
                'token_type'=> null,
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
                'token' => null, 
                'token_type'=> null,
                'errors'=> null,
                'success' => true,
                ]);
        }

        return (object)([
            'user' => new UserResource($user),
            'token' => $user->createToken($args['input']['device_name'])->plainTextToken, 
            'token_type'=> 'bearer',
            'errors'=> null,
            'success' => true
            ]);
    }

    public function resendEmailVerification($rootVaule, array $args)
    {
        $user = User::where('id', $args['input']['id'])->first();

        $user->sendEmailVerificationNotification();
        
        if($user->mobile_number_verified_at == null) {

            return (object)([
                'user' => new UserResource($user),
                'token' => null, 
                'token_type'=> null,
                'errors'=> null,
                'success' => true,
                ]);
        }

        return (object)([
            'user' => null,
            'token' => null, 
            'token_type'=> null,
            'errors'=> null,
            'success' => true
            ]);
    }

    public function checkEmailVerification($rootVaule, array $args)
    {
        $user = User::where('id', $args['input']['id'])->first();

        return (object)([
            'user' => new UserResource($user),
            'token' => null, 
            'token_type'=> null,
            'errors'=> null,
            'success' => true,
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

}
