<?php

namespace App\Http\Controllers\ServiceProviderProfileCompletion;

use App\Contracts\Repositories\Registration\ServiceProviderRegistrationRepositoryInterface;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\EducationQualification;
use App\Models\ProviderCompany;
use App\Models\ProviderFacility;
use App\Models\ProviderMedicalRegistration;
use App\Models\ProviderProfile;
use App\Models\ProviderQualification;
use App\Models\ProviderSubLevel;
use App\Models\Service;
use App\Models\User;
use App\Rules\ProviderSubLevelFieldValidator;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PersonalInfoController extends Controller
{
    public function index()
    {
        $provider_company = ProviderProfile::find(auth()->user()->service_provider->id)->company;
        $provider_facilities = ProviderProfile::find(auth()->user()->service_provider->id)->facilities;
        $qualification = ProviderQualification::where('provider_profile_id',
            auth()->user()->service_provider->id )->get()->map(function ($query){
                $data['id'] = $query->id;
                $data['award_title'] = $query->award_title;
                $data['description'] = $query->description;
                $data['attachment'] = $query->attachment;
                $data['year'] = $query->year;
                return $data;
        });
       $medical_reg =  ProviderMedicalRegistration::where('provider_profile_id',
            auth()->user()->service_provider->id)->get()->map(function ($query){
           $data['id'] = $query->id;
           $data['certificate_name'] = $query->certificate_name;
           $data['certificate_number'] = $query->certificate_number;
           $data['registration_number'] = $query->registation_number;
           $data['attachment'] = $query->attachment;
           $data['year'] = $query->year;
           return $data;
       });

       return Inertia::render('ServiceProviderProfileCompletion/Register',[
           'user' => collect(new UserResource(User::find(auth()->user()->id)))->toArray(),
           'provider_sub_levels' =>  ProviderSubLevel::all()->toArray(),
           'qualifications' => $qualification,
           'company' =>   is_null($provider_company)?null: $provider_company->toArray(),
           'facilities' =>  is_null($provider_facilities)?null: $provider_facilities->toArray(),
           'medical_registrations' => $medical_reg,
           'all_services' => Service::all()->toArray(),
           'provider_services' => '',
           'facility_services' => '',
           'full_profile' => ''
       ]);
    }

    public function update(Request $request, ServiceProviderRegistrationRepositoryInterface $repository)
    {
        $ten_year_validator = Carbon::now()->subYears(10);
        $request->validate([
            'middle_name' =>  ['string', 'max:255'],
            'last_name' =>  ['required', 'string', 'max:255'],
            'mobile_number' =>  ['required', 'string', 'max:255'],
            'first_name' =>  ['required', 'string', 'max:255'],
            'email' =>  ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'username' =>  ['required', 'string', 'max:255'],
            'title' =>  ['required', 'string', 'max:255'],
            'alternative_mobile_number' =>  ['required', 'string', 'max:255'],
            'address' =>  ['required', 'string', 'max:255'],
            'physical_address' =>  ['required', 'string', 'max:255'],
            'gender' =>  ['required', 'string', Rule::in(['F', 'M'])],
            'provider_sub_level_id' => ['numeric', new ProviderSubLevelFieldValidator],
            'dob' => ['required', 'date_format:Y-m-d', 'before:{$ten_year_validator}'],
            'bio' => ['string'],
        ]);

        $data = $request->toArray();
        $data+=['user_id' => auth()->user()->id];

        $repository->createProviderProfile($data);

        return redirect()->back();

    }

}
