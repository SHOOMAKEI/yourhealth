<?php

namespace App\Http\Controllers\ServiceProviderProfileCompletion;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\EducationQualification;
use App\Models\ProviderCompany;
use App\Models\ProviderFacility;
use App\Models\ProviderProfile;
use App\Models\ProviderQualification;
use App\Models\ProviderSubLevel;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PersonalInfoController extends Controller
{
    public function index()
    {
       return Inertia::render('ServiceProviderProfileCompletion/Register',[
           'user' => collect(new UserResource(User::find(auth()->user()->id)))->toArray(),
           'provider_sub_levels' =>  ProviderSubLevel::all(),
           'qualifications' => ProviderQualification::where('provider_profile_id',
                                auth()->user()->service_provider->id )->get(),
           'company' => ProviderCompany::where('provider_profile_id',
                                auth()->user()->service_provider->id )->first(),
           'company' => ProviderFacility::where('provider_profile_id',
                                auth()->user()->service_provider->id )->get()
       ]) ;
    }

}
