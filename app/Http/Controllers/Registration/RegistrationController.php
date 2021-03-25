<?php

namespace App\Http\Controllers\Registration;

use App\Contracts\Repositories\Registration\RegistrationRepositoryInterface;
use App\Http\Controllers\Controller;
use App\Repositories\Registration\ServiceProviderRegistrationRepository;
use App\Rules\AccountCategory;
use App\Rules\AccountCategoryType;
use App\Rules\FacilityOwner;
use App\Rules\NameFieldValidator;
use App\Rules\OwnerInfoFieldValidator;
use App\Rules\ProviderSubLevelFieldValidator;
use App\Rules\TinFieldValidator;
use App\Rules\VrnFieldValidator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class RegistrationController extends Controller
{
    public function createUserAccount(Request $request, RegistrationRepositoryInterface $repository)
    {
        $request->validate([
            'middle_name' =>  ['string', 'max:255'],
            'last_name' =>  ['required', 'string', 'max:255'],
            'mobile_number' =>  ['required', 'string', 'max:255', 'unique:users,mobile_number'],
            'first_name' =>  ['required', 'string', 'max:255'],
            'email' =>  ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' =>  ['required', 'string', 'confirmed','regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/'],
            'password_confirmation' => ['string'],
            'account_category' =>  ['required', new AccountCategory],
            'account_category_type' =>  ['required', new AccountCategoryType],
            'name' => ['max:255', new NameFieldValidator],
            'vrn' => ['max:255',new VrnFieldValidator],
            'tin' => ['max:255',new TinFieldValidator],
            'provider_sub_level_id' => [ new ProviderSubLevelFieldValidator],
            'ownership_type' => ['max:255', new FacilityOwner],
            'owner_first_name' =>  [ 'max:255', new OwnerInfoFieldValidator],
            'owner_middle_name' =>  ['max:255', new OwnerInfoFieldValidator],
            'owner_last_name' =>  [ 'max:255', new OwnerInfoFieldValidator],
            'owner_mobile_number' =>  [ 'max:255', new OwnerInfoFieldValidator],
            'owner_email' =>  [ 'max:255', new OwnerInfoFieldValidator],
        ]);

        $repository->createUserAccount((new ServiceProviderRegistrationRepository()), $request->toArray());

        return Redirect::route('login')->with('success', 'Branch created successful.');
    }


}
