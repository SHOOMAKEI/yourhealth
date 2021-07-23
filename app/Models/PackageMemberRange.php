<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;

class PackageMemberRange extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    public function getCreatedAtAttribute(): string
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $this->attributes['created_at'])->format('M j, Y G:ia');
    }

    public function getUpdatedAtAttribute(): string
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $this->attributes['updated_at'])->format('M j, Y G:ia');
    }
}
