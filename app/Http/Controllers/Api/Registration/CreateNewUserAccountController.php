<?php

namespace App\Http\Controllers\Api\Registration;

use App\Models\User;
use App\Services\SMSService;
use App\Models\ProviderCompany;
use App\Models\ProviderProfile;
use App\Models\ProviderFacility;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use App\Models\ProviderQualification;
use App\Actions\Fortify\PasswordValidationRules;
use App\Models\DaySession;
use App\Models\ProviderMedicalRegistration;

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
        
       

        // dd($args);
        // DB::transaction(function($args){
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
            
            return new UserResource($user);
        // });
        

        // $this->sendVerificationCode($user->mobile_number, $user->verification_code);
        
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
        
        $provider_profile = ProviderProfile::updateOrCreate([
            'user_id' => auth()->user()->id],
            ['title' => $args['input']['title'],
            'first_name' => $args['input']['first_name'],
            'middle_name' => $args['input']['middle_name'],
            'last_name' => $args['input']['last_name'],
            'username' => $args['input']['username'],
            'mobile_number' => $args['input']['mobile_number'],
            'alternative_mobile_number' => $args['input']['alternative_mobile_number'],
            'email' => $args['input']['email'],
            'address' => $args['input']['address'],
            'physical_address' => $args['input']['physical_address'],
            'dob' => $args['input']['dob'],
            'gender' => $args['input']['gender'],
            'bio' => $args['input']['bio'],
            'provider_sub_level_id' => $args['input']['provider_sub_level_id']
        ]);

        return $provider_profile;
    }

    public function createProviderCompany($rootVaule, array $args)
    {
        // dd(auth()->user()->provider_profile->id);
        $provider_company = ProviderCompany::updateOrCreate(
            ['tin' => $args['input']['tin'], 'name' => $args['input']['name']],
            [ 
            'trading_name' => $args['input']['trading_name'], 
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
            ]

        );

        $provider_company->provider_profile()->detach(auth()->user()->service_provider->id);
        $provider_company->provider_profile()->attach(auth()->user()->service_provider->id, ['role'=> 'Owner']);

        return $provider_company;
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
            'description' => $args['input']['description'],  
            'provider_sub_level_id' => $args['input']['provider_sub_level_id'],
            'provider_company_id' => $args['input']['provider_company_id'],
        ]);

        return $provider_facility;
    }

    public function createProviderQualification($rootVaule, array $args)
    {
        
        $index = 0;
        $data = [];
        foreach($args['input'] as $qualification){

            $provider_qualification = ProviderQualification::create([
                'award_title' => $qualification['award_title'],
                'institution_name' => $qualification['institution_name'],
                'description' => $qualification['description'],
                'provider_profile_id' => auth()->user()->service_provider->id,
                'year' => $qualification['year'],
            ]);

            $provider_qualification->addMediaFromBase64($qualification['attachment'], 'application/pdf')
            ->usingFileName(str_replace(' ','-',rand(1111,9999).'-'.rand(1111,9999).'-'.auth()->user()->name.'-'.$qualification['award_title'].'.pdf'))
            ->toMediaCollection('provider-qualification-files');
            $data[$index] = $provider_qualification;

            $index++;
        }

        return  $data;
    }

    public function createProviderMedicalRegistration($rootVaule, array $args)
    {

        $index = 0;
        $data = [];
        foreach($args['input'] as $medical_registration){

            $provider_medical_registration = ProviderMedicalRegistration::create([
                'certificate_name' => $medical_registration['certificate_name'],
                'certificate_number' => $medical_registration['certificate_number'],
                'registration_number' => $medical_registration['registration_number'],
                'provider_profile_id' => auth()->user()->service_provider->id,
                'year' => $medical_registration['year'],
            ]);

            $provider_medical_registration->addMediaFromBase64($medical_registration['attachment'], 'application/pdf')
            ->usingFileName(str_replace(' ','-',rand(1111,9999).'-'.rand(1111,9999).'-'.auth()->user()->name.'-'.$medical_registration['certificate_name'].'.pdf'))
            ->toMediaCollection('provider-medical-registration-files');
            $data[$index] = $provider_medical_registration;

            $index++;
        }

        return  $data;

    }

    public function createProviderFacilityServices($rootVaule, array $args)
    { 
        
        $provider_facility = ProviderFacility::find( $args['input']['provider_facility_id']);

        foreach($args['input']['service'] as $service)
        {
            $data[$service['service_id']]['price'] = $service['price'];
            $data[$service['service_id']]['compare_price'] = $service['compare_price'];
            $data[$service['service_id']]['currency'] = $service['currency'];
        }
        
        $provider_facility->services()->sync($data);

        return $provider_facility->services->map(function($query){
            $services['service']['id'] = $query->id;
            $services['service']['name'] = $query->name;
            $services['service']['description'] = $query->description;
            $services['service']['is_active'] = $query->is_active;
            $services['service']['created_at'] = $query->created_at;
            $services['service']['updated_at'] = $query->updated_at;
            $services['price'] = $query->pivot->price;
            $services['compare_price'] = $query->pivot->compare_price;
            $services['currency'] = $query->pivot->currency;

            return $services;

        })->all();
    }

    public function createProviderProfileServices($rootVaule, array $args)
    {
        $provider_profile = ProviderProfile::find(auth()->user()->service_provider->id);

        foreach($args['input'] as $service)
        {
            $data[$service['service_id']]['price'] = $service['price'];
            $data[$service['service_id']]['compare_price'] = $service['compare_price'];
            $data[$service['service_id']]['currency'] = $service['currency'];

        }
        
        $provider_profile->services()->sync($data);

        return $provider_profile->services->map(function($query){
            $services['service']['id'] = $query->id;
            $services['service']['name'] = $query->name;
            $services['service']['description'] = $query->description;
            $services['service']['is_active'] = $query->is_active;
            $services['service']['created_at'] = $query->created_at;
            $services['service']['updated_at'] = $query->updated_at;
            $services['price'] = $query->pivot->price;
            $services['compare_price'] = $query->pivot->compare_price;
            $services['currency'] = $query->pivot->currency;
            
            return $services;

        })->all();
    }

    public function createProviderProfileCalendar($rootVaule, array $args)
    {
        $provider_profile = ProviderProfile::find(auth()->user()->service_provider->id);

        foreach($args['input'] as $service)
        {
            $data[$service['service_id']]['price'] = $service['price'];
            $data[$service['service_id']]['compare_price'] = $service['compare_price'];
            $data[$service['service_id']]['currency'] = $service['currency'];

        }
        
        $provider_profile->services()->sync($data);

        return $provider_profile->services->map(function($query){
            $services['service']['id'] = $query->id;
            $services['service']['name'] = $query->name;
            $services['service']['description'] = $query->description;
            $services['service']['is_active'] = $query->is_active;
            $services['service']['created_at'] = $query->created_at;
            $services['service']['updated_at'] = $query->updated_at;
            $services['price'] = $query->pivot->price;
            $services['compare_price'] = $query->pivot->compare_price;
            $services['currency'] = $query->pivot->currency;
            
            return $services;

        })->all();
    }
}
