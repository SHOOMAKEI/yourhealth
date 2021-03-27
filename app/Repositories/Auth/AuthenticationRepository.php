<?php


namespace App\Repositories\Auth;

use App\Contracts\Auth\AuthenticationRepositoryInterface;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use phpDocumentor\Reflection\Types\Null_;

class AuthenticationRepository implements AuthenticationRepositoryInterface
{
    public function login(array $request): User
    {
        $user = User::where($this->username($request)['field'], $request['username'])->first();
    }

    public function resendOtpCode(array $request): User
    {
        // TODO: Implement resendOtpCode() method.
    }

    public function verifyOtpCode(array $request): User
    {
        // TODO: Implement verifyOtpCode() method.
    }

    public function hasValid2FACode(User $user, array $request): bool
    {
        // TODO: Implement hasValid2FACode() method.
    }

    public function valid2FARecoveryCode(User $user, array $request): ?int
    {
        // TODO: Implement valid2FARecoveryCode() method.
    }

    public function verify2FACode(array $request): User
    {
        // TODO: Implement verify2FACode() method.
    }

    public function resendMobileNumberVerificationCode(array $request)
    {
        // TODO: Implement resendMobileNumberVerificationCode() method.
    }

    public function verifyMobileVerificationCode(array $request)
    {
        // TODO: Implement verifyMobileVerificationCode() method.
    }

    public function resendEmailVerification(array $request)
    {
        // TODO: Implement resendEmailVerification() method.
    }

    public function checkEmailVerification(array $request)
    {
        // TODO: Implement checkEmailVerification() method.
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

    public function logout(array $request)
    {
        if ($request['type'] == 'graphql') {
            $user = User::where('email', $request['email'])->first();

            $user->tokens()->where('name', $request['device_name'])->delete();

            return $this->graphQlResponse();
        }

        Redirect::route('login')->with('status', 'You logout successful.');
    }

    public function graphQlResponseWithError(array $message): object
    {
        return (object)$this->graphQlResponse(null, null, null, $message);
    }

    public function graphQlResponseWithSuccess(User $user): object
    {
        return (object)$this->graphQlResponse($user);
    }

    public function graphQlResponseWithToken(User $user, string $token, string $tokenType): object
    {
        return (object)$this->graphQlResponse($user, $token, $tokenType);
    }

    public function graphQlResponse(
        User $user = null,
        string $token  = null,
        string $tokenType  = null,
        array $errors = null,
        bool $success  = true
    ): array {
        return [
            'user' => $user,
            'token' => $token,
            'token_type'=> $tokenType,
            'errors'=> $errors,
            'success' => $success,
        ];
    }
}
