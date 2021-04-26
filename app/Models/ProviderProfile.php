<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ProviderProfile extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    protected $casts = [
      'submitted_at'
    ];

    public function provider_medical_registrations(): HasMany
    {
        return $this->hasMany(ProviderMedicalRegistration::class);
    }

    public function provider_companies(): BelongsToMany
    {
        return $this->belongsToMany(ProviderCompany::class, 'company_provider_profile', 'provider_profile_id', 'provider_company_id');
    }

    public function provider_facilities(): BelongsToMany
    {
        return $this->belongsToMany(ProviderFacility::class, 'facility_provider_profile', 'provider_profile_id', 'provider_facility_id');
    }

    public function services(): BelongsToMany
    {
        return $this->belongsToMany(Service::class, 'service_provider_profile', 'provider_profile_id', 'service_id')->withPivot('price', 'compare_price', 'currency');
    }

//    public function country(): BelongsTo
//    {
//        return $this->belongsTo(Country::class);
//    }
//
//    public function city()
//    {
//        return $this->belongsTo(City::class);
//    }


    public function provider_qualifications()
    {
        return $this->hasMany(ProviderQualification::class, 'provider_profile_id');
    }

    public function verifications()
    {
        return $this->belongsToMany(RequiredVerification::class, 'provider_verifications', 'provider_id');
    }
    public function account()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function day_sessions()
    {
        return $this->belongsToMany(DaySession::class, 'day_session_provider');
    }

    public function rejection_reasons()
    {
        return $this->hasMany(ProviderRejectionReason::class, 'provider_profile_id');
    }

    public function getCreatedAtAttribute(): string
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $this->attributes['created_at'])->format('M j, Y G:ia');
    }

    public function getUpdatedAtAttribute(): string
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $this->attributes['updated_at'])->format('M j, Y G:ia');
    }
}
