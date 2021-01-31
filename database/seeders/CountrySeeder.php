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
        // dd(json_decode(File::get(public_path("storage/data/countries.json"))));
        foreach (json_decode(File::get(public_path("data/countries.json"))) as $country) {
            Country::firstOrCreate([
                'name' => $country->name,
                'code' => $country->code
            ]);
        }
    }
}
