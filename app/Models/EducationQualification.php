<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EducationQualification extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function medical_course()
    {
        return $this->belongsTo(MedicalCourse::class, 'medical_course_id');
    }

    public function medical_institute()
    {
        return $this->belongsTo(MedicalInstitute::class, 'medical_institute_id');
    }
}
