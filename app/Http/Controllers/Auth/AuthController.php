<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\ClientTeam;
use App\Models\DaySession;
use App\Services\SMSService;
use Illuminate\Http\Request;
use App\Models\ClientProfile;
use App\Models\ProviderCompany;
use App\Models\ProviderProfile;
use Illuminate\Validation\Rule;
use App\Models\ProviderFacility;
use App\Models\RequestedService;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use App\Models\ProviderFacilityOwner;
use App\Models\ProviderQualification;
use App\Models\ProviderMedicalRegistration;
use App\Actions\Fortify\PasswordValidationRules;
use App\Notifications\ServiceProviderRequestsNotification;

class AuthController extends Controller
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param array $input
     * @return \App\Models\User
     */
    public function create(Request $request)
    {

        $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'middle_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'mobile_number' => ['required', 'string','regex:/^([0-9\s\-\+\(\)]*)$/','max:255', 'unique:users,mobile_number'],
            'account_category' => ['required', Rule::in(['patient', 'service-provider'])],
            'account_category_type' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => $this->passwordRules(),
        ]);

        $user = User::create([
            'name' => $request['first_name'] . " " . $request['middle_name'] . " " . $request['last_name'],
            'email' => $request['email'],
            'mobile_number' => $request['mobile_number'],
            'verification_code' => $this->getVerificationCode(),
            'password' => Hash::make($request['password']),
        ]);


        if ($request['account_category'] == 'service-provider') {
            $user->assignRole('service-provider');
            $user->assignRole('unverified-service-provider');

            ProviderProfile::create([
                'first_name' => $request['first_name'],
                'middle_name' => $request['middle_name'],
                'last_name' => $request['last_name'],
                'mobile_number' => $request['mobile_number'],
                'user_id' => $user->id,
                'email' => $request['email'],
                'account_category_type' => $request['account_category_type'],
            ]);

            if ($request['account_category_type'] == 'company') {
                $user->assignRole('owner');
                $provider_company = ProviderCompany::create([
                    'name' => $request['name'],
                    'tin' => $request['tin'],
                    'vrn' => $request['vrn'],
                    'mobile_number' => $request['mobile_number'],
                    'email' => $request['email'],
                ]);

                $provider_company->provider_profile()->attach($user->service_provider->id, ['role' => 'owner']);
            }

            if ($request['account_category_type'] == 'facility') {
                $user->assignRole('owner');
                $provider_company = ProviderCompany::create([
                    'name' => $request['name'],
                    'tin' => $request['tin'],
                    'vrn' => $request['vrn'],
                    'mobile_number' => $request['mobile_number'],
                    'email' => $request['email'],
                ]);

                $provider_company->provider_profile()->attach($user->service_provider->id, ['role' => 'owner']);

                $provider_facility = ProviderFacility::create([
                    'name' => $request['name'],
                    'tin' => $request['tin'],
                    'vrn' => $request['vrn'],
                    'mobile_number' => $request['mobile_number'],
                    'provider_company_id' => $provider_company->id,
                    'email' => $request['email'],
                    'ownership_type' => $request['ownership_type'],
                    'provider_sub_level_id' => $request['provider_sub_level_id'],
                ]);

                if ($request['ownership_type'] == 'other') {
                    ProviderFacilityOwner::create([
                        'first_name' => $request['owner_first_name'],
                        'middle_name' => $request['owner_middle_name'],
                        'last_name' => $request['owner_last_name'],
                        'mobile_number' => $request['owner_mobile_number'],
                        'provider_facility_id' => $provider_facility->id,
                        'email' => $request['owner_email'],
                    ]);
                }
            }
        } else {
            $user->assignRole('patient');

            $client = ClientProfile::create([
                'first_name' => $request['first_name'],
                'middle_name' => $request['middle_name'],
                'last_name' => $request['last_name'],
                'mobile_number' => $request['mobile_number'],
                'user_id' => $user->id,
                'email' => $request['email'],
            ]);

            // if ($request['account_category_type'] == 'family') {
            //     ClientTeam::create([
            //         'name' => $request['name'],
            //         'team_type' => 'family',
            //         'mobile_number' => $request['mobile_number'],
            //         'owner_id' => $user->id,
            //         'email' => $request['email'],
            //     ]);
            // }

            // if ($request['account_category_type'] == 'cooperate') {
            //     ClientTeam::create([
            //         'name' => $request['name'],
            //         'team_type' => 'family',
            //         'mobile_number' => $request['mobile_number'],
            //         'owner_id' => $user->id,
            //         'email' => $request['email'],
            //         'tin' => $request['tin'],
            //         'vrn' => $request['vrn'],
            //     ]);
            // }
        }

        return new UserResource($user);
    }

    public function getVerificationCode()
    {
        $verification_code = '';

        for ($i = 0; $i < 6; $i++) {
            $number = rand(0, 9);
            $verification_code = $verification_code . $number;
        }

        return $verification_code;
    }

    public function sendVerificationCode(string $number, string $verification_code)
    {
        $sms = 'Your Verification Code is ' . $verification_code;

        SMSService::sendSMSToSingeUser($number, $sms);
    }

    public function updateProviderProfile($rootValue, array $request)
    {
        $provider_profile = ProviderProfile::updateOrCreate(
            [
            'user_id' => auth()->user()->id],
            ['title' => $request['title'],
                'first_name' => $request['first_name'],
                'middle_name' => $request['middle_name'],
                'last_name' => $request['last_name'],
                'username' => $request['username'],
                'mobile_number' => auth()->user()->mobile_number,
                'alternative_mobile_number' => $request['alternative_mobile_number'],
                'email' => auth()->user()->email,
                'address' => $request['address'],
                'physical_address' => $request['physical_address'],
                'dob' => $request['dob'],
                'gender' => $request['gender'],
                'bio' => $request['bio'],
                'provider_sub_level_id' => $request['provider_sub_level_id']
            ]
        );

        return $provider_profile;
    }

    public function createProviderCompany($rootValue, array $request)
    {
        // dd(auth()->user()->service_provider->provider_companies[0]->id);
        $provider_company = ProviderCompany::updateOrCreate(
            [
            'id' => auth()->user()->service_provider->provider_companies[0]->id
            ],
            [
                'trading_name' => $request['trading_name'],
                'name' => $request['name'],
                'mobile_number' => $request['mobile_number'],
                'alternative_mobile_number' => $request['alternative_mobile_number'],
                'email' => $request['email'],
                'address' => $request['address'],
                'physical_address' => $request['physical_address'],
                'website' => $request['website'],
                'registration_number' => $request['registration_number'],
                'registration_date' => $request['registration_date'],
                'description' => $request['description'],
            ]
        );

        $provider_company->provider_profile()->detach(auth()->user()->service_provider->id);
        $provider_company->provider_profile()->attach(auth()->user()->service_provider->id, ['role' => 'Owner']);

        if (!empty($request['tin_attachment'])) {
            $provider_company->clearMediaCollection('provider-company-tin-files');
            $provider_company->addMediaFromBase64($request['tin_attachment'], 'application/pdf')
            ->usingFileName(str_replace(' ', '-', rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . $request['name'] . '-' . $request['tin'] . '.pdf'))
            ->toMediaCollection('provider-company-tin-files');
        }
        
        if (!empty($request['vrn_attachment'])) {
            $provider_company->clearMediaCollection('provider-company-vrn-files');
            $provider_company->addMediaFromBase64($request['vrn_attachment'], 'application/pdf')
                ->usingFileName(str_replace(' ', '-', rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . $request['name'] . '-' . $request['vrn'] . '.pdf'))
                ->toMediaCollection('provider-company-vrn-files');
        }
        

        return $provider_company;
    }

    public function createProviderFacility($rootValue, array $request)
    {
        $provider_facility = ProviderFacility::create([
            'name' => $request['name'],
            'trading_name' => $request['trading_name'],
            'tin' => $request['tin'],
            'vrn' => $request['vrn'],
            'mobile_number' => $request['mobile_number'],
            'alternative_mobile_number' => $request['alternative_mobile_number'],
            'email' => $request['email'],
            'ownership_type' => 'self',
            'address' => $request['address'],
            'physical_address' => $request['physical_address'],
            'website' => $request['website'],
            'registration_number' => $request['registration_number'],
            'description' => $request['description'],
            'provider_sub_level_id' => $request['provider_sub_level_id'],
            'provider_company_id' => $request['provider_company_id'],
        ]);

        $provider_facility->addMediaFromBase64($request['tin_attachment'], 'application/pdf')
                ->usingFileName(str_replace(' ', '-', rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . $request['name'] . '-' . $request['tin'] . '.pdf'))
                ->toMediaCollection('provider-facility-tin-files');

        $provider_facility->addMediaFromBase64($request['vrn_attachment'], 'application/pdf')
                ->usingFileName(str_replace(' ', '-', rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . $request['name'] . '-' . $request['vrn'] . '.pdf'))
                ->toMediaCollection('provider-facility-vrn-files');

        return $provider_facility;
    }

    public function updateProviderFacility($rootValue, array $request)
    {
        $provider_facility = ProviderFacility::find($request['id']);

        $provider_facility->update([
            'name' => $request['name'],
            'trading_name' => $request['trading_name'],
            'tin' => $request['tin'],
            'vrn' => $request['vrn'],
            'mobile_number' => $request['mobile_number'],
            'alternative_mobile_number' => $request['alternative_mobile_number'],
            'email' => $request['email'],
            'ownership_type' => 'self',
            'address' => $request['address'],
            'physical_address' => $request['physical_address'],
            'website' => $request['website'],
            'registration_number' => $request['registration_number'],
            'description' => $request['description'],
            'provider_sub_level_id' => $request['provider_sub_level_id'],
            'provider_company_id' => $request['provider_company_id'],
        ]);
        
        if (!empty($request['tin_attachment'])) {
            $provider_facility->clearMediaCollection('provider-facility-tin-files');
            $provider_facility->addMediaFromBase64($request['tin_attachment'], 'application/pdf')
            ->usingFileName(str_replace(' ', '-', rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . $request['name'] . '-' . $request['tin'] . '.pdf'))
            ->toMediaCollection('provider-facility-tin-files');
        }
       
        if (!empty($request['tin_attachment'])) {
            $provider_facility->clearMediaCollection('provider-facility-vrn-files');
            $provider_facility->addMediaFromBase64($request['vrn_attachment'], 'application/pdf')
            ->usingFileName(str_replace(' ', '-', rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . $request['name'] . '-' . $request['vrn'] . '.pdf'))
            ->toMediaCollection('provider-facility-vrn-files');
        }
       

        return $provider_facility;
    }

    public function deleteProviderFacility($rootValue, array $request)
    {
        $provider_facility = ProviderFacility::find($request['facility_id']);

        $provider_facility->clearMediaCollection('provider-facility-tin-files');
        $provider_facility->clearMediaCollection('provider-facility-vrn-files');

        $provider_facility->delete();

        return $provider_facility;
    }


    public function createProviderQualification($rootValue, array $request)
    {
        $qualification = $request;

        $provider_qualification = ProviderQualification::create([
            'award_title' => $qualification['award_title'],
            'institution_name' => $qualification['institution_name'],
            'description' => $qualification['description'],
            'provider_profile_id' => auth()->user()->service_provider->id,
            'year' => $qualification['year'],
        ]);

        $provider_qualification->addMediaFromBase64($qualification['attachment'], 'application/pdf')
            ->usingFileName(str_replace(' ', '-', rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . auth()->user()->name . '-' . $qualification['award_title'] . '.pdf'))
            ->toMediaCollection('provider-qualification-files');

        return $provider_qualification;
    }

    public function updateProviderQualification($rootValue, array $request)
    {
        $provider_qualification = ProviderQualification::find($request['id']);

        $provider_qualification->update([
            'award_title' => $request['award_title'],
            'institution_name' => $request['institution_name'],
            'description' => $request['description'],
            'provider_profile_id' => auth()->user()->service_provider->id,
            'year' => $request['year'],
        ]);
        if (!empty($request['attachment'])) {
            $provider_qualification->clearMediaCollection('provider-qualification-files');
            $provider_qualification->addMediaFromBase64($request['attachment'], 'application/pdf')
                ->usingFileName(str_replace(' ', '-', rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . auth()->user()->name . '-' . $request['award_title'] . '.pdf'))
                ->toMediaCollection('provider-qualification-files');
        }
       
        return $provider_qualification;
    }

    public function deleteProviderQualification($rootValue, array $request)
    {
        $provider_qualification = ProviderQualification::find($request['qualification_id']);

        $provider_qualification->clearMediaCollection('provider-qualification-files');

        $provider_qualification->delete();
    
        return $provider_qualification;
    }

    public function createProviderMedicalRegistration($rootValue, array $request)
    {
        $medical_registration = $request;

        $provider_medical_registration = ProviderMedicalRegistration::create([
                'certificate_name' => $medical_registration['certificate_name'],
                'certificate_number' => $medical_registration['certificate_number'],
                'registration_number' => $medical_registration['registration_number'],
                'provider_profile_id' => auth()->user()->service_provider->id,
                'year' => $medical_registration['year'],
            ]);

        $provider_medical_registration->addMediaFromBase64($medical_registration['attachment'], 'application/pdf')
                ->usingFileName(str_replace(' ', '-', rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . auth()->user()->name . '-' . $medical_registration['certificate_name'] . '.pdf'))
                ->toMediaCollection('provider-medical-registration-files');
           

        return $provider_medical_registration;
    }

    public function updateProviderMedicalRegistration($rootValue, array $request)
    {
        $provider_medical_registration = ProviderMedicalRegistration::find($request['id']);
        $provider_medical_registration->update([
            'certificate_name' => $request['certificate_name'],
            'certificate_number' => $request['certificate_number'],
            'registration_number' => $request['registration_number'],
            'provider_profile_id' => auth()->user()->service_provider->id,
            'year' => $request['year'],
        ]);

        if (!empty($request['attachment'])) {
            $provider_medical_registration->clearMediaCollection('provider-medical-registration-files');
            $provider_medical_registration->addMediaFromBase64($request['attachment'], 'application/pdf')
                ->usingFileName(str_replace(' ', '-', rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . auth()->user()->name . '-' . $request['certificate_name'] . '.pdf'))
                ->toMediaCollection('provider-medical-registration-files');
        }
       

        return $provider_medical_registration;
    }

    public function deleteProviderMedicalRegistration($rootValue, array $request)
    {
        $provider_medical_registration = ProviderMedicalRegistration::find($request['medical_reg_id']);
        

        $provider_medical_registration->clearMediaCollection('provider-medical-registration-files');
        

        $provider_medical_registration->delete();

        return $provider_medical_registration;
    }

    public function createProviderFacilityServices($rootValue, array $request)
    {
        $provider_facility = ProviderFacility::find($request['provider_facility_id']);

        foreach ($request['service'] as $service) {
            $data[$service['service_id']]['price'] = $service['price'];
            $data[$service['service_id']]['compare_price'] = $service['compare_price'];
            $data[$service['service_id']]['currency'] = $service['currency'];
        }

        $provider_facility->services()->syncWithoutDetaching($data);

        return $provider_facility->services;

        // return $provider_facility->services->map(function ($query) {
        //     $services['service']['id'] = $query->id;
        //     $services['service']['name'] = $query->name;
        //     $services['service']['description'] = $query->description;
        //     $services['service']['is_active'] = $query->is_active;
        //     $services['service']['created_at'] = $query->created_at;
        //     $services['service']['updated_at'] = $query->updated_at;
        //     $services['price'] = $query->pivot->price;
        //     $services['compare_price'] = $query->pivot->compare_price;
        //     $services['currency'] = $query->pivot->currency;

        //     return $services;

        // })->all();
    }

    public function deleteProviderFacilityServices($rootValue, array $request)
    {
        $provider_facility = ProviderFacility::find($request['facility_id']);


        $provider_facility->services()->detach($request['service_id']);

        return $provider_facility->services;

        // return $provider_facility->services->map(function ($query) {
        //     $services['service']['id'] = $query->id;
        //     $services['service']['name'] = $query->name;
        //     $services['service']['description'] = $query->description;
        //     $services['service']['is_active'] = $query->is_active;
        //     $services['service']['created_at'] = $query->created_at;
        //     $services['service']['updated_at'] = $query->updated_at;
        //     $services['price'] = $query->pivot->price;
        //     $services['compare_price'] = $query->pivot->compare_price;
        //     $services['currency'] = $query->pivot->currency;

        //     return $services;

        // })->all();
    }

    public function createProviderProfileServices($rootValue, array $request)
    {
        $provider_profile = ProviderProfile::find(auth()->user()->service_provider->id);

        foreach ($request as $service) {
            $data[$service['service_id']]['price'] = $service['price'];
            $data[$service['service_id']]['compare_price'] = $service['compare_price'];
            $data[$service['service_id']]['currency'] = $service['currency'];
        }

        $provider_profile->services()->syncWithoutDetaching($data);

        return $provider_profile->services->map(function ($query) {
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


    public function deleteProviderProfileServices($rootValue, array $request)
    {
        $provider_profile = ProviderProfile::find(auth()->user()->service_provider->id);


        $provider_profile->services()->detach($request['service_id']);

        return $provider_profile->services->map(function ($query) {
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

    public function createProviderProfileCalendar($rootValue, array $request)
    {
        $provider_profile = ProviderProfile::find(auth()->user()->service_provider->id);


        $index = 0;

        foreach ($request as $session) {
            $session_data = DaySession::create([
                'name' => $session['name'],
                'from' => $session['from'],
                'to' => $session['to'],
                'interval' => $session['interval'],
                'day_id' => $session['day_id'],

            ]);

            $data[$index] = $session_data->id;

            $index++;
        }

        $provider_profile->day_sessions()->sync($data);

        return $provider_profile->day_sessions->map(function ($query) {
            $sessions['id'] = $query->id;
            $sessions['name'] = $query->name;
            $sessions['from'] = $query->from;
            $sessions['to'] = $query->to;
            $sessions['interval'] = $query->interval;
            $sessions['day']['id'] = $query->day->id;
            $sessions['day']['name'] = $query->day->name;
            $sessions['day']['created_at'] = $query->day->id;
            $sessions['day']['updated_at'] = $query->day->id;
            $sessions['created_at'] = $query->created_at;
            $sessions['updated_at'] = $query->updated_at;

            return $sessions;
        })->all();
    }

    public function createRequestedService($rootValue, array $request)
    {
        $requested_serveces_data = RequestedService::create([
            'name' => $request['name'],
            'description' => $request['description'] ?? null,
            'provider_profile_id' => auth()->user()->service_provider->id,
        ]);

        return $requested_serveces_data;
    }

    public function submitted($rootValue, array $request)
    {
        $user = User::find(auth()->user()->id);
        $profile = ProviderProfile::find(auth()->user()->service_provider->id);
        $admins = User::role('super-admin')->get();

        $user->forceFill([
            'profile_stage' => 10,
        ])->save();

        $profile->forceFill([
            'is_submitted' => 1,
            'submitted_at' => now()
        ])->save();
        
        foreach ($admins as $admin) {
            $admin->notify(new ServiceProviderRequestsNotification());
        }
        
        return $profile;
    }
}
