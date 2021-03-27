<?php

namespace App\Contracts\Auth;

use App\Models\User;
use phpDocumentor\Reflection\DocBlock\Tags\Since;

interface AuthenticationRepositoryInterface
{
    public function login(array $request): User;

    public function resendOtpCode(array $request): User;

    public function verifyOtpCode(array $request): User;

    public function hasValid2FACode(User $user, array $request): bool;

    public function valid2FARecoveryCode(User $user, array $request): ?int;

    public function verify2FACode(array $request): User;

    public function resendMobileNumberVerificationCode(array $request);

    public function verifyMobileVerificationCode(array $request);

    public function resendEmailVerification(array $request);

    public function checkEmailVerification(array $request);

    public function username(array $request): array;

    public function logout(array $request);

    public function graphQlResponseWithError(array $message): object;

    public function graphQlResponseWithSuccess(User $user): object;

    public function graphQlResponseWithToken(User $user, string $token, string $tokenType): object;

    public function graphQlResponse(
        User $user = null,
        string $token  = null,
        string $tokenType  = null,
        array $errors = null,
        bool $success  = true
    ): array;
}
