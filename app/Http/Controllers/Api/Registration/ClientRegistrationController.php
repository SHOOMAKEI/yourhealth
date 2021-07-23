<?php

namespace App\Http\Controllers\Api\Registration;

use App\Models\ClientProfile;
use App\Models\ClientTeam;
use App\Models\MembershipCategory;
use App\Models\PackagePlan;

class ClientRegistrationController
{
    public function updateClientAccountCategoryType(array $args)
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
            'alternative_mobile_number' => $args['input']['alternative_mobile_number'],
            'address' => $args['input']['address'],
            'physical_address' => $args['input']['physical_address'],
            'website' => $args['input']['website'],
            'registration_number' => $args['input']['registration_number'],
            'description' => $args['input']['description'],
        ]);

        return $clientTeam;
    }

    public function membershipsCategories($rootValue, array $args)
    {
        return MembershipCategory::where('is_active', true)->get();
    }

    public function packages($rootValue, array $args)
    {
        $package =  PackagePlan::where(['membership_category_id'=> $args['membership_category_id'], 'is_active'=> true])->get()->map(function ($query) {
            $data['id'] = $query->id;
            $data['name'] = $query->name;
            $data['price'] = $query->price;
            $data['currency'] = $query->currency;
            $data['has_price'] = $query->has_price;
            $data['has_member_range'] = $query->has_member_range;
            $data['membership_category']['id'] = $query->membership_category->id;
            $data['membership_category']['name'] = $query->membership_category->name;
            $data['membership_category']['description'] = $query->membership_category->description;
            $data['membership_category']['created_at'] = $query->membership_category->created_at;
            $data['membership_category']['updated_at'] = $query->membership_category->updated_at;


            $data['features'] = $query->package_features->map(function ($q) {
                $data['id'] = $q->id;
                $data['name'] = $q->name;
                $data['services'] = $q->services->map(function ($query) {
                    $data['id'] = $query->id;
                    $data['name'] = $query->name;
                    $data['created_ta'] = $query->created_at;

                    return $data;
                })->toArray();

                return $data;
            })->toArray();
            $data['ranges'] = $query->package_member_ranges->map(function ($d) {
                $data['id'] = $d->id;
                $data['min'] = $d->min;
                $data['max'] = $d->max;
                $data['price'] = $d->pivot->price;
                $data['currency'] = $d->pivot->currency;

                return $data;
            })->toArray();
            $data['created_at'] = $query->created_at;
            $data['updated_at'] = $query->updated_at;
            $data['is_active'] = $query->is_active;

            return $data;
        });

        return respondWithSuccess('PackagePlan', $package);
    }

    public function createSubscriptionInvoice($_, array $args)
    {
    }


    public function subscribeToPackagePlan($rootValue, array $args)
    {

    }

    public function inviteTeamMembers($rootValue, array $args)
    {
        # code...
    }
}
