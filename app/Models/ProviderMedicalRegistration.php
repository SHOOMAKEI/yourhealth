<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ProviderMedicalRegistration extends Model implements HasMedia
{
    use HasFactory;
    use SoftDeletes;
    use InteractsWithMedia;
    use LogsActivity;

    protected $guarded = [];

    protected static $logAttribute = ['*'];

    public function getAttachmentAttribute(): string
    {
        return $this->getFirstMediaUrl('provider-medical-registration-files');
    }

    public function service_category(): BelongsTo
    {
        return $this->belongsTo(ServiceCategory::class);
    }
}
