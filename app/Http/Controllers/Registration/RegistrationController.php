<?php

namespace App\Http\Controllers\Registration;

use App\Contracts\Repositories\Registration\RegistrationRepositoryInterface;
use App\Http\Controllers\Controller;
use App\Repositories\Registration\ServiceProviderRegistrationRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class RegistrationController extends Controller
{
    public function createUserAccount(Request $request, RegistrationRepositoryInterface $repository)
    {
        $request->validate([

        ]);
        $repository->createUserAccount((new ServiceProviderRegistrationRepository()), $request->toArray());

        return Redirect::route('login')->with('success', 'Branch created successful.');
    }


}
