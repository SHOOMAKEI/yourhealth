<?php

namespace Database\Factories;

use App\Models\PackagePlan;
use App\Models\TeamPackageSubscription;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TeamPackageSubscriptionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = TeamPackageSubscription::class;

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
            'trial_ends_at' => $this->faker->dateTime,
            'ends_at' => $this->faker->dateTime,
            'cancels_at' => $this->faker->dateTime,
            'canceled_at' => $this->faker->dateTime,

        ];
    }
}
