<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\ProviderProfile;
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
    title */
    protected $model = Article::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {

        return [
            'title' => $this->faker->title,
            'body' => $this->faker->text(5000),
            'is_active' => $this->faker->randomElement([true, false]),
            'is_published' => $this->faker->randomElement([true, false]),
            'request_publication' => $this->faker->randomElement([true, false]),
            'is_draft' => $this->faker->randomElement([true, false]),
            'approve_one' => $this->faker->randomElement([true,false]),
            'approve_two' => $this->faker->randomElement([true, false]),
            'approved_at' => $this->faker->dateTime,
            'published_at' => $this->faker->dateTime,
            'author' => (ProviderProfile::inRandomOrder()
                            ->limit(1)
                            ->get())[0]->user->id,
        ];
    }
}
