<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ProviderFacility extends Model implements HasMedia
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;
    use InteractsWithMedia;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    public function services()
    {
        return $this->belongsToMany(
            Service::class,
            'facility_service',
            'provider_facility_id',
            'service_id')->withPivot('price', 'compare_price', 'currency');
    }

    public function provider_company()
    {
        return $this->belongsTo(ProviderCompany::class);
    }

    public function provider_sub_level()
    {
        return $this->belongsTo(ProviderSubLevel::class);
    }

    public function getTinAttachmentAttribute()
    {
        return $this->getFirstMediaUrl('provider-facility-tin-files');
    }

    public function getVrnAttachmentAttribute()
    {
        return $this->getFirstMediaUrl('provider-facility-vrn-files');
    }

    public function provider_profile()
    {
    }
}
