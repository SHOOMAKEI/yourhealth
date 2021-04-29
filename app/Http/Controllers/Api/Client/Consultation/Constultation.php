<?php


namespace App\Http\Controllers\Api\Client\Consultation;

use App\Models\DaySession;
use App\Models\Service;

class Constultation
{
    public function getAvalilableServicesWithProviderCount($rootValue, array $args)
    {
        return Service::where(['is_active'=> true])->map(function ($query) {
            $data['id'] = $query->id;
            $data['name'] = $query->name;
            $data['provider_count'] = $query->individual_providers->count() + $query->facility_providers->count();

            return $data;
        });
    }

    public function getServiceProvidersAndFacilities($rootValue, array $args)
    {
        return Service::where('id', $args['service_id'])->get()->map(function ($query) {
            $data['id'] = $query->id;
            $data['name'] = $query->name;
            $data['doctors'] = $query->individual_providers->map(function ($query) {
                $data['id'] = $query->id;
                $data['username'] = $query->username;
                $data['first_name'] = $query->first_name;
                $data['middle_name'] = $query->middle_name;
                $data['last_name'] = $query->last_name;
                $data['ratings'] = 4;
                $data['title'] = $query->title;
                $data['location'] = $query->location;
                $data['profile_photo_path'] = $query->account->profile_photo_path;
                $data['service'] = $query->services->map(function ($query) {
                    $data['id'] = $query->id;
                    $data['name'] = $query->name;
                    $data['price'] = $query->pivot->price;
                    $data['compare_price'] = $query->pivot->compare_price;
                    $data['currency'] = $query->pivot->currency;

                    return $data;
                });

                return $data;
            });
            $data['facilities'] = $query->facility_providers->map(function ($query) {
                $data['id'] = $query->id;
                $data['name'] = $query->name;
                $data['trading_name'] = $query->trading_name;
                $data['ratings'] = 3.2;
                $data['profile_photo_path'] = $query->provider_profile->account->profile_photo_path;
                $data['location'] = $query->location;
                $data['service'] = $query->services->map(function ($query) {
                    $data['id'] = $query->id;
                    $data['name'] = $query->name;
                    $data['price'] = $query->pivot->price;
                    $data['compare_price'] = $query->pivot->compare_price;
                    $data['currency'] = $query->pivot->currency;

                    return $data;
                });

                return $data;
            });

            return $data;
        });
    }

    public function getProviderSchedule($rootValue, array $args)
    {
        return DaySession::all();
    }
}
