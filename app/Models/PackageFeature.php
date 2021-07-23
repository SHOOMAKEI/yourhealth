<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class PackageFeature extends Model
{
    use HasFactory;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];


    public function services()
    {
        return $this->belongsToMany(Service::class, 'package_feature_service');
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
