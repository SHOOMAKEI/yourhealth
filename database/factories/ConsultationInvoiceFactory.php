<?php

namespace Database\Factories;

use App\Models\ClientProfile;
use App\Models\ConsultationBookings;
use App\Models\ConsultationInvoice;
use App\Models\ProviderProfile;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

class ConsultationInvoiceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ConsultationInvoice::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'invoice_number' => $this->faker->numberBetween(111111, 9999999),
            'paid_at' => $this->faker->dateTime,
            'payment_channel' => $this->faker->randomElement(['mobile', 'card']),
            'payment_receipt' => $this->faker->numberBetween(2222222, 99999999),
            'payment_reference_no' => $this->faker->numberBetween(2222222, 99999999),
            'provider_profile_id' => (ProviderProfile::inRandomOrder()
                ->limit(1)->get())[0]->id,
            'client_profile_id' => (ClientProfile::inRandomOrder()
                ->limit(1)->get())[0]->id,
            'service_id' => (Service::inRandomOrder()
                ->limit(1)->get())[0]->id,
            'price' => $this->faker->numberBetween(1000, 9999999),
            'consultation_booking_id' => (ConsultationBookings::inRandomOrder()
                ->limit(1)->get())[0]->id,
            'currency' => 'TZS'
        ];
    }
}
