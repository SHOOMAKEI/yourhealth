<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Spatie\Activitylog\Traits\LogsActivity;

class ReviewComment extends Model
{
    use HasFactory;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }

    public function replies(): HasMany
    {
        return $this->hasMany(CommentReply::class);
    }

    public function author(): HasOne
    {
        return $this->hasOne(User::class);
    }
}
