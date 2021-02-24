<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;

class ProviderFacilityOwner extends Model
{
    use HasFactory;
    use LogsActivity;
    use SoftDeletes;

    protected $guarded = [];

    protected static $logAttribute = ['*'];
}
