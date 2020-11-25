<?php

namespace Database\Seeders;

use App\Models\Specialization;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class SpecializationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (json_decode(File::get(public_path("data/specializations.json"))) as $specialization) {
            Specialization::firstOrCreate([
                'name' => $specialization->name,
            ]);
        }
    }
}
