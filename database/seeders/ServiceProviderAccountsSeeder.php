<?php

namespace Database\Seeders;

use App\Models\DaySession;
use App\Models\EducationQualification;
use App\Models\FacilityMedicalRegistration;
use App\Models\ProviderCompany;
use App\Models\ProviderFacility;
use App\Models\ProviderMedicalRegistration;
use App\Models\ProviderProfile;
use App\Models\ProviderQualification;
use App\Models\Service;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class ServiceProviderAccountsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $providers = ProviderProfile::factory(50)
                ->state(new Sequence(
                    ['account_category_type' => 'individual'],
                    ['account_category_type' => 'facility'],
                    ['account_category_type' => 'company'],
                ))->for(User::factory()->create(), 'account')
            ->create();

        $providers->each(function ($provider){
            $user = User::find($provider->user_id);
            $user->assignRole('service-provider');

            if($provider->is_verified) {
                $user->assignRole('verified-service-provider');
            }else{
                $user->assignRole('unverified-service-provider');
            }

            if($provider->accout_category_type == 'company'|| $provider->accout_category_type == 'facility') {
                ProviderCompany::factory()
                ->hasAttached($provider->id,['role' => 'owner'], 'provider_profile')
                    ->hasAttached(ProviderFacility::factory()->count(5)
                        ->state(function (array $attributes, ProviderCompany $facility) {
                        return ['provider_company_id' => $facility->id];
                    })->has(FacilityMedicalRegistration::factory()->count(5)
                            ->state(function (array $attributes, ProviderFacility $facility) {
                            return ['provider_facility_id' => $facility->id];
                        }))
                    ->hasAttached(Service::factory()->count(10)
                        ->state(function (array $attributes, ProviderFacility $facility) {
                            return ['provider_facility_id' => $facility->id];
                        }), ['price' => 150000,'currency' => 'TZS', 'compare_price' => 0.00],'services')
                        ,null,'facilities')
                    ->create();
            }

            if($provider->account_category_type == 'individual'){
                ProviderQualification::factory(6)->create([
                    'provider_profile_id' => $provider->id
                ]);

                ProviderMedicalRegistration::factory(6)->create([
                    'provider_profile_id' => $provider->id
                ]);

                $profile = ProviderProfile::find($provider->id);

                $profile->services()->attach(Service::inRandomOrder()->limit(5)->get(),
                    ['price' => 150000,'currency' => 'TZS', 'compare_price' => 0.00]);

                $profile->day_sessions()->attach(DaySession::inRandomOrder()->limit(1)->first());
            }

        });
    }
}
