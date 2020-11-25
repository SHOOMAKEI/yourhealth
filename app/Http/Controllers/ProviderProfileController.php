<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\User;
use App\Models\Country;
use Illuminate\Http\Request;
use App\Models\MedicalCourse;
use App\Models\Specialization;
use App\Models\ConsultationFee;
use App\Models\ProviderProfile;
use Illuminate\Validation\Rule;
use App\Models\MedicalInstitute;
use App\Models\MedicalProcedure;
use App\Models\ProviderVerification;
use App\Models\RequiredVerification;
use Illuminate\Support\Facades\Auth;
use App\Models\ProviderEstablishment;
use App\Models\EducationQualification;
use App\Models\MedicalRegistrationCouncil;

class ProviderProfileController extends Controller
{
    public function index()
    {
        $profile = ProviderProfile::where('user_id',Auth::user()->id)->first();

        return view('provider_profile.index', [
            'countries' =>Country::all(), 
            'cities' => City::all(),
            'medical_councils' => MedicalRegistrationCouncil::all(),
            'medical_courses' => MedicalCourse::all(),
            'medical_institutes' => MedicalInstitute::all(),
            'specializations' => Specialization::all(),
            'procedures' => MedicalProcedure::all(),
            'required_verifications' => RequiredVerification::all(),
            'profile'=> ProviderProfile::where('user_id',Auth::user()->id)->first(),
            'education_qualifications' => empty($profile)?'':EducationQualification::where('provider_profile_id',$profile->id)->get(),
            ]);
    }

    public function profileInfo()
    {
        return view('provider_profile.profile_info', [
            'countries' =>Country::all(), 
            'cities' => City::all(),
            'profile'=> ProviderProfile::where('user_id',Auth::user()->id)->first()
        ]);
    }

    public function establishments()
    {
        $profile  = ProviderProfile::where('user_id',Auth::user()->id)->first();
        return view('provider_profile.establishments', [
        'countries' =>Country::all(), 
        'cities' => City::all(),
        'establishment'=> $profile->establishments->isNotEmpty()?
        $profile->establishments[0]:null
        ]);
    }

    public function specializations()
    {
        $profile  = ProviderProfile::where('user_id',Auth::user()->id)->first();

        return view('provider_profile.specializations', [
            'specializations' => Specialization::all(),
            'procedures' => MedicalProcedure::all(),
            'profile_specializations'=> $profile->medical_specializations->isNotEmpty()?
            $profile->medical_specializations:null,
            'profile_procedures'=> $profile->medical_procedures->isNotEmpty()?
            $profile->medical_procedures:null,
            'consultation'=> !empty($profile->consultation_fee)?
            $profile->consultation_fee:null
        ]);
    }

    public function verifications()
    {
        $profile = ProviderProfile::where('user_id',Auth::user()->id)->first();
        return view('provider_profile.verifications', [
            'required_verifications' => RequiredVerification::all(),
            'submitted_verifications' =>  $profile->verifications->isNotEmpty()?
            $profile->verifications:null
            ]);
    }

    public function medicalQualification()
    {
        $profile = ProviderProfile::where('user_id',Auth::user()->id)->first();
        return view('provider_profile.medical_qualification', [
            'medical_councils' => MedicalRegistrationCouncil::all(),
            'medical_courses' => MedicalCourse::all(),
            'medical_institutes' => MedicalInstitute::all(),
            'qualification'=> $profile->education_qualifications->isNotEmpty()? 
            $profile->education_qualifications[0]: null,
            'registration'=> $profile->medical_registrations->isNotEmpty()? 
            $profile->medical_registrations[0]: null
        ]);
    }

    public function submittion()
    {
        return view('provider_profile.submittion', [
            'profile'=> ProviderProfile::where('user_id',Auth::user()->id)->first()
        ]);
    }

    public function submitted()
    {
        $user = User::find(auth()->user()->id);
        $profile = ProviderProfile::where('user_id',$user->id)->first();

        $user->forceFill([
            'profile_stage' => 10,
        ])->save();

        $profile->forceFill([
            'is_submitted' => 1,
        ])->save();
        
        return redirect()->back()->with(['success' => 
        'Your Profile has been sent for further informations we will contact your after verification']);
    }



    public function store(Request $request)
    {
        $request->validate([
            'profile_category' => ['required', Rule::in(
                ['profile', 
                'education-qualification', 
                'establishment', 
                'verification', 
                'specializations',
                ])]
        ]);

        switch ($request['profile_category']) {
            case 'profile':
                return $this->storeProviderProfile($request);
            case 'education-qualification':
                return $this->storeProviderProfileEducationQualification($request);
            case 'establishment':
                return $this->storeProviderProfileEstablishment($request);
            case 'verification':
                return $this->storeProviderProfileVerification($request);
            default:
                return $this->storeProviderProfileSpecializations($request);
        }
    }


