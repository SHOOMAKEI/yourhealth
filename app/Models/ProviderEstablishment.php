<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProviderEstablishment extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function provider_profiles()
    {
        return $this->belongsToMany(ProviderProfile::class, 'establishment_provider_profile', 'provider_establishment_id','provider_profile_id');
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }
}
