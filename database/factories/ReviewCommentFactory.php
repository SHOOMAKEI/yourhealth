<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\ClientProfile;
use App\Models\ProviderProfile;
use App\Models\ReviewComment;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewCommentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ReviewComment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'body' => $this->faker->text(200),
            'article_id' => Article::factory(),
            'user_id' => (ProviderProfile::inRandomOrder()
                ->limit(1)->get())[0]->user->id,
        ];
    }
}
