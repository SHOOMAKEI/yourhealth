<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ProviderFacility extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    public function services()
    {
        return $this->belongsToMany(Service::class, 'facility_service', 'provider_facility_id','service_id')->withPivot('price', 'compare_price', 'currency');
    }

    public function provider_company()
    {
        return $this->belongsTo(ProviderCompany::class);
    }

    public function provider_sub_level()
    {
        return $this->belongsTo(ProviderSubLevel::class);
    }
}
