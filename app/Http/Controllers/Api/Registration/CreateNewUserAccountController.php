<?php

namespace App\Http\Controllers\Api\Registration;

use App\Models\User;
use App\Services\SMSService;
use App\Models\ProviderProfile;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use App\Actions\Fortify\PasswordValidationRules;
use App\Models\ProviderCompany;
use App\Models\ProviderFacility;
use App\Models\ProviderQualification;

class CreateNewUserAccountController
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create($rootVaule, array $args)
    {
        
       

        dd($args);
        $user =  User::create([
            'name' => $args['input']['first_name']." ".$args['input']['middle_name']." ".$args['input']['last_name'],
            'email' => $args['input']['email'],
            'mobile_number' => $args['input']['mobile_number'],
            'verification_code' => $this->getVerificationCode(),
            'password' => Hash::make($args['input']['password']),
        ]);

        
        if($args['input']['account_category'] == 'service-provider') {
            $user->assignRole('service-provider');
            $user->assignRole('unverified-service-provider');

            ProviderProfile::create([
                'first_name' => $args['input']['first_name'],
                'middle_name' => $args['input']['middle_name'],
                'last_name' => $args['input']['last_name'],
                'mobile_number' => $args['input']['mobile_number'],
                'user_id' => $user->id,
                'email' => $args['input']['email'],
            ]);
        } else {
            $user->assignRole('patient');
            // ClientProfile::create([
            //     'first_name' => $args['input']['first_name'],
            //     'middle_name' => $args['input']['middle_name'],
            //     'last_name' => $args['input']['last_name'],
            //     'mobile' => $args['input']['mobile'],
            //     'user_id' => $user->id,
            //     'first_name' => $args['input']['first_name'],
            // ]);
        }

        $this->sendVerificationCode($user->mobile_number, $user->verification_code);
        return new UserResource($user);
    }

    public function getVerificationCode() {
        $verification_code = '';
          
        for ($i=0; $i < 6 ; $i++) { 
            $number = rand(0, 9);
            $verification_code = $verification_code.$number;
        }
        
        return $verification_code;
    }

    public function sendVerificationCode(string $number, string $verification_code) 
    {
        $sms = 'Your Verification Code is '. $verification_code;

        SMSService::sendSMSToSingeUser($number, $sms);
    }

    public function updateProviderProfile($rootVaule, array $args)
    {
        $provider_profile = ProviderProfile::where('user_id', auth()->user()->id)->first();

        $provider_profile->update([
            'title' => $args['input']['title'],
            'first_name' => $args['input']['first_name'],
            'middle_name' => $args['input']['middle_name'],
            'last_name' => $args['input']['last_name'],
            'username' => $args['input']['username'],
            'mobile_number' => $args['input']['mobile_number'],
            'alternative_mobile_number' => $args['input']['amobile_number'],
            'email' => $args['input']['email'],
            'address' => $args['input']['address'],
            'physical_address' => $args['input']['physical_address'],
            'dob' => $args['input']['dob'],
            'gender' => $args['input']['gender'],
            'bio' => $args['input']['bio'],
            'provider_sub_level_id' => $args['input']['provider_sub_level_id']
        ]);
    }

    public function createProviderCompany($rootVaule, array $args)
    {
        $provider_company = ProviderCompany::create([
            'name' => $args['input']['name'],  
            'trading_name' => $args['input']['trading_name'],
            'tin' => $args['input']['tin'],  
            'vrn' => $args['input']['vrn'],  
            'mobile_number' => $args['input']['mobile_number'],  
            'alternative_mobile_number' => $args['input']['alternative_mobile_number'],
            'email' => $args['input']['email'],
            'address' => $args['input']['address'],  
            'physical_address' => $args['input']['physical_address'],  
            'website' => $args['input']['website'],  
            'registration_number' => $args['input']['registration_number'],
            'registration_date' => $args['input']['registration_date'],  
            'description' => $args['input']['description'],  
            'provider_profile_id' => auth()->user()->profile->id,

        ]);

        return (object) [
            'erros' => null,
            'success' => true,
            'provider_facility' => $provider_company
        ];
    }

    public function createProviderFacility($rootVaule, array $args)
    {
       $provider_facility = ProviderFacility::create([
            'name' => $args['input']['name'],  
            'trading_name' => $args['input']['trading_name'],
            'tin' => $args['input']['tin'],  
            'vrn' => $args['input']['vrn'],  
            'mobile_number' => $args['input']['mobile_number'],  
            'alternative_mobile_number' => $args['input']['alternative_mobile_number'],
            'email' => $args['input']['email'],
            'address' => $args['input']['address'],  
            'physical_address' => $args['input']['physical_address'],  
            'website' => $args['input']['website'],  
            'registration_number' => $args['input']['registration_number'],
            'registration_date' => $args['input']['registration_date'],  
            'description' => $args['input']['description'],  
            'provider_sub_level_id' => $args['input']['provider_sub_level_id'],
            'provider_company_id' => $args['input']['provider_company_id'],
        ]);

        return (object) [
            'erros' => null,
            'success' => true,
            'provider_facility' => $provider_facility
        ];
    }

    public function createProviderQualification($rootVaule, array $args)
    {
        $provider_qualification = ProviderQualification::create([
            'award_title' => $args['input']['award_title'],
            'institution_name' => $args['input']['institution_name'],
            'provider_profile_id' => auth()->user->profile->id,
            'year' => $args['input']['year'],
        ]);

        return (object) [
            'erros' => null,
            'success' => true,
            'provider_facility' => $provider_qualification
        ];
    }

    public function createProviderMedicalRegistration($rootVaule, array $args)
    {
        $provider_medical_registration = ProviderQualification::create([
            'certificate_name' => $args['input']['certificate_name'],
            'certificate_number' => $args['input']['certificate_number'],
            'registration_number' => $args['input']['registration_number'],
            'provider_profile_id' => auth()->user->profile->id,
            'year' => $args['input']['year'],
        ]);

        return (object) [
            'erros' => null,
            'success' => true,
            'provider_facility' => $provider_medical_registration
        ];
    }

    public function createProviderFacilityService($rootVaule, array $args)
    {
        $provider_facility_services = ProviderQualification::create([
            'certificate_name' => $args['input']['certificate_name'],
            'certificate_number' => $args['input']['certificate_number'],
            'registration_number' => $args['input']['registration_number'],
            'provider_profile_id' => auth()->user->profile->id,
            'year' => $args['input']['year'],
        ]);

        return (object) [
            'erros' => null,
            'success' => true,
            'provider_facility' => $provider_facility_services
        ];
    }

    public function createProviderProfileService($rootVaule, array $args)
    {
        $provider_profile_services = ProviderQualification::create([
            'certificate_name' => $args['input']['certificate_name'],
            'certificate_number' => $args['input']['certificate_number'],
            'registration_number' => $args['input']['registration_number'],
            'provider_profile_id' => auth()->user->profile->id,
            'year' => $args['input']['year'],
        ]);

        return (object) [
            'erros' => null,
            'success' => true,
            'provider_facility' => $provider_profile_services
        ];
    }
}
