<?php


namespace App\Repositories\Registration;

use App\Contracts\Repositories\Registration\ServiceProviderRegistrationRepositoryInterface;
use App\Models\ClientProfile;
use App\Models\DaySession;
use App\Models\ProviderCompany;
use App\Models\ProviderFacility;
use App\Models\ProviderFacilityOwner;
use App\Models\ProviderMedicalRegistration;
use App\Models\ProviderProfile;
use App\Models\ProviderQualification;
use App\Models\RequestedService;
use App\Models\Service;
use App\Models\User;
use App\Notifications\ServiceProviderRequestsNotification;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Hash;

class ServiceProviderRegistrationRepository implements ServiceProviderRegistrationRepositoryInterface
{
    public function createAccount(array $request):User
    {
        return User::create([
            'name' => $request['first_name'] . " " . $request['middle_name'] . " " . $request['last_name'],
            'email' => $request['email'],
            'mobile_number' => $request['mobile_number'],
            'verification_code' => getVerificationCode(),
            'password' => Hash::make($request['password']),
        ]);
    }

    public function createProviderProfile(array $request):ProviderProfile
    {
        return ProviderProfile::updateOrCreate(
            [
                'user_id' => $request['user_id']
            ],
            [
                'title' => $request['title'] ?? null,
                'first_name' => $request['first_name'],
                'middle_name' => $request['middle_name'],
                'last_name' => $request['last_name'],
                'username' => $request['username'] ?? null,
                'mobile_number' => $request['mobile_number'],
                'alternative_mobile_number' => $request['alternative_mobile_number'] ?? null,
                'email' => $request['email'],
                'address' => $request['address'] ?? null,
                'physical_address' => $request['physical_address']?? null,
                'dob' => $request['dob'] ?? null,
                'gender' => $request['gender'] ?? null,
                'bio' => $request['bio'] ?? null,
                'account_category_type' => $request['account_category_type']??null,
                'provider_sub_level_id' => $request['provider_sub_level_id'] ?? null
            ]
        );
    }

    public function createClientProfile(array $request):ClientProfile
    {
        return  ClientProfile::create([
            'first_name' => $request['first_name'],
            'middle_name' => $request['middle_name'],
            'last_name' => $request['last_name'],
            'mobile_number' => $request['mobile_number'],
            'user_id' => $request['user_id'],
            'email' => $request['email'],
        ]);
    }

    public function createOrUpdateProviderCompany(array $request):ProviderCompany
    {
        $data = [
            'trading_name' => $request['trading_name']??null,
            'name' => $request['name'],
            'mobile_number' => $request['mobile_number'],
            'alternative_mobile_number' => $request['alternative_mobile_number'] ?? null,
            'email' => $request['email'],
            'tin' => $request['tin'],
            'vrn' => $request['vrn'],
            'address' => $request['address'] ?? null,
            'physical_address' => $request['physical_address'] ?? null,
            'website' => $request['website'] ?? null,
            'registration_number' => $request['registration_number'] ?? null,
            'registration_date' => $request['registration_date'] ?? null,
            'description' => $request['description'] ?? null,
        ];

        $provider_company = isset((User::find($request['user_id']))->service_provider->provider_companies[0]->id) ?
            ProviderCompany::updateOrCreate(
                [
                'id' => (User::find($request['user_id']))->service_provider->provider_companies[0]->id
            ],
                $data
            ) : ProviderCompany::create($data);

        $provider_company->provider_profile()
            ->detach((User::find($request['user_id']))->service_provider->id);
        $provider_company->provider_profile()
            ->attach((User::find($request['user_id']))->service_provider->id, ['role' => 'owner']);

        if (!empty($request['tin_attachment'])) {
            $provider_company->clearMediaCollection('provider-company-tin-files');
            $provider_company->addMediaFromBase64($request['tin_attachment'], 'application/pdf')
                ->usingFileName(str_replace(
                    ' ',
                    '-',
                    rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . $request['name'] . '-' .
                    $request['tin'] . '.pdf'
                ))
                ->toMediaCollection('provider-company-tin-files');
        }

        if (!empty($request['vrn_attachment'])) {
            $provider_company->clearMediaCollection('provider-company-vrn-files');
            $provider_company->addMediaFromBase64($request['vrn_attachment'], 'application/pdf')
                ->usingFileName(str_replace(
                    ' ',
                    '-',
                    rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . $request['name'] . '-' .
                    $request['vrn'] . '.pdf'
                ))
                ->toMediaCollection('provider-company-vrn-files');
        }

        return $provider_company;
    }

