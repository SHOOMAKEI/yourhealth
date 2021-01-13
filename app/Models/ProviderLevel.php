<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProviderLevel extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function provider_sub_levels()
    {
       return $this->hasMany(ProviderSubLevel::class);
    }
}
