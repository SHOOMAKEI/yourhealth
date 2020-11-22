<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ProviderProfile extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $guarded = [];

    public function medical_registrations()
    {
        return $this->belongsToMany(MedicalRegistrationCouncil::class, 'medical_registration_provider_profile', 'provider_id','medical_registration_council_id')->withPivot('registration_number');
    }

    public function establishments()
    {
        return $this->belongsToMany(ProviderEstablishment::class, 'establishment_provider_profile', 'provider_profile_id','provider_establishment_id');
    }

    public function medical_procedures()
    {
        return $this->belongsToMany(MedicalProcedure::class, 'medical_procedure_provider', 'provider_id','medical_procedure_id')->withPivot('price', 'currency');
    }

    public function medical_specializations()
    {
        return $this->belongsToMany(Specialization::class, 'provider_profile_specialization', 'provider_profile_id','specialization_id');
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

    public function education_qualifications()
    {
        return $this->hasMany(EducationQualification::class, 'provider_profile_id');
    }

    public function verifications()
    {
        return $this->belongsToMany(RequiredVerification::class, 'provider_verifications','provider_id');
    }
    public function account()
    {
        return $this->belongsTo(User::class, 'user_id');
    }    
   
}
