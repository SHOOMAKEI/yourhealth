<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;

class ServiceSubCategory extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    public function services()
    {
        return $this->hasMany(Service::class);
    }

    public function service_category()
    {
        return $this->belongsTo(ServiceCategory::class);
    }
}
