<?php

namespace Database\Factories;

use App\Models\ProviderFacilityOwner;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProviderFacilityOwnerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProviderFacilityOwner::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'first_name' => $this->faker->firstName,
            'middle_name' => $this->faker->lastName,
            'last_name' => $this->faker->lastName,
            'mobile_number' => $this->faker->e164PhoneNumber,
            'email' => $this->faker->email,
            'provider_facility_id' => ProviderCompany::factory(),
        ];
    }
}
