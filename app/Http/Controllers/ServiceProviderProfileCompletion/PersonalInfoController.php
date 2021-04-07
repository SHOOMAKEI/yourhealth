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

//        dd($this->getIndvidualProviderProfileStatus($provider_profile));
//        dd($facility);

       return Inertia::render('ServiceProviderProfileCompletion/Register',[
           'user' => collect(new UserResource(User::find(auth()->user()->id)))->toArray(),
           'provider_sub_levels' =>  ProviderSubLevel::all()->toArray(),
           'qualifications' => $qualification,
           'company' =>   is_null($provider_profile->provider_companies)?null: $provider_profile->provider_companies[0]->toArray(),
           'facilities' => $provider_facilities ,
           'medical_registrations' => $medical_reg,
           'all_services' => Service::all()->toArray(),
           'provider_services' => $provider_profile->services,
           'facility_services' => !empty($facility)?$facility: null,
           'full_profile' => $this->getIndvidualProviderProfileStatus($provider_profile)
       ]);
    }

    public function getIndvidualProviderProfileStatus(ProviderProfile $profile)
    {
        $data = [];
        $profile_is_complete =  $profile->email &&
                                $profile->mobile_number &&
                                $profile->first_name &&
                                $profile->last_name &&
                                is_numeric($profile->provider_sub_level_id);

        $company_profile_is_complete =  $profile->provider_companies[0]->email &&
                                        $profile->provider_companies[0]->mobile_number &&
                                        $profile->provider_companies[0]->name &&
                                        $profile->provider_companies[0]->address &&
                                        $profile->provider_companies[0]->vrn &&
                                        $profile->provider_companies[0]->tin ;


            $facilities = ProviderFacility::where('provider_company_id',$profile->provider_companies[0]->id)->get();
        $facility_profile_is_complete = $facilities->map(function($query, $index){
                                        $facility[$index] =     $query->email &&
                                                                $query->mobile_number &&
                                                                $query->name &&
                                                                $query->address &&
                                                                $query->vrn &&
                                                                $query->tin ;

                                        return $facility[$index];

                                        });


        $facility_services =  $facilities->each(function($query, $index){
            $facility[$index] =   isset($query->services[0]); });


        $data += [
            'profile_info' =>[
            'last_updated_at' => $profile->updated_at->diffForHumans(),
            'is_complete' => $profile_is_complete,
            'info_category' => 'Profile Information',
            'remark' => $profile_is_complete?
                'Minimum required profile information are available!':
                'Please Submit your profile for verification'
        ],
        'profile_submission' =>[
            'last_updated_at' => !is_null($profile->submitted_at)?Carbon::parse($profile->submitted_at)->diffForHumans(): 'Not Submitted',
            'is_complete' => $profile->is_submitted,
            'info_category' => 'Profile Submission',
            'remark' => $profile->is_submitted?
                'Your Profile is already submitted Please wait while we are verifying your profile. we will notify you via email when its ready!':
                'Please provider minimum required profile information'
        ]
        ];
        if($profile->account_category_type == SERVICE_PROVIDER_INDIVIDUAL_ACCOUNT) {
            $data+= [
                'education_qualification' =>[
                'last_updated_at' =>$profile->provider_qualifications->last()->updated_at->diffForHumans(),
                'is_complete' => isset($profile->education_qualifications[0]),
                'info_category' => 'Education Qualifications',
                'remark' => isset($profile->education_qualifications[0])?
                    'Minimum required Education Qualifications information are available!':
                    'Please provider minimum required Education Qualifications information'
            ],
            'practice_license' =>[
                'last_updated_at' =>$profile->provider_medical_registrations->last()->updated_at->diffForHumans(),
                'is_complete' => isset($profile->provider_medical_registrations[0]),
                'info_category' => 'Practice License',
                'remark' => isset($profile->provider_medical_registrations[0])?
                    'Minimum required Practice License information are available!':
                    'Please provider minimum required Practice License information'
            ],
            'services' =>[
                'last_updated_at' => $profile->services->last()->updated_at->diffForHumans(),
                'is_complete' => isset($profile->services[0]),
                'info_category' => 'Provider Services',
                'remark' => isset($profile->services[0])?
                    'Minimum required Provider Services information are available!':
                    'Please provider minimum required Provider Services information'
            ]
            ];
        }

        if($profile->account_category_type == SERVICE_PROVIDER_COMPANY_ACCOUNT) {
            $data += [
                'company_profile_info' =>[
                'last_updated_at' => $profile->provider_companies->first()->updated_at->diffForHumans(),
                'is_complete' => $company_profile_is_complete,
                'info_category' => 'Company Profile Information',
                'remark' => $company_profile_is_complete?
                    'Minimum required Company Profile Information are available!':
                    'Please provider minimum required Company Profile Information'
            ]];

            $data += [
            'facility_profile_info' =>[
                'last_updated_at' => !empty($facilities->last())? $facilities->last()->updated_at->diffForHumans():null,
                'is_complete' => !in_array(false,$facility_profile_is_complete->toArray()),
                'info_category' => 'Facility Profile Information',
                'remark' => !in_array(false,$facility_profile_is_complete->toArray())?
                    'Minimum required Facility Profile Information are available!':
                    'Please provider minimum required Facility Profile Information'
            ],
            'services' =>[
                'last_updated_at' => !empty($facilities->last()->services->last())?
                                        $facilities->last()->services->last()->updated_at->diffForHumans():null,
                'is_complete' => isset($facility_services),
                'info_category' => 'Facility Services',
                'remark' => isset($facility_services)?
                    'Minimum required Provider Services information are available!':
                    'Please provider minimum required Provider Services information'
            ]
            ];

        }

        if($profile->account_category_type == SERVICE_PROVIDER_FACILITY_ACCOUNT) {

            $data += [
            'facility_profile_info' =>[
                'last_updated_at' => $facilities->last()->updated_at->diffForHumans(),
                'is_complete' => !in_array(false,$facility_profile_is_complete->toArray()),
                'info-category' => 'Facility Profile Information',
                'remark' => !in_array(false,$facility_profile_is_complete->toArray())?
                    'Minimum required Facility Profile Information are available!':
                    'Please provider minimum required Facility Profile Information'
            ],
            'services' =>[
                'last_updated_at' => $facilities->last()->services->last()->updated_at->diffForHumans(),
                'is_complete' => isset($facility_services),
                'info_category' => 'Facility Services',
                'remark' => isset($facility_services)?
                    'Minimum required Provider Services information are available!':
                    'Please provider minimum required Provider Services information'
            ]
            ];

        }
        return $data;
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

            $provider_profile->provider_companies[0]->clearMediaCollection('company-profile-photo');
            $provider_profile->provider_companies[0]->addMediaFromBase64($request['profile_photo'], 'image/'.$format)
                ->usingFileName(str_replace(
                    ' ',
                    '-',
                    rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . strtolower($provider_profile->provider_companies[0]->name)  . '-photo'  . '.'.$format
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


    public function profileSubmission(ServiceProviderRegistrationRepositoryInterface $repository)
    {
        $repository->submitProfileForVerification();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

}
