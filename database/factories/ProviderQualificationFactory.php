<?php

namespace Database\Factories;

use App\Models\ProviderProfile;
use App\Models\ProviderQualification;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProviderQualificationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProviderQualification::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'award_title' => $this->faker->text(30),
            'institution_name' => $this->faker->text(40),
            'description' => $this->faker->text(100),
            'provider_profile_id' => (ProviderProfile::inRandomOrder()
                ->limit(1)->get())[0]->id,
            'year' => $this->faker->year
        ];
    }
}
