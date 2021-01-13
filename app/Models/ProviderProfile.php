<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ProviderProfile extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    public function provider_medical_registrations()
    {
        return $this->hasMany(ProviderMedicalRegistration::class);
    }

    public function provider_companies()
    {
        return $this->belongsToMany(ProviderCompany::class, 'company_provider_profile', 'provider_profile_id','provider_company_id');
    }

    public function provider_facilities()
    {
        return $this->belongsToMany(ProviderFacility::class, 'facility_provider_profile', 'provider_profile_id','provider_facility_id');
    }

    public function services()
    {
        return $this->belongsToMany(Service::class, 'service_provider_profile', 'provider_profile_id','service_id')->withPivot('price', 'compare_price', 'currency');
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function consultation_fee()
    {
        return $this->hasOne(ConsultationFee::class, 'provider_id');
    }

    public function provider_qualifications()
    {
        return $this->hasMany(ProviderQualification::class, 'provider_profile_id');
    }

    public function verifications()
    {
        return $this->belongsToMany(RequiredVerification::class, 'provider_verifications','provider_id');
    }
    public function account()
    {
        return $this->belongsTo(User::class, 'user_id');
    }    

    public function day_sessions()
    {
        return $this->belongsToMany(DaySession::class, 'day_session_provider');
    }
   
}
