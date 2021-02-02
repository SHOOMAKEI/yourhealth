<?php

namespace App\Http\Controllers\Api\Registration;

use App\Models\Service;
use Illuminate\Http\Request;
use App\Models\ProviderCompany;
use App\Models\ProviderProfile;
use App\Models\ProviderFacility;
use App\Models\EducationQualification;

class AccountRegistrationController 
{
    public function getProviderProfileInfo($rootValue, array $args)
    {
        return ProviderProfile::where('user_id', auth()->user()->id)->first();
    }

    public function getProviderCompanyInfo($rootValue, array $args)
    {
        if( auth()->user()->service_provider->account_category_type=='individual') {

            return null;
        }

        return ProviderCompany::where('id', auth()->user()->service_provider->provider_companies[0]->id)->first();
    }

    public function getProviderFacilityInfo($rootValue, array $args)
    {
        if( auth()->user()->service_provider->account_category_type=='individual') {

            return null;
        }

        return ProviderFacility::where('provider_company_id', auth()->user()->service_provider->provider_companies[0]->id)->get();
    }

    public function getEducationQualificationInfo($rootValue, array $args)
    {
        if( auth()->user()->service_provider->account_category_type=='facility'||auth()->user()->service_provider->account_category_type=='company' ) {

            return null;
        }

        return  auth()->user()->service_provider->provider_qualifications;
    }

    public function getMedicalRegistrationInfo($rootValue, array $args)
    {
        if( auth()->user()->service_provider->account_category_type=='facility'||auth()->user()->service_provider->account_category_type=='company' ) {

            return null;
        }

        return auth()->user()->service_provider->provider_medical_registrations;
    }

    public function getProviderProfileServicesInfo($rootValue, array $args)
    {
        if( auth()->user()->service_provider->account_category_type=='facility'||auth()->user()->service_provider->account_category_type=='company' ) {

            return null;
        }

        return auth()->user()->service_provider->services;
    }

    public function getProviderFacilityServicesInfo($rootValue, array $args)
    {
        if( auth()->user()->service_provider->account_category_type=='individual') {

            return null;
        }

        if( auth()->user()->service_provider->account_category_type=='facility') {

           $facility = ProviderFacility::where('provider_company_id', auth()->user()->service_provider->provider_company->id)
            ->first();

            return $facility->services;
        }

       $facility = ProviderFacility::where('id',$args['id'])->first();

         return $facility->services;
    }


    public function getUnselectedService($rootValue, array $args)
    {
        if( auth()->user()->service_provider->account_category_type=='individual') {

           $services = auth()->user()->service_provider->services;
           $available_service = Service::all();

           $available_service->each(function($service) use ($services, $available_service) {
            if(empty($services->where('id', $service->id))){
                return;
            }

           });
            return null;
        }
    }


}