    private function facilityData(array $request): array
    {
        return [
            'name' => $request['name'],
            'trading_name' => $request['trading_name']??null,
            'tin' => $request['tin'],
            'vrn' => $request['vrn'],
            'mobile_number' => $request['mobile_number'] ??null,
            'alternative_mobile_number' => $request['alternative_mobile_number']??null,
            'email' => $request['email'],
            'ownership_type' => $request['ownership_type'] ?? 'self',
            'address' => $request['address']??null,
            'physical_address' => $request['physical_address'] ??null,
            'website' => $request['website'] ??null,
            'registration_number' => $request['registration_number'] ?? null,
            'description' => $request['description'] ?? null,
            'provider_sub_level_id' => $request['provider_sub_level_id'],
            'provider_company_id' => $request['provider_company_id'],
        ];
    }

    public function createProviderFacility(array $request):ProviderFacility
    {
        $provider_facility = ProviderFacility::create($this->facilityData($request));

        if (!empty($request['tin_attachment'])) {
            $provider_facility->clearMediaCollection('provider-facility-tin-files');
            $provider_facility->addMediaFromBase64($request['tin_attachment'], 'application/pdf')
                ->usingFileName(str_replace(
                    ' ',
                    '-',
                    rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . $request['name'] . '-' .
                    $request['tin'] . '.pdf'
                ))
                ->toMediaCollection('provider-facility-tin-files');
        }

        if (!empty($request['vrn_attachment'])) {
            $provider_facility->clearMediaCollection('provider-facility-vrn-files');
            $provider_facility->addMediaFromBase64($request['vrn_attachment'], 'application/pdf')
                ->usingFileName(str_replace(
                    ' ',
                    '-',
                    rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . $request['name'] . '-' .
                    $request['vrn'] . '.pdf'
                ))
                ->toMediaCollection('provider-facility-vrn-files');
        }


        return $provider_facility;
    }

    public function createFacilityOwner(array $request):ProviderFacilityOwner
    {
        return ProviderFacilityOwner::create([
            'first_name' => $request['owner_first_name'],
            'middle_name' => $request['owner_middle_name'],
            'last_name' => $request['owner_last_name'],
            'mobile_number' => $request['owner_mobile_number'],
            'provider_facility_id' => $request['provider_facility_id'],
            'email' => $request['owner_email'],
        ]);
    }

    public function updateProviderFacility(array $request):ProviderFacility
    {
        $provider_facility = ProviderFacility::find($request['id']);

        $provider_facility->update($this->facilityData($request));

        if (!empty($request['tin_attachment'])) {
            $provider_facility->clearMediaCollection('provider-facility-tin-files');
            $provider_facility->addMediaFromBase64($request['tin_attachment'], 'application/pdf')
                ->usingFileName(str_replace(
                    ' ',
                    '-',
                    rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . $request['name'] . '-' .
                    $request['tin'] . '.pdf'
                ))
                ->toMediaCollection('provider-facility-tin-files');
        }

        if (!empty($request['vrn_attachment'])) {
            $provider_facility->clearMediaCollection('provider-facility-vrn-files');
            $provider_facility->addMediaFromBase64($request['vrn_attachment'], 'application/pdf')
                ->usingFileName(str_replace(
                    ' ',
                    '-',
                    rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . $request['name'] . '-' .
                    $request['vrn'] . '.pdf'
                ))
                ->toMediaCollection('provider-facility-vrn-files');
        }

        return $provider_facility;
    }

    public function deleteProviderFacility(array $request):ProviderFacility
    {
        $provider_facility = ProviderFacility::find($request['facility_id']);

        $provider_facility->clearMediaCollection('provider-facility-tin-files');
        $provider_facility->clearMediaCollection('provider-facility-vrn-files');

        $provider_facility->delete();

        return $provider_facility;
    }

    public function createProviderQualification(array $request):ProviderQualification
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
            ->usingFileName(str_replace(
                ' ',
                '-',
                rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . auth()->user()->name . '-' .
                $qualification['award_title'] . '.pdf'
            ))
            ->toMediaCollection('provider-qualification-files');

