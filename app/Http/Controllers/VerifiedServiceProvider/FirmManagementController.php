<?php


namespace App\Http\Controllers\VerifiedServiceProvider;

use App\Models\ProviderFacility;
use App\Models\ProviderSubLevel;

class FirmManagementController
{
    public function company()
    {
        return inertia(
            'VerifiedServiceProviders/FirmManagement/Company',
            ['company' => auth()->user()->service_provider->provider_companies[0]]
        );
    }

    public function facilities()
    {
        return inertia(
            'VerifiedServiceProviders/FirmManagement/Facility',
            ['facilities' => ProviderFacility::where(
                'provider_company_id',
                auth()->user()->service_provider->provider_companies[0]->id
            )->get(),
            'provider_sub_levels' => ProviderSubLevel::where('is_active', true)->get()
            ]
        );
    }

    public function facilitiesServices()
    {
        return inertia(
            'VerifiedServiceProviders/FirmManagement/FacilityServices',
            ['facilities' => ProviderFacility::where(
                'provider_company_id',
                auth()->user()->service_provider->provider_companies[0]->id
            )->get(),
                'provider_sub_levels' => ProviderSubLevel::where('is_active', true)->get()
            ]
        );
    }
}
