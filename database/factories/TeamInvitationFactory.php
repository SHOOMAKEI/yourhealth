<?php

namespace Database\Factories;

use App\Models\ClientTeam;
use App\Models\TeamInvitation;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TeamInvitationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = TeamInvitation::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'client_team_id' => ClientTeam::factory(),
            'user_id' => User::factory(),
            'role' => 'stuff',
            'has_account' => true
        ];
    }
}
