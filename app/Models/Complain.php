<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Spatie\Activitylog\Traits\LogsActivity;

class Complain extends Model
{
    use HasFactory;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    public function author(): HasOne
    {
        return $this->hasOne(User::class, 'author');
    }
}
