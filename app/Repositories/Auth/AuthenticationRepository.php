<?php


namespace App\Repositories\Auth;

use App\Contracts\Repositories\Auth\AuthenticationRepositoryInterface;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Laravel\Fortify\Contracts\TwoFactorAuthenticationProvider;

class AuthenticationRepository implements AuthenticationRepositoryInterface
{
    protected $guard;

    public function __construct(StatefulGuard $guard)
    {
        $this->guard = $guard;
    }

    public function login(array $request): object
    {
        $user = User::where($this->username($request)['field'], $request['username'])->first();

        if ($this->checkIfUserAccountIsAvailableOrDisabled($user)) {
            if ($request['type']== GRAPHQL_REQUEST) {
                return $this->graphQlResponseWithError(
                    'User account does not exist or
                    has been disabled contact support team for more information.'
                );
            }

            return Redirect::route('login')
                    ->with(
                        'status',
                        'You have been register successful please login \n
                        to verify your mobile number and continue using the platform'
                    );
        }

        if ($this->checkIfThePasswordIsCorrect($user, $request['password'])) {
            if ($request['type']== GRAPHQL_REQUEST) {
                return $this->graphQlResponseWithError('Incorrect Credentials Provided');
            }

            return Redirect::route('login')
                ->with([
                    'status'=> 'Incorrect Credentials Provided',
                    'alertType' => 'error'
                    ]);
        }

//        if ($this->checkIfTheEmailIsNotVerified($user)) {
//            if ($request['type']== GRAPHQL_REQUEST) {
//                return $this->graphQlResponseWithSuccess($user);
//            }
//
//            $this->guard->login($user);
//            return Redirect::route('verification.notice')
//                ->with([
//                    'status'=> 'Please verify your email first',
//                    'alertType' => 'error'
//                ]);
//        }

        if ($this->checkIfTheMobileNumberIsNotVerified($user)) {
            if ($request['type']== GRAPHQL_REQUEST) {
                return $this->graphQlResponseWithSuccess($user);
            }

            $this->guard->login($user);
            return Redirect::route('verify.mobile-number')
                ->with([
                    'status'=> 'Please verify your mobile number first first',
                    'alertType' => 'error'
                ]);
        }

        if ($this->checkIfTheOTPIsEnabled($user)) {
            if ($request['type']== GRAPHQL_REQUEST) {
                return $this->graphQlResponseWithSuccess($user);
            }

            $user->sendOtpCodeNotification();

            return Redirect::route('otp.notice')
                ->with([
                    'status'=> 'Please Enter the OTP code that sent to your mobile number',
                    'alertType' => 'success',
                    'email' => $user->email
                ]);
        }

        if ($this->checkIfThe2FAIsEnabled($user)) {
            if ($request['type']== GRAPHQL_REQUEST) {
                return $this->graphQlResponseWithSuccess($user);
            }

            return Redirect::route('two-factor.login')
                ->with([
                    'email' => $user->email
                ]);
        }

        if ($request['type']== GRAPHQL_REQUEST) {
            return $this->graphQlResponseWithToken(
                $user,
                $user->createToken($request['device_name'])->plainTextToken,
                'bearer'
            );
        }
        $this->guard->login($user);

        return $this->redirectUserAfterAuthentication($user);
    }

    public function redirectUserAfterAuthentication(User $user)
    {
        if ($user->hasRole('service-provider') && $user->hasRole('verified-service-provider')) {
            return redirect()->route('verified_sp.home');
        }
        if ($user->hasRole('service-provider') && $user->hasRole('unverified-service-provider')) {
            return redirect()->route('personalInfo.index');
        }
        if ($user->hasRole('super-admin')) {
            return redirect()->route('admin.dashboard');
        }

        return redirect(RouteServiceProvider::HOME);
    }


    public function resendOtpCode(array $request): object
    {
        $user = User::where('email', $request['email'])->first();

        $user->sendOtpCodeNotification();

        if ($request['type']== GRAPHQL_REQUEST) {
            return $this->graphQlResponseWithToken(
                $user,
                $user->createToken($request['device_name'])->plainTextToken,
                'bearer'
            );
        }

        return Redirect::route('otp.notice')
            ->with([
                'status'=> 'Please Enter the OTP Code that sent to your mobile number',
                'alertType' => 'success',
                'email' => $user->email
            ]);
    }

    public function verifyOtpCode(array $request): object
    {
        $user = User::where('email', $request['email'])->first();

        if ($user->getOtpCodeForVerification() != $request['otp_code']) {
            if ($request['type']== GRAPHQL_REQUEST) {
                return $this->graphQlResponseWithError('Incorrect OTP Provided');
            }

            return Redirect::route('otp.notice')
                ->with([
                    'status'=> 'Incorrect OTP Code Provided',
                    'alertType' => 'error',
                    'email' => $user->email
                ]);
        }

        $user->forceFill([
            'otp_code' => null,
        ])->save();

        if ($request['type']== GRAPHQL_REQUEST) {
            return $this->graphQlResponseWithToken(
                $user,
                $user->createToken($request['device_name'])->plainTextToken,
                'bearer'
            );
        }
        $this->guard->login($user);
        return $this->redirectUserAfterAuthentication($user);
    }

    public function hasValid2FACode(User $user, array $request): bool
    {
        return $request['code'] && app(TwoFactorAuthenticationProvider::class)->verify(
            decrypt($user->two_factor_secret),
            $request['code']
        );
    }

    public function valid2FARecoveryCode(User $user, array $request): ?String
    {
        if ($request['recovery_code'] == null) {
            return null;
        }

        return collect($user->recoveryCodes())->first(function ($code) use ($request) {
            return hash_equals($request['recovery_code'], $code) ? $code : null;
        });
    }

