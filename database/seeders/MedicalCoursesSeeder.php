<?php

namespace Database\Seeders;

use App\Models\MedicalCourse;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class MedicalCoursesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (json_decode(File::get(public_path("data/medical_courses.json"))) as $course) {
            MedicalCourse::firstOrCreate([
                'name' => $course->name,
                'award_code' => $course->code
            ]);
        }
    }
}
