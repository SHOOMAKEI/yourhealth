<?php

namespace Database\Factories;

use App\Models\ClientProfile;
use App\Models\ConsultationBookings;
use App\Models\ConsultationReschedule;
use App\Models\ProviderProfile;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

class ConsultationRescheduleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ConsultationReschedule::class;

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
            'consultation_booking_id' => (ConsultationBookings::inRandomOrder()
                ->limit(1)->get())[0]->id,
        ];
    }
}
