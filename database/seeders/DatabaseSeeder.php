<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(RolesAndPermissionsSeeder::class);
        $this->call(CountrySeeder::class);
        $this->call(CitiesSeeder::class);
        $this->call(ProviderLevelSeeder::class);
        $this->call(ServiceSeeder::class);
        $this->call(MedicalCoursesSeeder::class);
        $this->call(MedicalInstitutesSeeder::class);
        $this->call(MedicalCouncilsSeeder::class);
    }
}
