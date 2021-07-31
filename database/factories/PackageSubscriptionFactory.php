<?php

namespace Database\Factories;

use App\Models\PackagePlan;
use App\Models\PackageSubscription;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PackageSubscriptionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PackageSubscription::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'package_plan_id' => (PackagePlan::inRandomOrder()
                ->limit(1)->get())[0]->id,
            'user_id' => (User::inRandomOrder()
                ->limit(1)->get())[0]->id,
            'payer' => $this->faker->randomElement(['self', 'team']),
            'ends_at' => now()->addMonth(),
            'starts_at' => now(),
            'cancels_at' => null,
            'canceled_at' => null,
        ];
    }
}
