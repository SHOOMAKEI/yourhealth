<?php

namespace App\Http\Controllers\ServiceProviderProfileCompletion;

use App\Contracts\Repositories\Registration\ServiceProviderRegistrationRepositoryInterface;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\EducationQualification;
use App\Models\ProviderCompany;
use App\Models\ProviderFacility;
use App\Models\ProviderProfile;
use App\Models\ProviderQualification;
use App\Models\ProviderSubLevel;
use App\Models\User;
use App\Rules\ProviderSubLevelFieldValidator;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Sabberworm\CSS\Rule\Rule;

class PersonalInfoController extends Controller
{
    public function index()
    {

       return Inertia::render('ServiceProviderProfileCompletion/Register',[
           'user' => collect(new UserResource(User::find(auth()->user()->id)))->toArray(),
           'provider_sub_levels' =>  ProviderSubLevel::all(),
           'qualifications' => ProviderQualification::where('provider_profile_id',
                                auth()->user()->service_provider->id )->get(),
//           'company' => ProviderCompany::where('provider_profile_id',
//                                auth()->user()->service_provider->id )->first(),
//           'facilities' => ProviderFacility::where('provider_profile_id',
//                                auth()->user()->service_provider->id )->get()
       ]);
    }

    public function update(Request $request, ServiceProviderRegistrationRepositoryInterface $repository)
    {
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
            'dob' => ['required', ''],
            'bio' => ['string'],

        ]);

    }

}
