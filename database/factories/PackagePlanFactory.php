<?php

namespace Database\Factories;

use App\Models\MembershipCategory;
use App\Models\PackagePlan;
use Illuminate\Database\Eloquent\Factories\Factory;

class PackagePlanFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PackagePlan::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'membership_category_id' => (MembershipCategory::inRandomOrder()
                ->limit(1)->get())[0]->id,

        ];
    }
}
