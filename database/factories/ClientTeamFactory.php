<?php

namespace Database\Factories;

use App\Models\ClientProfile;
use App\Models\ClientTeam;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ClientTeamFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ClientTeam::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'trading_name' => $this->faker->company,
            'website' => $this->faker->url,
            'registration_number' => $this->faker->bankAccountNumber,
            'registration_date' => $this->faker->dateTime,
            'mobile_number' => $this->faker->e164PhoneNumber,
            'alternative_mobile_number' => $this->faker->e164PhoneNumber,
            'email' => $this->faker->email,
            'address' => $this->faker->address,
            'physical_address' => $this->faker->address,
            'tin' => $this->faker->bankAccountNumber,
            'vrn' => $this->faker->bankAccountNumber,
            'description' => $this->faker->text(100),
            'team_type' => $this->faker->randomElement(['family', 'cooperate']),
            'owner_id' => ClientProfile::factory(),
        ];
    }
}
