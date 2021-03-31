<?php

namespace App\Http\Controllers\ServiceProviderProfileCompletion;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\ProviderProfile;
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
           'provider_sub_levels' =>  ProviderSubLevel::all()
       ]) ;
    }

}
