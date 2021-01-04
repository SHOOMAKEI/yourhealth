<?php

namespace App\Http\Controllers\Api\Registration;

use App\Models\User;
use App\Services\SMSService;
use App\Models\ProviderProfile;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use App\Actions\Fortify\PasswordValidationRules;

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
        if(in_array($args['input']['account_category'], ['patient', 'service-provider'])) {
            return (object) [
                'errors' => [
                    'message' => 'Validation',
                    "extensions"=> [
                        "validation " => ["The email field must be a valid email."]
                    ]
                ]
            ]
        }
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
                'mobile' => $args['input']['mobile'],
                'user_id' => $user->id,
                'first_name' => $args['input']['first_name'],
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
        #...
    }
}
