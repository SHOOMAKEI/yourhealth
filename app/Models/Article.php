<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Article extends Model implements HasMedia
{
    use HasFactory;
    use LogsActivity;
    use InteractsWithMedia;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    protected $appends =[
      'likes_count',
      'comments_count',
      'cover_image',
    ];

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'articles_has_tags');
    }

    public function article_author(): belongsTo
    {
        return $this->belongsTo(User::class, 'author', 'id');
    }

    public function getLikesCountAttribute(): Int
    {
        return DB::table('articles_has_likes')->where('article_id', $this->id)->count();
    }

    public function getCoverImageAttribute(): string
    {
        if ($this->getFirstMediaUrl('article-cover-image')==null) {
            return asset('avatar/service_provider_profile_avatar.jpg');
        }

        return $this->getFirstMediaUrl('article-cover-image');
    }

    public function getCommentsCountAttribute()
    {
        return $this->comments->count();
    }
}

