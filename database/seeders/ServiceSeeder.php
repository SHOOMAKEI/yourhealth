<?php

namespace Database\Seeders;

use App\Models\Service;
use App\Models\ServiceCategory;
use Illuminate\Database\Seeder;
use App\Models\ServiceSubCategory;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ServiceCategory::firstOrCreate(['name' => 'Laboratory']);
        ServiceCategory::firstOrCreate(['name' => 'Consultations']);
        ServiceCategory::firstOrCreate(['name' => 'Admissions']);
        ServiceCategory::firstOrCreate(['name' => 'Procedures']);
        ServiceCategory::firstOrCreate(['name' => 'Radiology']);
        $radiology = ServiceCategory::where('name', 'Radiology')->first();
        $radiology->service_sub_categories()->saveMany([
            new ServiceSubCategory(['name' => 'MRI']),
            new ServiceSubCategory(['name' => 'X-ray']),
            new ServiceSubCategory(['name' => 'Ultrasound']),
            new ServiceSubCategory(['name' => 'ECHO']),
            new ServiceSubCategory(['name' => 'EEG']),
            new ServiceSubCategory(['name' => 'ECG']),
            new ServiceSubCategory(['name' => 'CT- Scan'])
            
        ]);
        $xray = ServiceSubCategory::where('name', 'X-ray')->first();
        $xray->services()->saveMany([
            new Service(['name' => 'Chest X-Ray']),
            new Service(['name' => 'Skull X-Ray']),
            new Service(['name' => 'Supine Abdominal X-ray ']),
        ]);
        ServiceCategory::firstOrCreate(['name' => 'Evacuations']);
        ServiceCategory::firstOrCreate(['name' => 'Medicines']);
        ServiceCategory::firstOrCreate(['name' => 'Medicines']);
        ServiceCategory::firstOrCreate(['name' => 'Medical Equipment’s']);
        ServiceCategory::firstOrCreate(['name' => 'Health Education']);
    }
}