    public function storeProviderProfile(Request $request)
    {
        $request->validate([
            'username' => ['required', 'string'],
            'gender' => ['required', Rule::in('F', 'M','O')],
            'country_id' => ['required', 'exists:countries,id'],
            'city_id' =>['required', 'exists:cities,id'],
            'category' => ['required', Rule::in('both', 'owner','only')]
        ]);

        ProviderProfile::updateOrCreate([
            'user_id' => Auth::user()->id],
            ['username' => $request['username'],
            'gender' => $request['gender'],
            'country_id' => $request['country_id'],
            'city_id' => $request['city_id'],
            
        ]);

        if($request['category'] =='both') {
            
            User::find(Auth::user()->id)->assignRole('doctor', 'owner');

            return redirect()->route('medical_qualification.index')->with(['success' =>'Information Save Successful']);
        }

        if($request['category'] =='only') {
            
            User::find(Auth::user()->id)->assignRole('doctor');
            User::find(Auth::user()->id)->removeRole('owner');
            return redirect()->route('medical_qualification.index')->with(['success' =>'Information Save Successful']);
        }

        User::find(Auth::user()->id)->removeRole('doctor');
        User::find(Auth::user()->id)->assignRole($request['category']);

        return redirect()->route('establishments.index')->with(['success' =>'Information Save Successful']);
    }

    public function storeProviderProfileEducationQualification(Request $request)
    {
        $request->validate([
            'year_of_complition' => ['required'],
            'year_of_experience' => ['required', 'numeric'],
            'medical_course_id' => ['required', 'exists:medical_courses,id'],
            'medical_institute_id' => ['required', 'exists:medical_institutes,id'],
            'medical_registration_id' => ['required', 'exists:medical_registration_councils,id'],
            'registration_number' => ['required', 'string'],

        ]);
        
        $provider_profile = ProviderProfile::where('user_id',Auth::user()->id)->first();
        $provider_profile->medical_registrations()->sync([$request['medical_registration_id'] => ['registration_number'=> $request['registration_number']]]);
        EducationQualification::updateOrCreate([
            'medical_course_id' => $request['medical_course_id'],
            'medical_institute_id' => $request['medical_institute_id'],
            'provider_profile_id' => $provider_profile->id
        ],
           ['year_of_complition' => $request['year_of_complition'],
            'year_of_experience' => $request['year_of_experience'],
            
        ]);

        if(User::find(Auth::user()->id)->hasRole('owner')) {

            return redirect()->route('establishments.index')->with(['success' =>'Information Save Successful']);
        }
        
        return redirect()->route('provider_specializations.index')->with(['success' =>'Information Save Successful']);
    }

    public function storeProviderProfileEstablishment(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'mobile_number' => ['required'],
            'category' => ['required'],
            'email' =>['required', 'email'],
            'address' =>['required', 'string'],
            'country_id' => ['required', 'exists:countries,id'],
            'city_id' =>['required', 'exists:cities,id'],
        ]);

        $establishment = ProviderEstablishment::UpdateOrcreate([
            'name' => $request['name'],
            'mobile_number' => $request['mobile_number'],
            'email' => $request['email']],
            ['country_id' => $request['country_id'],
            'city_id' => $request['city_id'],
            'category' => $request['category'],
            'address' => $request['address'],
            'map_location' => is_null($request['map_location'])?'--':$request['map_location'] ,
        ]);

        $establishment->provider_profiles()->sync(ProviderProfile::where('user_id',Auth::user()->id)->first()->id);

        return redirect()->route('provider_specializations.index')->with(['success' =>'Information Save Successful']);
    }

    public function storeProviderProfileVerification(Request $request)
    {
        $request->validate([
            'file.*.verification_id' => ['required', 'exists:required_verifications,id'],
            'file.*.file' => ['required', 'mimes:pdf,png,jpg,jepg']
        ]);
        
        $provider_profile = ProviderProfile::where('user_id',Auth::user()->id)->first();

        foreach($request['file'] as $file){
            $provider_profile->addMedia($file['file'])->toMediaCollection('provider_verificaiton_files');

            ProviderVerification::updateOrCreate([
                'required_verification_id' => $file['verification_id'],
                'provider_id' => $provider_profile->id],
                ['is_submitted' => 1
            ]);
    
        }
       
        return redirect()->route('submittion.index')->with(['success' =>'Information Save Successful']);
    }

    public function storeProviderProfileSpecializations(Request $request)
    {
        // dd($request);
        $request->validate([
            'specialization.*.id' => ['required', 'exists:specializations,id'],
            'procedure.*.id' => ['required', 'exists:medical_procedures,id'],
            'procedure.*.price' => ['required', 'numeric'],
            'procedure.*.currency' => ['required', Rule::in(array_column(getCurrency(), 'value'))],
            'consaltation_price' => ['required', 'numeric'],
            'consaltation_currency' => ['required', Rule::in(array_column(getCurrency(), 'value'))]
        ]);

        $provider_profile = ProviderProfile::where('user_id', Auth::user()->id)->first();
        
        $consaltation = ConsultationFee::UpdateOrCreate([
            'provider_id' => $provider_profile->id],
           ['price' => $request['consaltation_price'],
            'currency' => $request['consaltation_currency'],
        ]);

        foreach($request['procedure'] as $procedure)
        {
            $data[$procedure['id']]['price'] = $procedure['price'];
            $data[$procedure['id']]['currency'] = $procedure['currency'];
        }
        
        $provider_profile->medical_specializations()->sync(array_column($request['specialization'],'id'));
        $provider_profile->medical_procedures()->sync($data);

        return redirect()->route('verifications.index')->with(['success' =>'Information Save Successful']);
    }

}
