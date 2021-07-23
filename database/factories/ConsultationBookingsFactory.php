<?php

namespace Database\Factories;

use App\Models\ClientProfile;
use App\Models\ConsultationBookings;
use App\Models\ProviderProfile;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

class ConsultationBookingsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ConsultationBookings::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'start' => $this->faker->dateTime,
            'end' => $this->faker->dateTime,
            'status' => $this->faker->randomElement(['completed', 'ongoing', 'canceled', 'day_off', 'rescheduled']),
            'appointment_mode' => $this->faker->randomElement(['online', 'physical']),
            'provider_profile_id' => (ProviderProfile::inRandomOrder()
                                        ->limit(1)->get())[0]->id,
            'client_profile_id' => (ClientProfile::inRandomOrder()
                ->limit(1)->get())[0]->id,
            'service_id' => (Service::inRandomOrder()
                ->limit(1)->get())[0]->id,
            'price' => $this->faker->numberBetween(1000, 9999999),
            'currency' => 'TZS'
        ];
    }
}
