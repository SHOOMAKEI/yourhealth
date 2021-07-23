<?php

namespace Database\Factories;

use App\Models\ProviderLevel;
use App\Models\RequestedService;
use Illuminate\Database\Eloquent\Factories\Factory;

class RequestedServiceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = RequestedService::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'description' => $this->faker->text(100),
            'provider_level_id' => (ProviderLevel::inRandomOrder()
                ->limit(1)->get())[0]->id,
        ];
    }
}
