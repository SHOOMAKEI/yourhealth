<?php


namespace App\Http\Controllers\VerifiedServiceProvider;

use App\Models\FacilityMedicalRegistration;
use App\Models\ProviderFacility;
use App\Models\ProviderSubLevel;
use App\Models\Service;
use App\Models\ServiceCategory;

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
            'VerifiedServiceProviders/FirmManagement/Services',
            ['facilities' => ProviderFacility::where(
                'provider_company_id',
                auth()->user()->service_provider->provider_companies[0]->id
            )->get(),
                'provider_sub_levels' => ProviderSubLevel::where('is_active', true)->get(),
                'all_services' => Service::all()->toArray(),
                'registeredServices' =>  ProviderFacility::where(
                    'provider_company_id',
                    auth()->user()->service_provider->provider_companies[0]->id
                )
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
                    })->toArray()
            ]
        );
    }

    public function facilitiesRegistrations()
    {
        $medical_reg_data = collect();

        foreach (auth()->user()->service_provider->provider_companies[0]->facilities as $f) {
            $values =  FacilityMedicalRegistration::where(
                'provider_facility_id',
                $f->id
            )->get()->map(function ($query) {
                $data['id'] = $query->id;
                $data['certificate_name'] = $query->certificate_name;
                $data['certificate_number'] = $query->certificate_number;
                $data['registration_number'] = $query->registation_number;
                $data['provider_facility_id'] = $query->provider_facility_id;
                $data['authorized_service'] = $query->service_category->name;
                $data['expired_at'] = $query->expired_at;
                $data['attachment'] = $query->attachment;
                $data['year'] = $query->year;
                return $data;
            });
            if (!$values->isEmpty()) {
                $medical_reg_data =  $medical_reg_data->merge($values);

            }

        }

        $medical_reg = $medical_reg_data->toArray();

        return inertia(
            'VerifiedServiceProviders/FirmManagement/MedicalRegistrations',
            ['facilities' => ProviderFacility::where(
                'provider_company_id',
                auth()->user()->service_provider->provider_companies[0]->id
            )->get(),
                'services' => ServiceCategory::all()->toArray(),
                'medical_registrations' =>  $medical_reg
            ]
        );
    }

}
