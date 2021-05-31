<?php

namespace Database\Factories;

use App\Models\ProviderProfile;
use App\Models\ProviderSubLevel;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ServiceProviderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProviderProfile::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->randomElement(['Mr.','Ms.','Prof.', 'Dr.']),
            'first_name' => $this->faker->firstName,
            'middle_name' => $this->faker->lastName,
            'last_name' => $this->faker->lastName,
            'username' => $this->faker->userName,
            'mobile_number' => $this->faker->e164PhoneNumber,
            'alternative_mobile_number' => $this->faker->e164PhoneNumber,
            'email' => $this->faker->email,
            'address' => $this->faker->address,
            'physical_address' => $this->faker->address,
            'dob' => $this->faker->dateTime,
            'gender' => $this->faker->randomElement(['male', 'female']),
            'bio' => $this->faker->text(100),
            'user_id' => User::factory(),
            'provider_sub_level_id' => ProviderSubLevel::factory(),
        ];
    }
}
