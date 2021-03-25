<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return  Inertia::render('Landing/Index');
    }

    public function register(): Response
    {
        return Inertia::render('Auth/Registration/Register');
    }

    public function registerIndividualServiceProvider(): Response
    {
        return Inertia::render('Auth/Registration/RegisterIndividualServiceProvider');
    }

    public function registerFacilityServiceProvider(): Response
    {
        return Inertia::render('Auth/Registration/RegisterFacilityServiceProvider');
    }

    public function registerCompanyServiceProvider(): Response
    {
        return Inertia::render('Auth/Registration/RegisterCompanyServiceProvider');
    }

    public function login(): Response
    {
        return Inertia::render('Auth/Login');
    }
}
