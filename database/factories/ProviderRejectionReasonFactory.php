<?php

namespace Database\Factories;

use App\Models\ProviderProfile;
use App\Models\ProviderRejectionReason;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProviderRejectionReasonFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProviderRejectionReason::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'reasons' => $this->faker->text(30),
            'rejection_round' => $this->faker->randomNumber(10),
            'provider_facility_id' => (ProviderProfile::inRandomOrder()
                ->limit(1)->get())[0]->id,

        ];
    }
}
