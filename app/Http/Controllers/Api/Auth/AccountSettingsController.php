<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\App;
use Laravel\Fortify\Actions\DisableTwoFactorAuthentication;
use Laravel\Fortify\Actions\EnableTwoFactorAuthentication;
use Laravel\Fortify\Actions\GenerateNewRecoveryCodes;

class AccountSettingsController
{
    public function toggleOTP($rootValue, array $args)
    {
        $user = User::find(auth()->user()->id);

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

    public function enableTwoFactorAuthentication($rootValue, array $args)
    {
        $enable = App::make(EnableTwoFactorAuthentication::class);
        return $this->store2FACode($enable);
    }

    public function disableTwoFactorAuthentication($rootValue, array $args)
    {
        $disable = App::make(DisableTwoFactorAuthentication::class);
        return $this->destroy2FACode($disable);
    }

    public function regenerate2FARecoveryCodes($rootValue, array $args)
    {
        $regenerate = App::make(GenerateNewRecoveryCodes::class);
        return $this->regenerate2FACode($regenerate);
    }

    public function getRecoveryCodes($rootValue, array $args)
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

    public function store2FACode(EnableTwoFactorAuthentication $enable)
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

    public function destroy2FACode(DisableTwoFactorAuthentication $disable)
    {
        $user = User::find(auth()->user()->id);

        $disable($user);

        return (object) [
      'qrcode_svg' => null,
      'two_factor_recovery_codes' => null
    ];
    }

    public function regenerate2FACode(GenerateNewRecoveryCodes $generate)
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

    public function updateProfilePhoto($rootValue, array $args)
    {
        $user = User::find(auth()->user()->id);
        $explode = explode(',', $args['photo']);
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
        $user->addMediaFromBase64($args['photo'], 'image/'.$format)
      ->usingFileName(str_replace(' ', '-', rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . strtolower($user->name) . '-photo'  . '.'.$format))
      ->toMediaCollection('profile-photo');

        return $user;
    }
}
