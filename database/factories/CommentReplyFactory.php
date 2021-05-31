<?php

namespace Database\Factories;

use App\Models\ClientProfile;
use App\Models\Comment;
use App\Models\CommentReply;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommentReplyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CommentReply::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'body' => $this->faker->text(200),
            'comment_id' => Comment::factory(),
            'user_id' => (ClientProfile::inRandomOrder()
                ->limit(1)->get())[0]->user->id,
        ];
    }
}
