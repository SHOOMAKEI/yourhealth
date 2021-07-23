<?php


namespace App\Contracts\Repositories\Auth;


use App\Http\Resources\UserResource;
use App\Models\User;
use Laravel\Fortify\Actions\DisableTwoFactorAuthentication;
use Laravel\Fortify\Actions\EnableTwoFactorAuthentication;
use Laravel\Fortify\Actions\GenerateNewRecoveryCodes;

interface SettingsRepositoryInterface
{
    public function toggleOTP(): UserResource;

    public function enableTwoFactorAuthentication(): object;

    public function disableTwoFactorAuthentication():object;

    public function regenerate2FARecoveryCodes(): object;

    public function getRecoveryCodes(): object;

    public function store2FACode(EnableTwoFactorAuthentication $enable): object;

    public function destroy2FACode(DisableTwoFactorAuthentication $disable): object;

    public function regenerate2FACode(GenerateNewRecoveryCodes $generate): object;

    public function updateProfilePhoto(array $request): User;

    public function updateAccountInfo(array $request): User;

    public function updatePassword(array $request): User;

}
