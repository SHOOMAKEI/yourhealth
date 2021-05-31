<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Spatie\Activitylog\Traits\LogsActivity;

class Message extends Model
{
    use HasFactory;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'messages_has_tags');
    }

    public function author(): HasOne
    {
        return $this->hasOne(User::class, 'author');
    }

}
