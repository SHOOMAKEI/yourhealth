<?php

namespace App\Http\Controllers\Api\Registration;

use App\Models\User;
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
            // dd(auth()->user()->service_provider->services);
            return null;
        }

        
        return isset(auth()->user()->service_provider->services)?auth()->user()->service_provider->services->toArray():null;
    }

    public function getProviderFacilityServicesInfo($rootValue, array $args)
    {
        if( auth()->user()->service_provider->account_category_type=='individual') {

            return null;
        }

        if( auth()->user()->service_provider->account_category_type=='facility') {

           $facility = ProviderFacility::where('provider_company_id', auth()->user()->service_provider->provider_companies[0]->id)
            ->first();

            return $facility->services;
        }

       $facility = ProviderFacility::where('id',$args['facility_id'])->first();

         return $facility->services;
    }

    public function getProviderProfileInfoWithId($rootValue, array $args)
    {
        return ProviderProfile::where('id', auth()->user()->id)->first();
    }

    public function getProviderCompanyInfoWithId($rootValue, array $args)
    {
        $provider_profile = ProviderProfile::where('id', $args['id'])->first();

        if( $provider_profile->account_category_type=='individual') {

            return null;
        }

        return ProviderCompany::where('id', $provider_profile->provider_companies[0]->id)->first();
    }

    public function getProviderFacilityInfoWithId($rootValue, array $args)
    {
        $provider_profile = ProviderProfile::where('id', $args['id'])->first();

        if( $provider_profile->account_category_type=='individual') {

            return null;
        }

        return ProviderFacility::where('provider_company_id', $provider_profile->provider_companies[0]->id)->get();
    }

    public function getEducationQualificationInfoWithId($rootValue, array $args)
    {
        $provider_profile = ProviderProfile::where('id', $args['id'])->first();

        if( $provider_profile->account_category_type=='facility'||$provider_profile->account_category_type=='company' ) {

            return null;
        }

        return  $provider_profile->provider_qualifications;
    }

    public function getMedicalRegistrationInfoWithId($rootValue, array $args)
    {
        $provider_profile = ProviderProfile::where('id', $args['id'])->first();

        if( $provider_profile->account_category_type=='facility'||$provider_profile->account_category_type=='company' ) {

            return null;
        }

        return $provider_profile->provider_medical_registrations;
    }

    public function getProviderProfileServicesInfoWithId($rootValue, array $args)
    {
        $provider_profile = ProviderProfile::where('id', $args['id'])->first();

        if( $provider_profile->account_category_type=='facility'||$provider_profile->account_category_type=='company' ) {
            // dd(auth()->user()->service_provider->services);
            return null;
        }

        
        return isset($provider_profile->services)?$provider_profile->services->toArray():null;
    }

    public function getProviderFacilityServicesInfoWithId($rootValue, array $args)
    {
        $provider_profile = ProviderProfile::where('id', $args['id'])->first();

        if( $provider_profile->account_category_type=='individual') {

            return null;
        }

        if( $provider_profile->account_category_type=='facility') {

           $facility = ProviderFacility::where('provider_company_id', $provider_profile->provider_companies[0]->id)
            ->first();

            return $facility->services;
        }

       $facility = ProviderFacility::where('id',$args['facility_id'])->first();

         return $facility->services;
    }


    public function getProviderProfileUnselectedService($rootValue, array $args)
    {
        
        $services = auth()->user()->service_provider->services;
        $available_service = Service::all();

        $difference = $available_service->diffAssoc($services);
        return $difference;
        

        if( auth()->user()->service_provider->account_category_type=='facility') {

            $services = auth()->user()->service_provider->services;
            $available_service = Service::all();
 
           $difference = $available_service->diffAssoc($services);
             return $difference;
         }


    }

    public function getProviderFacilityUnselectedService($rootValue, array $args)
    {
        
        $facility = ProviderFacility::find($args['id']);
        

        $services = $facility->services;
        $available_service = Service::all();

        $difference = $available_service->diffAssoc($services);
        // dd($difference);
            return $difference;

    }

    public function createProviderProfileDailySchedule($rootValue, array $args)
    {
        dd($args);
    }

    public function createProviderFacilityDailySchedule($rootValue, array $args)
    {
        # code...
    }


}
