<?php

namespace App\Http\Controllers\ServiceProviderProfileCompletion;

use App\Contracts\Repositories\Registration\ServiceProviderRegistrationRepositoryInterface;
use App\Http\Controllers\Controller;
use App\Models\ProviderQualification;
use Illuminate\Http\Request;

class EducationQualificationController extends Controller
{
    public function store(Request $request, ServiceProviderRegistrationRepositoryInterface $repository)
    {
        $request->validate([
            'institution_name'=> ['required', 'max:255' , 'string'],
            'award_title'=> ['required', 'max:255' , 'string'],
            'year'=> ['required' , 'date_format:Y'],
            'description'=> ['max:255' , 'string'],
            'attachment' => ['required', 'string', 'base64pdf']
        ]);

        if ($this->authorizeUser()) {
            $data = $request->toArray();

            $data += ['user_id' => auth()->user()->id];

            $repository->createProviderQualification($data);
        }

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function authorizeUser(): bool
    {
        return auth()->user()->service_provider->is_submitted == false || auth()->user()->hasRole('verified-service-provider');
    }
    public function destroy(
        ProviderQualification $qualification,
        ServiceProviderRegistrationRepositoryInterface $repository
    ) {
        if ($this->authorizeUser() &&
            $qualification->provider_profile_id === auth()->user()->service_provider->id) {
            $request['qualification_id'] = $qualification->id;

            $repository->deleteProviderQualification($request);
        }
        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }
}
