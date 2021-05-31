<?php

namespace Database\Factories;

use App\Models\DaySession;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

class DaySessionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DaySession::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->randomElement(['morning', 'afternoon', 'evening']),
            'from' => $this->faker->time(),
            'to' => $this->faker->time(),
            'interval' => 15,
            'day_id' => (Day::inRandomOrder()
                        ->limit(1)->get())[0]->id
        ];
    }
}
