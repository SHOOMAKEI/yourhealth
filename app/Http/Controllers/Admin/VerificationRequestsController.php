<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FacilityMedicalRegistration;
use App\Models\ProviderFacility;
use App\Models\ProviderMedicalRegistration;
use App\Models\ProviderProfile;
use App\Models\ProviderRejectionReason;
use App\Models\ServiceCategory;
use App\Models\User;
use App\Notifications\ServiceProviderDisqualificationNotification;
use App\Notifications\ServiceProviderVerificationNotification;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VerificationRequestsController extends Controller
{
    public function profileInfo()
    {
        $providers = ProviderProfile::where(['is_submitted' => true])->orderBy('is_submitted', 'DESC')->get();

        return Inertia::render('ServiceProviders/requests/providers', ['providers' => $providers]);
    }

    public function companyInfo(ProviderProfile $provider_profile)
    {
        return $provider_profile->provider_companies[0];
    }

    public function facilities(ProviderProfile $provider_profile)
    {
        return ProviderFacility::where('provider_company_id', $provider_profile->provider_companies[0]->id)->get();
    }

    public function facility(ProviderFacility $provider_facility): ProviderFacility
    {
        return $provider_facility;
    }

    public function facilityServices(ProviderFacility $provider_facility)
    {
        return $provider_facility->services ?? $provider_facility->services->toArray();
    }

    public function qualifications(ProviderProfile $provider_profile)
    {
        return $provider_profile->provider_qualifications;
    }

    public function practiceLicense(ProviderProfile $provider_profile)
    {
        return $provider_profile->provider_medical_registrations->map(function ($query) {
            $data['id'] = $query->id;
            $data['certificate_name'] = $query->certificate_name;
            $data['certificate_number'] = $query->certificate_number;
            $data['registration_number'] = $query->registration_number;
            $data['year'] = $query->year;
            $data['file_url'] = $query->getFirstMediaUrl('provider-medical-registration-files');
            $data['file_name'] = $query->getMedia('provider-medical-registration-files')[0]->file_name;
            $data['file_type'] = str_replace('application/', '', $query->getMedia('provider-medical-registration-files')[0]->mime_type);
            $data['file_size'] = $query->getMedia('provider-medical-registration-files')[0]->human_readable_size;
            $data['is_verified'] = $query->is_verified;
            $data['verified_at'] = $query->verified_at;
            $data['rejected_at'] = $query->rejected_at;
            $data['created_at'] = $query->created_at;
            $data['updated_at'] = $query->updated_at;
            $data['expired_at'] = $query->expired_at;
            $data['service'] = (ServiceCategory::find($query->service_category_id))->name;
            return $data;
        });
    }

    public function facilityPracticeLicense(ProviderFacility $facility)
    {
        return $facility->facility_practical_licenses->map(function ($query) {
            $data['id'] = $query->id;
            $data['certificate_name'] = $query->certificate_name;
            $data['certificate_number'] = $query->certificate_number;
            $data['registration_number'] = $query->registration_number;
            $data['year'] = $query->year;
            $data['file_url'] = $query->getFirstMediaUrl('facility-medical-registration-files');
            $data['file_name'] = $query->getMedia('facility-medical-registration-files')[0]->file_name;
            $data['file_type'] = str_replace('application/', '', $query->getMedia('facility-medical-registration-files')[0]->mime_type);
            $data['file_size'] = $query->getMedia('facility-medical-registration-files')[0]->human_readable_size;
            $data['is_verified'] = $query->is_verified;
            $data['verified_at'] = $query->verified_at;
            $data['rejected_at'] = $query->rejected_at;
            $data['created_at'] = $query->created_at;
            $data['updated_at'] = $query->updated_at;
            $data['expired_at'] = $query->expired_at;
            $data['service'] = (ServiceCategory::find($query->service_category_id))->name;
            return $data;
        });
    }

    public function practiceLicenseApproval(ProviderMedicalRegistration $practice_license)
    {
        if ($practice_license->is_verified == false) {
            $practice_license->forceFill([
                'is_verified' => true,
                'verified_at' => now(),
                'rejected_at' => null
            ])->save();
        }

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function practiceLicenseDeny(ProviderMedicalRegistration $practice_license)
    {
        if ($practice_license->rejected_at == null) {
            $practice_license->forceFill([
                'is_verified' => false,
                'rejected_at' => now()
            ])->save();
        }

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function facilityPracticeLicenseApproval(FacilityMedicalRegistration $practice_license)
    {
        if ($practice_license->is_verified == false) {
            $practice_license->forceFill([
                'is_verified' => true,
                'verified_at' => now(),
                'rejected_at' => null
            ])->save();
        }

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function facilityPracticeLicenseDeny(FacilityMedicalRegistration $practice_license)
    {
        if ($practice_license->rejected_at == null) {
            $practice_license->forceFill([
                'is_verified' => false,
                'rejected_at' => now()
            ])->save();
        }

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function IndividualServices(ProviderProfile $provider_profile)
    {
        return $provider_profile->services ?? $provider_profile->services->toArray();
    }

    public function verify(ProviderProfile $provider_profile)
    {
        $user = User::find($provider_profile->user_id);
        $admin = User::find(auth()->user()->id);

        if ($provider_profile->is_verified == false) {
            $provider_profile->forceFill([
                'is_verified' => 1,
            ])->save();

            $user->forceFill([
                'profile_stage' => 11,
            ])->save();

            $user->assignRole('verified-service-provider');
            $user->removeRole('unverified-service-provider');

            $user->notify(new ServiceProviderVerificationNotification());
        }


        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function reject(Request $request)
    {
        $request->validate([
            'reasons' => ['required', 'string'],
            'provider_id' => ['required', 'numeric', 'exists:provider_profiles,id']
        ]);

        $provider_profile = ProviderProfile::find($request['provider_id']);
        $user = User::find($provider_profile->user_id);

        $provider_last_rejection = ProviderRejectionReason::where('provider_profile_id', $provider_profile->id)->orderBy('created_at', 'DESC')->first();

        $provider_profile->forceFill([
            'is_verified' => false,
            'submitted_at' => null,
            'is_submitted' => false
        ])->save();

        $user->forceFill([
            'profile_stage' => 0,
        ])->save();

        $user->removeRole('verified-service-provider');
        $user->assignRole('unverified-service-provider');

        $reasons = ProviderRejectionReason::create([
            'provider_profile_id' => $provider_profile->id,
            'reasons' => $request['reasons'],
            'rejected_round' => $provider_last_rejection->isEmpty() ? 1 : $provider_last_rejection->rejection_round + 1
        ]);

        $user->notify(new ServiceProviderDisqualificationNotification($reasons));

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function viewProviderProfileInfo(ProviderProfile $profile)
    {
        return Inertia::render('ServiceProviders/requests/components/ProviderProfile', ['provider' => $profile]);
    }
}
