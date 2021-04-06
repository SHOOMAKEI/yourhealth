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
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PersonalInfoController extends Controller
{
    public function index()
    {
        $provider_profile = ProviderProfile::find(auth()->user()->service_provider->id);
        $provider_facilities = null;
        if(!empty($provider_profile->provider_companies[0]->id)){
            $provider_facilities = ProviderFacility::where('provider_company_id',
                $provider_profile->provider_companies[0]->id)->get();
        }

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
           $data['authorized_service'] = $query->service->name;
           $data['expired_at'] = $query->expired_at;
           $data['attachment'] = $query->attachment;
           $data['year'] = $query->year;
           return $data;
       });

        $facility = ProviderFacility::where('provider_company_id', $provider_profile->provider_companies[0]->id)
            ->get()->map(function ($query){
                $data['id'] = $query->id;
                $data['data'] = $query->services->map(function ($service){
                    $pivot['id'] = $service->id;
                    $pivot['name'] = $service->name;
                    $pivot['pivot']['price'] = $service->pivot->price;
                    $pivot['pivot']['compare_price'] = $service->pivot->compare_price;
                    $pivot['pivot']['currency'] = $service->pivot->currency;
                    return $pivot;
                })->toArray();

                return $data;
            })->toArray();



       return Inertia::render('ServiceProviderProfileCompletion/Register',[
           'user' => collect(new UserResource(User::find(auth()->user()->id)))->toArray(),
           'provider_sub_levels' =>  ProviderSubLevel::all()->toArray(),
           'qualifications' => $qualification,
           'company' =>   is_null($provider_profile->provider_companies)?null: $provider_profile->provider_companies[0]->toArray(),
           'facilities' => $provider_facilities ,
           'medical_registrations' => $medical_reg,
           'all_services' => Service::all()->toArray(),
           'provider_services' => $provider_profile->services,
           'facility_services' => !empty($facility)?$facility: '',
           'full_profile' => ''
       ]);
    }

    public function getIndvidualProviderProfileStatus(ProviderProfile $profile)
    {

        return [
            'profile-info' =>[
                'last_updated_at' =>'',
                'is_complete' => '',
                'info-category' => '',
                'remark' => ''
            ],
            'education-qualification' =>[
                'last_updated_at' =>'',
                'is_complete' => '',
                'info-category' => '',
                'remark' => ''
            ],
            'practice-license' =>[
                'last_updated_at' =>'',
                'is_complete' => '',
                'info-category' => '',
                'remark' => ''
            ],
            'services' =>[
                'last_updated_at' =>'',
                'is_complete' => '',
                'info-category' => '',
                'remark' => ''
            ],

        ];
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
            'title' =>  ['required', 'string', 'max:255' , Rule::in(['Mr','Mrs','Dr', 'Nurse','Prof'])],
            'alternative_mobile_number' =>  ['required', 'string', 'max:255'],
            'address' =>  ['required', 'string', 'max:255'],
            'physical_address' =>  ['required', 'string', 'max:255'],
            'gender' =>  ['required', 'string', Rule::in(['F', 'M'])],
            'provider_sub_level_id' => [ 'required','numeric', 'exists:provider_sub_levels,id'],
            'dob' => ['required', 'date_format:Y-m-d', 'before:{$ten_year_validator}'],
            'bio' => ['string'],
        ]);

        $data = $request->toArray();
        $data+=['user_id' => auth()->user()->id];
        $data+=['account_category_type' => auth()->user()->service_provider->account_category_type];
        $repository->createProviderProfile($data);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);

    }

    public function uploadProfilePhoto(Request $request)
    {
        $request->validate([
            'profile_photo' => ['required', 'string', 'base64image']
        ]);
        $provider_profile = ProviderProfile::find(auth()->user()->service_provider->id);
        $user = User::find(auth()->user()->id);

        $explode = explode(',', $request['profile_photo']);
        $format = str_replace(
            [
                'data:image/',
                ';',
                'base64',
            ],
            [
                '', '', '',
            ],
            $explode[0]
        );
        if(($provider_profile->account_category_type == 'facility') ||
            ($provider_profile->account_category_type == 'company')) {

            $provider_profile->company()->clearMediaCollection('company-profile-photo');
            $provider_profile->company()->addMediaFromBase64($request['profile_photo'], 'image/'.$format)
                ->usingFileName(str_replace(
                    ' ',
                    '-',
                    rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . strtolower($provider_profile->company->name)  . '-photo'  . '.'.$format
                ))
                ->toMediaCollection('company-profile-photo');

            return redirect()->back()->with(['status' => 'Operation Complete successful']);
        }



        $user->clearMediaCollection('profile-photo');
        $user->addMediaFromBase64($request['profile_photo'], 'image/'.$format)
            ->usingFileName(str_replace(' ', '-', rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . strtolower($user->name) . '-photo'  . '.'.$format))
            ->toMediaCollection('profile-photo');

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

}
