<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalCourse extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function institute()
    {
        return $this->belongsTo(MedicalInstitute::class, 'medical_institute_id');
    }
}
