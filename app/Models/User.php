<?php

namespace App\Models;

use App\Contracts\MustVerifyMobileNumber;
use App\Traits\MustVerifyMobileNumber as VerifyMobileNumber;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail, MustVerifyMobileNumber, HasMedia
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;
    use HasRoles;
    use HasPermissions;
    use VerifyMobileNumber;
    use InteractsWithMedia;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'mobile_number',
        'is_active',
        'is_subscribe',
        'verification_code',
        'otp_code',
        'enabled_otp',
        'profile_stage',
        'otp_expire_at',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
        'verification_code',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'mobile_number_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url',
    ];

    public function getSettingsAttribute()
    {
        return  [
            'hasOtpEnabled' => ($this->enabled_otp == true)?true:false,
            'hasVerifiedEmail' => ($this->email_verified_at != null)?true:false,
            'hasVerifiedMobileNumber' => ($this->mobile_number_verified_at != null)?true:false,
            'hasTwoFactoryEnabled'=> ($this->two_factor_recovery_codes != null)?true:false,
            'textResendCounter' => $this->text_resend_count,
            'loginTrialsCounter' => $this->login_trial_count,
        ];
    }


    public function getProviderProfileAttribute()
    {
        $provider_profile = ProviderProfile::where('user_id', $this->id)
                                                    ->first();

        return isset($provider_profile)?$provider_profile->toArray():null;
    }

    public function getClientProfileAttribute()
    {
        $client_profile = ClientProfile::where('user_id', $this->id)
            ->first();

        return isset($client_profile)?$client_profile->toArray():null;
    }

    public function getAccountRolesAttribute()
    {
        return $this->getRoleNames();
    }

    public function getAccountPermissionsAttribute()
    {
        return $this->getAllPermissions();
    }

    public function service_provider()
    {
        return $this->hasOne(ProviderProfile::class);
    }

    public function client_profile()
    {
        return $this->hasOne(ClientProfile ::class);
    }

    public function getProfilePhotoPathAttribute()
    {
        if (($this->hasRole('service-provider'))&&
            $this->getFirstMediaUrl('profile-photo')==null) {
            return asset('avatar/service_provider_profile_avatar.jpg');
        }

        if ($this->hasRole('patient')&&
            $this->getFirstMediaUrl('profile-photo')==null) {
            return asset('avatar/client_profile_avatar.jpg');
        }

        if ($this->hasRole('super-admin')&&
            $this->getFirstMediaUrl('profile-photo')==null) {
            return asset('avatar/client_profile_avatar.jpg');
        }

        return $this->getFirstMediaUrl('profile-photo');
    }
}
