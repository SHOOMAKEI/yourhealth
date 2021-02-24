<?php

namespace App\Http\Controllers\Api\Registration;

use App\Models\ClientProfile;
use App\Models\ClientTeam;

class ClientRegistrationController
{
    public function updateClientAccountCategoryType($rootValue, array $args)
    {
        $client =  ClientProfile::where('user_id', auth()->user()->id);

        $client->forceFill(
            [
        'account_category_type' => $args['input']['account_category_type']
      ]
        );

        return $client;
    }

    public function createClientFamily($rootValue, array $args)
    {
        $clientTeam = ClientTeam::create([
          'name' => $args['input']['name'],
          'team_type' => 'family',
          'mobile_number' => $args['input']['mobile_number'],
          'owner_id' => auth()->user()->id,
          'email' => $args['input']['email'],
          'mobile_number' => $args['input']['mobile_number'],
          'alternative_mobile_number' => $args['input']['alternative_mobile_number'],
          'email' => $args['input']['email'],
          'address' => $args['input']['address'],
          'physical_address' => $args['input']['physical_address'],
          'description' => $args['input']['description'],
      ]);
      
        return $clientTeam;
    }

    public function createClientCooperate($rootValue, array $args)
    {
        $clientTeam = ClientTeam::create([
            'name' => $args['input']['name'],
            'team_type' => 'family',
            'mobile_number' => $args['input']['mobile_number'],
            'owner_id' => auth()->user()->id,
            'email' => $args['input']['email'],
            'tin' => $args['input']['tin'],
            'vrn' => $args['input']['vrn'],
            'trading_name' => $args['input']['trading_name'],
            'mobile_number' => $args['input']['mobile_number'],
            'alternative_mobile_number' => $args['input']['alternative_mobile_number'],
            'address' => $args['input']['address'],
            'physical_address' => $args['input']['physical_address'],
            'website' => $args['input']['website'],
            'registration_number' => $args['input']['registration_number'],
            'description' => $args['input']['description'],
        ]);

        return $clientTeam;
    }

    public function subscribeToPackagePlan($rootValue, array $args)
    {
    }

    public function inviteTeamMembers($rootValue, array $args)
    {
        # code...
    }
}
