<?php

namespace App\Http\Controllers\ServiceProviderProfileCompletion;

use App\Contracts\Repositories\Registration\ServiceProviderRegistrationRepositoryInterface;
use App\Http\Controllers\Controller;
use App\Models\ProviderMedicalRegistration;
use Illuminate\Http\Request;

class PracticeLicenseController extends Controller
{
    public function store(Request $request, ServiceProviderRegistrationRepositoryInterface $repository)
    {
        $request->validate([
            'certificate_name'=> ['required', 'max:255' , 'string'],
            'certificate_number'=> ['required', 'max:255' , 'string'],
            'year'=> ['required' , 'date_format:Y'],
            'registration_number'=> ['max:255' , 'string'],
            'expired_at'=> ['required' , 'date_format:Y-m-d'],
            'service_category_id'=> ['required','numeric' , 'exists:service_categories,id'],
            'attachment' => ['required', 'string', 'base64pdf']
        ]);

        if (auth()->user()->service_provider->account_category_type == SERVICE_PROVIDER_FACILITY_ACCOUNT
            ||auth()->user()->service_provider->account_category_type == SERVICE_PROVIDER_COMPANY_ACCOUNT) {
            $request->validate([
                'provider_facility_id' => ['required', 'numeric' , 'exists:provider_facilities,id']
            ]);
        }

        if ($this->authorizeUser()) {
            $data = $request->toArray();

            $data+=['user_id' => auth()->user()->id];

            $repository->createProviderMedicalRegistration($data);
        }


        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function authorizeUser(): bool
    {
        return auth()->user()->service_provider->is_submitted == false || auth()->user()->hasRole('verified-service-provider');
    }
    public function destroy(
        ProviderMedicalRegistration $registration,
        ServiceProviderRegistrationRepositoryInterface $repository
    ) {
        if ($this->authorizeUser() &&
            $registration->provider_profile_id === auth()->user()->service_provider->id) {
            $request['medical_reg_id'] = $registration->id;

            $repository->deleteProviderMedicalRegistration($request);
        }
        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }
}
