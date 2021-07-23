<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;

class MembershipCategory extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    public function packages(): HasMany
    {
        return $this->hasMany(PackagePlan::class);
    }

    public function active_packages()
    {
        return PackagePlan::where(['membership_category_id'=> $this->id, 'is_active'=> true])->get()->map(function ($query) {
            $data['id'] = $query->id;
            $data['name'] = $query->name;
            $data['price'] = $query->price;
            $data['currency'] = $query->currency;
            $data['has_price'] = $query->has_price;
            $data['has_member_range'] = $query->has_member_range;
            $data['membership_category'] = $query->membership_category;
            $data['features'] = $query->package_features->map(function ($q) {
                $data['id'] = $q->id;
                $data['name'] = $q->name;
                $data['services'] = $q->services->map(function ($query) {
                    $data['id'] = $query->id;
                    $data['name'] = $query->name;
                    $data['created_ta'] = $query->created_at;

                    return $data;
                });

                return $data;
            });
            $data['ranges'] = $query->package_member_ranges;
            $data['created_at'] = $query->created_at;
            $data['updated_at'] = $query->updated_at;
            $data['is_active'] = $query->is_active;

            return $data;
        });
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
