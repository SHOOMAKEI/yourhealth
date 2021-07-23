<?php

namespace App\Http\Controllers\Authentication;

use App\Contracts\Repositories\Auth\AuthenticationRepositoryInterface;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AuthenticationController extends Controller
{
    public function login(Request $request, AuthenticationRepositoryInterface $repository): object
    {
        $request->validate([
            'email' => ['required', 'email', 'exists:users,email', 'max:100'],
            'password' => ['required', 'string', 'max:100']
        ], [
            'exists' => 'Incorrect credential provided'
        ]);

        $data = $request->toArray();

        $data+=['username' => $request['email']];
        $data+=['type' => SESSION_REQUEST];

        return $repository->login($data);
    }

    public function VerifyEmailView(Request $request)
    {
        return $request->user()->hasVerifiedEmail()
            ? redirect()->intended(config('fortify.home'))
            : Inertia::render('Auth/VerifyEmail');
    }

    public function VerifyEmail(User $id, Request $request)
    {
        if ($id->hasVerifiedEmail()) {
            return redirect(route('login'));
        }

        if ($id->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return redirect(route('login'));
    }

    public function resetPassword(Request $request, $token)
    {
        return Inertia::render('Auth/ResetPassword', ['token' => $token, 'email' => $request->get('email')]);
    }

    public function otpView()
    {
        return Inertia::render('Auth/OneTimePassword', ['email' => Session::get('email')]);
    }


    public function logout(Request $request, AuthenticationRepositoryInterface $repository)
    {
        $data = $request->toArray();
        $data+=['type' => SESSION_REQUEST];

        return $repository->logout($data);
    }

    public function verifyOtpCode(Request $request, AuthenticationRepositoryInterface $repository)
    {
        if ($request['email'] != null) {
            Session::keep(['email' => $request['email']]);
        }

        $request->validate([
            'otp_code' => ['required', 'numeric'],
            'email' => ['required','email', 'exists:users,email', 'string']
        ]);
        $data = $request->toArray();
        $data+=['type' => SESSION_REQUEST];

        return  $repository->verifyOtpCode($data);
    }

    public function resendOtpCode(Request $request, AuthenticationRepositoryInterface $repository)
    {
        if ($request['email'] != null) {
            Session::keep(['email' => $request['email']]);
        }

        $request->validate([
            'email' => ['required','email', 'exists:users,email', 'string']
        ]);

        $data = $request->toArray();
        $data+=['type' => SESSION_REQUEST];

        return $repository->resendOtpCode($data);
    }

    public function TwoFactoryAuthView()
    {
        return Inertia::render('Auth/TwoFactoryAuthentication', ['email' => Session::get('email')]);
    }


    public function verify2FACode(Request $request, AuthenticationRepositoryInterface $repository)
    {
        if ($request['email'] != null) {
            Session::keep(['email' => $request['email']]);
        }

        $request->validate([
            'email' => ['required', 'email', 'exists:users,email']
        ]);

        if ($request['two_factory_code']!= '') {
            $request->validate([
                'two_factory_code' => ['required', 'numeric']
            ]);

            $request['recovery_code'] = null;
        }

        if ($request['recovery_code']!= '') {
            $request->validate([
                'recovery_code' => ['required', 'string']
            ]);

            $request['two_factory_code'] = null;
        }

        $data = $request->toArray();
        $data+=['type' => SESSION_REQUEST];
        $data+=['code' => $request['two_factory_code']];

        return $repository->verify2FACode($data);
    }

    public function resendMobileNumberVerificationCode(Request $request)
    {
        //
    }

    public function VerifyMobileVerificationCode(Request $request)
    {
        //
    }

    public function resendEmailVerification(Request $request)
    {
        //
    }

    public function checkEmailVerification(Request $request)
    {
        //
    }
}
