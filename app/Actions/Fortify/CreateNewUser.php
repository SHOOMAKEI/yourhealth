<?php

namespace App\Actions\Fortify;

use App\Models\User;
use App\Services\SMSService;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        // dd($input);
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'mobile_number' => ['required', 'string','regex:/^([0-9\s\-\+\(\)]*)$/','max:255', 'unique:users'],
            'category' => ['required', Rule::in(['patient', 'service-provider'])],
            'password' => $this->passwordRules(),
        ])->validate();

        $user =  User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'mobile_number' => $input['mobile_number'],
            'verification_code' => rand(100000,999999),
            'password' => Hash::make($input['password']),
        ]);

        
        if($input['category'] == 'service-provider') {
            $user->assignRole('service-provider');
        } else {
            $user->assignRole('patient');
        }

        $this->sendVerificationCode($user->mobile_number, $user->verification_code);
        return $user;
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
}
