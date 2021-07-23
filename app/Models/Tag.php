<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Spatie\Activitylog\Traits\LogsActivity;

class Tag extends Model
{
    use HasFactory;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    public function articles(): BelongsToMany
    {
        return $this->belongsToMany(Article::class, 'articles_has_tags');
    }

    public function messages(): BelongsToMany
    {
        return $this->belongsToMany(Message::class, 'messages_has_tags');
    }

}
