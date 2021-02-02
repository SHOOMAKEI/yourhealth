<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProviderCompany extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    public function provider_profile()
    {
        return $this->belongsToMany(ProviderProfile::class, 'company_provider_profile')->withPivot('role');
    }

    public function getTinAttachmentAttribute()
    {
        
        return $this->getFirstMediaUrl('provider-company-tin-files');

    }

    public function getVrnAttachmentAttribute()
    {
        
        return $this->getFirstMediaUrl('provider-company-vrn-files');

    }
}
