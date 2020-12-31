<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ServiceCategory extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = [];

    public function service_sub_category()
    {
        return $this->hasMany(ServiceSubCategory::class);
    }
}