    public function verify2FACode(array $request): object
    {
        $user = User::where('email', $request['email'])->first();

        if ($code = $this->valid2FARecoveryCode($user, $request)) {
            $user->replaceRecoveryCode($code);
        } elseif (! $this->hasValid2FACode($user, $request)) {
            if ($request['type']== GRAPHQL_REQUEST) {
                return $this->graphQlResponseWithError('Incorrect Two Factory Code Provided');
            }

            return Redirect::route('two-factor.login')
                    ->with([
                        'status'=> 'Incorrect Two Factory Code Provided',
                        'alertType' => 'error',
                        'email' => $user->email
                    ]);
        }

        if ($request['type']== GRAPHQL_REQUEST) {
            return $this->graphQlResponseWithToken(
                $user,
                $user->createToken($request['device_name'])->plainTextToken,
                'bearer'
            );
        }
        $this->guard->login($user);

        return $this->redirectUserAfterAuthentication($user);
    }

    public function resendMobileNumberVerificationCode(array $request): object
    {
        $user = User::where('email', $request['email'])->first();

        $user->sendMobileNumberVerificationNotification();

        if ($request['type']== GRAPHQL_REQUEST) {
            return $this->graphQlResponseWithSuccess($user);
        }

        return Redirect::route('home')
            ->with([
                'status'=> 'Please Enter the two factor code obtain form your two factor authenticator',
                'alertType' => 'error'
            ]);
    }

    public function verifyMobileVerificationCode(array $request):object
    {
        $user = User::where('email', $request['email'])->first();

        if ($user->getMobileNumberVerificationCode() != $request['verification_code']) {
            if ($request['type']== GRAPHQL_REQUEST) {
                return $this->graphQlResponseWithError('Incorrect Verification Code Provided');
            }

            return Redirect::route('login')
                ->with([
                    'status'=> 'Incorrect Credentials Provided',
                    'alertType' => 'error'
                ]);
        }

        $user->markMobileNumberAsVerified();

        if ($request['type']== GRAPHQL_REQUEST) {
            return $this->graphQlResponseWithToken(
                $user,
                $user->createToken($request['device_name'])->plainTextToken,
                'bearer'
            );
        }
        $this->guard->login($user);
        return Redirect::route('home')
            ->with([
                'status'=> 'Please Enter the two factor code obtain form your two factor authenticator',
                'alertType' => 'error'
            ]);
    }

    public function resendEmailVerification(array $request):object
    {
        $user = User::where('email', $request['email'])->first();

        $user->sendEmailVerificationNotification();

        if ($request['type']== GRAPHQL_REQUEST) {
            return $this->graphQlResponseWithSuccess($user);
        }

        return Redirect::route('home')
            ->with([
                'status'=> 'Please Enter the two factor code obtain form your two factor authenticator',
                'alertType' => 'error'
            ]);
    }

    public function checkEmailVerification(array $request):object
    {
        $user = User::where('email', $request['id'])->first();

        if ($request['type']== GRAPHQL_REQUEST) {
            return $this->graphQlResponseWithSuccess($user);
        }

        return Redirect::route('home')
            ->with([
                'status'=> 'Please Enter the two factor code obtain form your two factor authenticator',
                'alertType' => 'error'
            ]);
    }

    public function username(array $request): array
    {
        $login = $request['username'];

        if (filter_var($login, FILTER_VALIDATE_EMAIL)) {
            $field = 'email';
        } else {
            $field = 'mobile_number';
        }

        $request+=['field' => $field];

        return $request+=[$field => $login];
    }

    public function logout(array $request):object
    {
        if ($request['type'] == GRAPHQL_REQUEST) {
            $user = User::where('email', $request['email'])->first();

            $user->tokens()->where('name', $request['device_name'])->delete();

            return $this->graphQlResponse();
        }
        $this->guard->logout();
        return Redirect::route('login')->with('status', 'You logout successful.');
    }

    public function graphQlResponseWithError(string $message): object
    {
        return $this->graphQlResponse(null, null, null, $message, false);
    }

    public function graphQlResponseWithSuccess(User $user): object
    {
        return $this->graphQlResponse($user);
    }

    public function graphQlResponseWithToken(User $user, string $token, string $tokenType): object
    {
        return $this->graphQlResponse($user, $token, $tokenType);
    }

    public function graphQlResponse(
        User $user = null,
        string $token  = null,
        string $tokenType  = null,
        string $errors = null,
        bool $success  = true
    ): object {
        return (object) [
            'user' => $user,
            'token' => $token,
            'token_type'=> $tokenType,
            'errors'=> ['message' => $errors],
            'success' => $success,
        ];
    }

    public function checkIfUserAccountIsAvailableOrDisabled($user):bool
    {
        return (! $user || ($user->is_active ==false));
    }

    public function checkIfThePasswordIsCorrect(User $user, string $password): bool
    {
        return (! $user || ! Hash::check($password, $user->password));
    }

    public function checkIfTheEmailIsNotVerified(User $user): bool
    {
        return ($user->email_verified_at == null);
    }

    public function checkIfTheMobileNumberIsNotVerified(User $user): bool
    {
        return ($user->mobile_number_verified_at == null);
    }

    public function checkIfTheOTPIsEnabled(User $user): bool
    {
        return ($user->enabled_otp == true);
    }

    public function checkIfThe2FAIsEnabled(User $user): bool
    {
        return ($user->two_factor_secret || $user->two_factor_recovery_codes);
    }
}
