<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;

class Service extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    public function service_sub_category(): BelongsTo
    {
        return $this->belongsTo(ServiceSubCategory::class);
    }

    public function getCreatedAtAttribute(): string
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $this->attributes['created_at'])->format('M j, Y G:ia');
    }

    public function getUpdatedAtAttribute(): string
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $this->attributes['updated_at'])->format('M j, Y G:ia');
    }

    public function getApprovedAtAttribute(): string
    {
        if (!is_null($this->attributes['approved_at'])) {
            return Carbon::createFromFormat('Y-m-d H:i:s', $this->attributes['approved_at'])->format('M j, Y G:ia');
        }
        return  "";
    }

    public function approve(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by', 'id');
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }

    public function individual_providers(): BelongsToMany
    {
        return $this->belongsToMany(ProviderProfile::class, 'service_provider_profile')->withPivot('price', 'compare_price', 'currency');
    }

    public function facility_providers(): BelongsToMany
    {
        return $this->belongsToMany(ProviderProfile::class, 'facility_service')->withPivot('price', 'compare_price', 'currency');
    }
}
