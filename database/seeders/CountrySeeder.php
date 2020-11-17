<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        foreach (json_decode(preg_replace('/\s+/', '',File::get(storage_path("app/public/data/countries.json")))) as $country) {
            Country::firstOrCreate([
                'name' => $country->name,
                'code' => $country->code
            ]);
        }
    }
}
