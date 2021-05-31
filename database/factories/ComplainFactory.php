<?php

namespace Database\Factories;

use App\Models\ClientProfile;
use App\Models\Comment;
use App\Models\Complain;
use Illuminate\Database\Eloquent\Factories\Factory;

class ComplainFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Complain::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'body' => $this->faker->text(200),
            'user_id' => (ClientProfile::inRandomOrder()
                ->limit(1)->get())[0]->user->id,
        ];
    }
}
