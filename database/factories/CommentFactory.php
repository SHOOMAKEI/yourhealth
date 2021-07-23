<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\ClientProfile;
use App\Models\Comment;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Comment::class;

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
            'user_id' => (ClientProfile::inRandomOrder()
                            ->limit(1)->get())[0]->user->id,
        ];
    }
}
