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
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function profileInfo()
    {
        return view('provider_profile.profile_info', [
            'countries' =>Country::all(), 
            'cities' => City::all()
        ]);
    }

     /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function establishments()
    {
        return view('provider_profile.establishments', [
        'countries' =>Country::all(), 
        'cities' => City::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function specializations()
    {
        return view('provider_profile.specializations', [
            'specializations' => Specialization::all(),
            'procedures' => MedicalProcedure::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function verifications()
    {
        return view('provider_profile.verifications', ['required_verifications' => RequiredVerification::all()]);
    }

     /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function medicalQualification()
    {
        return view('provider_profile.medical_qualification', [
            'medical_councils' => MedicalRegistrationCouncil::all(),
            'medical_courses' => MedicalCourse::all(),
            'medical_institutes' => MedicalInstitute::all(),
        ]);
    }

       /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function submittion()
    {
        return view('provider_profile.submittion', [
            'profile'=> ProviderProfile::where('user_id',Auth::user()->id)->first()
        ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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
        
        if($request['profile_category']=='profile') {

            $this->storeProviderProfile($request);
        }

        if($request['profile_category']=='education-qualification') {

            $this->storeProviderProfileEducationQualification($request);
        }


        if($request['profile_category']=='establishment') {

            $this->storeProviderProfileEstablishment($request);
        }

        if($request['profile_category']=='verification') {

            $this->storeProviderProfileVerification($request);
        }

        if($request['profile_category']=='specializations') {

            $this->storeProviderProfileSpecializations($request);
        }
        

    }


    public function submited()
    {
        // return view('')
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
        // dd($request);
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
        
        return redirect()->route('specializations.index')->with(['success' =>'Information Save Successful']);
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

        $establishment = ProviderEstablishment::create([
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

        return redirect()->back()->with(['success' =>'Information Save Successful']);
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
        $request->validate([
            'specialization_id' => ['required', 'exists:specializations,id'],
            'procedure_id' => ['required', 'exists:medical_procedures,id'],
            'price' => ['required', 'numeric'],
            'currency' => ['required'],
            'consaltation_price' => ['required', 'numeric'],
            'consaltation_currency' => ['required']
        ]);

        $provider_profile = ProviderProfile::where('user_id', Auth::user()->id)->first();
        
        $consaltation = ConsultationFee::UpdateOrCreate([
            'provider_id' => $provider_profile->id],
           ['price' => $request['consaltation_price'],
            'currency' => $request['consaltation_currency'],
        ]);

        $provider_profile->medical_specializations()->sync($request['specialization_id']);
        $provider_profile->medical_procedures()->sync($request['procedure_id'], ['price'=> $request['price'], 'currency'=> $request['currency']]);

        return redirect()->ourte('verifications.index')->with(['success' =>'Information Save Successful']);
    }

}
