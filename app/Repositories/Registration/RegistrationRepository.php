<?php

namespace App\Repositories\Registration;

use App\Contracts\Repositories\Registration\RegistrationRepositoryInterface;
use App\Contracts\Repositories\Registration\ServiceProviderRegistrationRepositoryInterface;
use App\Models\ClientTeam;
use App\Models\ProviderFacility;
use App\Models\User;

class RegistrationRepository implements RegistrationRepositoryInterface
{
    public function createUserAccount(
        ServiceProviderRegistrationRepositoryInterface $repository,
        array $request
    ): User {
        $user = $repository->createAccount($request);
        if ($request['account_category'] == 'service-provider') {
            $user->assignRole('service-provider');
            $user->assignRole('unverified-service-provider');
            $request += ['user_id' => $user->id];
            $request+= ['mobile_number' => $user->mobile_number];
            $request+= ['email' => $user->email];

            $profile = $repository->createProviderProfile($request);

            joinProviderProfileToFacilityViaInvitation($user, $profile);

            if ($request['account_category_type'] == 'company') {
                $user->assignRole('owner');
                $provider_company = $repository->createOrUpdateProviderCompany($request);
                $request+= ['provider_company_id' =>  $provider_company->id];
            }

            if ($request['account_category_type'] == 'facility') {
                $user->assignRole('owner');
                $provider_company = $repository->createOrUpdateProviderCompany($request);
                $provider_company->provider_profile()->detach($user->service_provider->id);
                $provider_company->provider_profile()->attach($user->service_provider->id, ['role' => 'owner']);
                $request+= ['provider_company_id' =>  $provider_company->id];
                $provider_facility =$repository->createProviderFacility($request);
                $request+= ['provider_facility_id' =>  $provider_facility->id];
                if ($request['ownership_type'] == 'other') {
                    $repository->createFacilityOwner($request);
                }
            }
        } else {
            $user->assignRole('patient');
            $profile = $repository->createClientProfile($request);

            joinClientProfileToTeamViaInvitation($user, $profile);
        }

        return $user;
    }
}
