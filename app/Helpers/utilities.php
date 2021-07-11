<?php

use App\Models\ClientProfile;
use App\Models\ClientTeam;
use App\Models\ProviderFacility;
use App\Models\ProviderProfile;
use App\Models\User;

if (!function_exists('joinProviderProfileToFacilityViaInvitation')) {
    function joinProviderProfileToFacilityViaInvitation(User $user, ProviderProfile $profile)
    {
        if (!is_null(session()->get('email'))
            && ($user->email == session()->get('email'))
            && !is_null(session()->get('provider_facility_id'))
        ) {
            $facility = ProviderFacility::find(session()->get('provider_facility_id'));

            $facility->provider_profile()->dettach($profile->id);
            $facility->provider_profile()->attach($profile->id);
        }
    }
}


if (!function_exists('joinClientProfileToTeamViaInvitation')) {
    function joinClientProfileToTeamViaInvitation(User $user, ClientProfile $profile)
    {
        if (!is_null(session()->get('email'))
            && ($user->email == session()->get('email'))
            && !is_null(session()->get('client_team_id'))
        ) {
            $team = ClientTeam::find(session()->get('client_team_id'));

            $team->client_profile()->dettach($profile->id);
            $team->client_profile()->attach($profile->id);
        }
    }
}
