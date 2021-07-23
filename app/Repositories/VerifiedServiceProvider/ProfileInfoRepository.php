<?php


namespace App\Repositories\VerifiedServiceProvider;

use App\Models\ProviderFacility;
use App\Models\ProviderProfile;

class ProfileInfoRepository
{
    public function getProviderProfile()
    {
        return ProviderProfile::find(auth()->user()->service_provider->id);
    }

    public function getProviderFacilities()
    {
        if (empty($this->getProviderProfile()->provider_companies[0]->id)) {
            return null;
        }

        return ProviderFacility::where(
            'provider_company_id',
            $this->getProviderProfile()->provider_companies[0]->id
        )->get();
    }

    public function getProviderCompany()
    {
        if (empty($this->getProviderProfile()->provider_companies[0]->id)) {
            return null;
        }

        return $this->getProviderProfile()->provider_companies[0];
    }

    public function getProviderFacilitiesRegistrations()
    {
        if ($this->checkIfProviderProfileCategoryIsCompanyOrFacility()) {
            return ProviderFacility::where('provider_company_id', $provider_profile->provider_companies[0]->id)
                ->get()->map(function ($query) {
                    $data['id'] = $query->id;
                    $data['data'] = $query->services->map(function ($service) {
                        $pivot['id'] = $service->id;
                        $pivot['name'] = $service->name;
                        $pivot['pivot']['price'] = $service->pivot->price;
                        $pivot['pivot']['compare_price'] = $service->pivot->compare_price;
                        $pivot['pivot']['currency'] = $service->pivot->currency;
                        return $pivot;
                    })->toArray();

                    return $data;
                })->toArray();
        }

        return null;
    }

    public function checkIfProviderProfileCategoryIsCompanyOrFacility(): bool
    {
        if ($this->getProviderProfile()->account_category_type == SERVICE_PROVIDER_FACILITY_ACCOUNT ||
            $this->getProviderProfile()->account_category_type == SERVICE_PROVIDER_COMPANY_ACCOUNT) {
            return true;
        }

        return false;
    }
}
