<?php

namespace App\Contracts\Repositories\Auth;

use App\Models\User;

interface AuthenticationRepositoryInterface
{
    public function login(array $request):object;

    public function resendOtpCode(array $request): object;

    public function verifyOtpCode(array $request): object;

    public function hasValid2FACode(User $user, array $request): bool;

    public function valid2FARecoveryCode(User $user, array $request): ?String;

    public function verify2FACode(array $request): object;

    public function resendMobileNumberVerificationCode(array $request):object;

    public function verifyMobileVerificationCode(array $request):object;

    public function resendEmailVerification(array $request):object;

    public function checkEmailVerification(array $request):object;

    public function username(array $request): array;

    public function logout(array $request):object;

    public function graphQlResponseWithError(string $message): object;

    public function graphQlResponseWithSuccess(User $user): object;

    public function graphQlResponseWithToken(User $user, string $token, string $tokenType): object;

    public function graphQlResponse(
        User $user = null,
        string $token  = null,
        string $tokenType  = null,
        string $errors = null,
        bool $success  = true
    ): object;

    public function checkIfUserAccountIsAvailableOrDisabled($user):bool;

    public function checkIfThePasswordIsCorrect(User $user, string $password): bool;

    public function checkIfTheEmailIsNotVerified(User $user): bool;

    public function checkIfTheMobileNumberIsNotVerified(User $user): bool;

    public function checkIfTheOTPIsEnabled(User $user): bool;

    public function checkIfThe2FAIsEnabled(User $user): bool;
}
