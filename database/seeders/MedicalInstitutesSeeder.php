<?php

namespace Database\Seeders;

use App\Models\MedicalInstitute;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class MedicalInstitutesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (json_decode(File::get(public_path("data/medical_institutes.json"))) as $institute) {
            MedicalInstitute::firstOrCreate([
                'name' => $institute->name,
            ]);
        }
    }
}
