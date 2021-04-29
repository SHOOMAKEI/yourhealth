<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\Activitylog\Traits\LogsActivity;

class PackagePlan extends Model
{
    use HasFactory;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];


    public function package_features(): BelongsToMany
    {
        return $this->belongsToMany(PackageFeature::class, 'package_feature_package_plan');
    }

    public function package_member_ranges(): BelongsToMany
    {
        return $this->belongsToMany(PackageMemberRange::class, 'member_range_package_plan');
    }

    public function membership_category(): BelongsTo
    {
        return $this->belongsTo(MembershipCategory::class);
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
