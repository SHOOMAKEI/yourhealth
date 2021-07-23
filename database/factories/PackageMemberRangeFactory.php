<?php

namespace Database\Factories;

use App\Models\PackageMemberRange;
use Illuminate\Database\Eloquent\Factories\Factory;

class PackageMemberRangeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PackageMemberRange::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'min' => $this->faker->numberBetween(0, 50),
            'max' => $this->faker->numberBetween(50, 9999),
            'description' => $this->faker->text(50),
        ];
    }
}
