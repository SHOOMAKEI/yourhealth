<?php

namespace Database\Seeders;

use App\Models\MedicalRegistrationCouncil;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class MedicalCouncilsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (json_decode(File::get(public_path("data/medical_councils.json"))) as $council) {
            MedicalRegistrationCouncil::firstOrCreate([
                'name' => $council->name,
            ]);
        }
    }
}
