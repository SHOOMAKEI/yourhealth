<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ProviderCompany extends Model implements HasMedia
{
    use HasFactory;
    use SoftDeletes;
    use InteractsWithMedia;
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
