<?php

namespace Database\Factories;

use App\Models\ClientProfile;
use App\Models\ConsultationBookings;
use App\Models\ConsultationFeedback;
use App\Models\ProviderProfile;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

class ConsultationFeedbackFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ConsultationFeedback::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'comment' => $this->faker->text(10),
            'ratings' => $this->faker->numberBetween(1, 5),
            'provider_profile_id' => (ProviderProfile::inRandomOrder()
                ->limit(1)->get())[0]->id,
            'client_profile_id' => (ClientProfile::inRandomOrder()
                ->limit(1)->get())[0]->id,
            'service_id' => (Service::inRandomOrder()
                ->limit(1)->get())[0]->id,
            'consultation_booking_id' => (ConsultationBookings::inRandomOrder()
                ->limit(1)->get())[0]->id,
        ];
    }
}
