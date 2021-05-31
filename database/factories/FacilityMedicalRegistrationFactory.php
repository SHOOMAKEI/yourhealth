<?php

namespace Database\Factories;

use App\Models\FacilityMedicalRegistration;
use App\Models\ProviderProfile;
use App\Models\ServiceCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class FacilityMedicalRegistrationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = FacilityMedicalRegistration::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'certificate_name' => $this->faker->text(30),
            'certificate_number' => $this->faker->text(10),
            'registration_number' => $this->faker->text(10),
            'provider_facility_id' => (ProviderProfile::inRandomOrder()
                ->limit(1)->get())[0]->id,
            'service_category_id' => (ServiceCategory::inRandomOrder()
                ->limit(1)->get())[0]->id,
            'year' => $this->faker->year,
            'expired_at' => $this->faker->date(),
            'verified_at' => $this->faker->date(),
            'rejected_at' => $this->faker->date(),
            'is_verified' => true

        ];
    }
}
