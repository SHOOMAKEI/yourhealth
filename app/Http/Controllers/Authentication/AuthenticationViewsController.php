<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticationViewsController extends Controller
{
    public function show2FAForm()
    {
//        return Inertia::render('')
    }

    public function showOTPForm()
    {
        //
    }

    public function showForgetPasswordForm(): Response
    {
        return Inertia::render('Auth/ForgotPassword');
    }

    public function showResetPasswordForm()
    {
        //
    }

    public function showMobileNumberVerificationForm()
    {
        //
    }

    public function showEmailVerificationPage()
    {

    }
}
