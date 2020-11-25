<?php

namespace Database\Seeders;

use App\Models\MedicalProcedure;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class ProceduresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        
        // (json_decode(utf8_decode(File::get(public_path("data/procedures.json"))),true));
        // dd(json_last_error()); die();
        foreach (json_decode(File::get(public_path("data/procedures.json"))) as $procedure) {
            MedicalProcedure::firstOrCreate([
                'name' => $procedure->name,
            ]);
        }
    }
}
