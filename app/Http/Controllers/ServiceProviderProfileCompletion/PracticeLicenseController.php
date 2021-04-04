<?php

namespace App\Http\Controllers\ServiceProviderProfileCompletion;

use App\Contracts\Repositories\Registration\ServiceProviderRegistrationRepositoryInterface;
use App\Http\Controllers\Controller;
use App\Models\MedicalProcedure;
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
            'service_id'=> ['required','numeric' , 'exists:services,id'],
            'attachment' => ['required', 'string', 'base64pdf']
        ]);

        $data = $request->toArray();

        $data+=['user_id' => auth()->user()->id];

        $repository->createProviderMedicalRegistration($data);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);


    }


    public function destroy(
        ProviderMedicalRegistration $registration,
        ServiceProviderRegistrationRepositoryInterface $repository
    )
    {
        $request['medical_reg_id'] = $registration->id;

        $repository->deleteProviderMedicalRegistration($request);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

}