        return $provider_qualification;
    }

    public function updateProviderQualification(array $request):ProviderQualification
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
                ->usingFileName(str_replace(
                    ' ',
                    '-',
                    rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . auth()->user()->name . '-' .
                    $request['award_title'] . '.pdf'
                ))
                ->toMediaCollection('provider-qualification-files');
        }

        return $provider_qualification;
    }

    public function deleteProviderQualification(array $request):ProviderQualification
    {
        $provider_qualification = ProviderQualification::find($request['qualification_id']);

        $provider_qualification->clearMediaCollection('provider-qualification-files');

        $provider_qualification->delete();

        return $provider_qualification;
    }

    public function createProviderMedicalRegistration(array $request):ProviderMedicalRegistration
    {
        $medical_registration = $request;

        $provider_medical_registration = ProviderMedicalRegistration::create([
            'certificate_name' => $medical_registration['certificate_name'],
            'certificate_number' => $medical_registration['certificate_number'],
            'registration_number' => $medical_registration['registration_number'],
            'provider_profile_id' => auth()->user()->service_provider->id,
            'year' => $medical_registration['year'],
            'expired_at' => $medical_registration['expired_at'],
            'service_id' => $medical_registration['service_id'],
        ]);

        $provider_medical_registration->addMediaFromBase64($medical_registration['attachment'], 'application/pdf')
            ->usingFileName(str_replace(
                ' ',
                '-',
                rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . auth()->user()->name . '-' .
                $medical_registration['certificate_name'] . '.pdf'
            ))
            ->toMediaCollection('provider-medical-registration-files');

        return $provider_medical_registration;
    }

    public function updateProviderMedicalRegistration(array $request):ProviderMedicalRegistration
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
                ->usingFileName(str_replace(
                    ' ',
                    '-',
                    rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . auth()->user()->name . '-' .
                    $request['certificate_name'] . '.pdf'
                ))
                ->toMediaCollection('provider-medical-registration-files');
        }

        return $provider_medical_registration;
    }

    public function deleteProviderMedicalRegistration(array $request):ProviderMedicalRegistration
    {
        $provider_medical_registration = ProviderMedicalRegistration::find($request['medical_reg_id']);

        $provider_medical_registration->clearMediaCollection('provider-medical-registration-files');

        $provider_medical_registration->delete();

        return $provider_medical_registration;
    }

    public function createProviderFacilityServices(array $request):Collection
    {
        $provider_facility = ProviderFacility::find($request['provider_facility_id']);

        foreach ($request['service'] as $service) {
            $data[$service['service_id']]['price'] = $service['price'];
            $data[$service['service_id']]['compare_price'] = $service['compare_price'];
            $data[$service['service_id']]['currency'] = $service['currency'];
        }

        $provider_facility->services()->syncWithoutDetaching($data);

        return $provider_facility->services;
    }

    public function createRequestedService(array $request): RequestedService
    {
        return RequestedService::create($request);
    }

    public function deleteProviderFacilityServices(array $request):Collection
    {
        $provider_facility = ProviderFacility::find($request['facility_id']);

        $provider_facility->services()->detach($request['service_id']);

        return $provider_facility->services;
    }

    public function createProviderProfileServices(array $request):Collection
    {
        $provider_profile = ProviderProfile::find(auth()->user()->service_provider->id);

        foreach ($request as $service) {
            $data[$service['service_id']]['price'] = $service['price'];
            $data[$service['service_id']]['compare_price'] = $service['compare_price'];
            $data[$service['service_id']]['currency'] = $service['currency'];
        }
        $provider_profile->services()->syncWithoutDetaching($data);

        return $provider_profile->services;
    }

    public function deleteProviderProfileServices(array $request):Collection
    {
        $provider_profile = ProviderProfile::find(auth()->user()->service_provider->id);

        $provider_profile->services()->detach($request['service_id']);

        return $provider_profile->services;
    }

    public function createProviderProfileCalendar(array $request):DaySession
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

    public function createProviderFacilityCalendar(array $request):DaySession
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

    public function updateProviderProfileCalendar(array $request):DaySession
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

    public function updateProviderFacilityCalendar(array $request):DaySession
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

    public function submitProfileForVerification(array $request):ProviderProfile
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
