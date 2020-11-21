<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class CitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // dd(json_decode(preg_replace('/\s+/', '',File::get(storage_path("app/public/data/cities.json")))));
        foreach (json_decode(preg_replace('/\s+/', '',File::get(public_path("storage/data/cities.json")))) as $city) {
            City::firstOrCreate([
                'country' => $city->country,
                'name' => $city->name,
                'lat' => $city->lat,
                'lng' => $city->lng
            ]);
        }
    }
}
