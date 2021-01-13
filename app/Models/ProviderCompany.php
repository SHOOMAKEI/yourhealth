<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProviderCompany extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded =[];

    public function provider_profile()
    {
        return $this->belongsToMany(ProviderProfile::class, 'company_provider_profile')->withPivot('role');
    }
}
