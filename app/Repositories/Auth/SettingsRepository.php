<?php


namespace App\Repositories\Auth;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Hash;
use Laravel\Fortify\Actions\DisableTwoFactorAuthentication;
use Laravel\Fortify\Actions\EnableTwoFactorAuthentication;
use Laravel\Fortify\Actions\GenerateNewRecoveryCodes;

class SettingsRepository implements \App\Contracts\Repositories\Auth\SettingsRepositoryInterface
{
    public function toggleOTP(): UserResource
    {
        $user = User::find(auth()->user()->id);

        if ($user->enabled_otp == null) {
            $user->forceFill([
                'enabled_otp' => false,
            ])->save();
        }

        if (!$user->enabled_otp) {
            $user->forceFill([
                'two_factor_secret' => null,
                'two_factor_recovery_codes' => null,
            ])->save();
        }

        $user->forceFill([
            'enabled_otp' => !$user->enabled_otp,
        ])->save();

        return new UserResource($user);
    }

    public function enableTwoFactorAuthentication(): object
    {
        $enable = App::make(EnableTwoFactorAuthentication::class);
        return $this->store2FACode($enable);
    }

    public function disableTwoFactorAuthentication(): object
    {
        $disable = App::make(DisableTwoFactorAuthentication::class);
        return $this->destroy2FACode($disable);
    }

    public function regenerate2FARecoveryCodes(): object
    {
        $regenerate = App::make(GenerateNewRecoveryCodes::class);
        return $this->regenerate2FACode($regenerate);
    }

    public function getRecoveryCodes(): object
    {
        $user = User::find(auth()->user()->id);
        if (! $user->two_factor_secret ||
            ! $user->two_factor_recovery_codes) {
            return (object) [
                'qrcode_svg' => null,
                'two_factor_recovery_codes' => null,
            ];
        }

        return (object) [
            'qrcode_svg' => null,
            'two_factor_recovery_codes' => collect(json_decode(decrypt($user->two_factor_recovery_codes), true))
                ->map(function ($code) {
                    $data['code'] = $code;
                    return $data;
                })->toArray()
        ];
    }

    public function store2FACode(EnableTwoFactorAuthentication $enable): object
    {
        $user = User::find(auth()->user()->id);

        if ($user->enabled_otp) {
            $user->forceFill([
                'enabled_otp' => !$user->enabled_otp,
            ])->save();
        }

        $enable($user);

        return (object) [
            'qrcode_svg' => $user->twoFactorQrCodeSvg(),
            'two_factor_recovery_codes' => collect(json_decode(decrypt($user->two_factor_recovery_codes), true))
                ->map(function ($code) {
                    $data['code'] = $code;
                    return $data;
                })->toArray()
        ];
    }

    public function destroy2FACode(DisableTwoFactorAuthentication $disable): object
    {
        $user = User::find(auth()->user()->id);

        $disable($user);

        return (object) [
            'qrcode_svg' => null,
            'two_factor_recovery_codes' => null
        ];
    }

    public function regenerate2FACode(GenerateNewRecoveryCodes $generate): object
    {
        $user = User::find(auth()->user()->id);
        $generate($user);

        return (object) [
            'qrcode_svg' => null,
            'two_factor_recovery_codes' => collect(json_decode(decrypt($user->two_factor_recovery_codes), true))
                ->map(function ($code) {
                    $data['code'] = $code;
                    return $data;
                })->toArray()
        ];
    }

    public function updateProfilePhoto(array $request): User
    {
        $user = User::find(auth()->user()->id);

        $explode = explode(',', $request['photo']);
        $format = str_replace(
            [
                'data:image/',
                ';',
                'base64',
            ],
            [
                '', '', '',
            ],
            $explode[0]
        );
        $user->clearMediaCollection('profile-photo');
        $user->addMediaFromBase64($request['photo'], 'image/'.$format)
            ->usingFileName(str_replace(' ', '-', rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . strtolower($user->name) . '-photo'  . '.'.$format))
            ->toMediaCollection('profile-photo');

        return $user;
    }

    public function updateAccountInfo(array $request): User
    {
        $user = User::find(auth()->user()->id);

        $user->forceFill([
            'email' => $request['email'],
            'mobile_number' => $request['mobile_number']
        ])->save();

        if ($request['photo'] != null) {
            $this->updateProfilePhoto($request);
        }

        return $user;
    }

    public function updatePassword(array $request): User
    {
        $user = User::find(auth()->user()->id);

        $user->forceFill([
            'password' => Hash::make($request['password']),
        ])->save();

        return $user;
    }
}
