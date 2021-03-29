<?php

namespace App\Http\Controllers\Authentication;

use App\Contracts\Repositories\Auth\AuthenticationRepositoryInterface;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthenticationController extends Controller
{
    public function login(Request $request, AuthenticationRepositoryInterface $repository): object
    {
        $request->validate([
            'email' => ['required', 'email', 'exists:users,email', 'max:100'],
            'password' => ['required', 'string', 'max:100']
        ],[
            'exists' => 'Incorrect credential provided'
        ]);

        $data = $request->toArray();

        $data+=['username' => $request['email']];
        $data+=['type' => SESSION_REQUEST];

        return $repository->login($data);
    }

    public function resendOtpCode(Request $request)
    {
        //
    }

    public function logout(Request $request)
    {
        //
    }

    public function verifyOtpCode(Request $request)
    {
        //
    }

    public function hasValid2FACode(Request $request)
    {
        //
    }

    public function valid2FARecoveryCode(Request $request)
    {
        //
    }


    public function verify2FACode(Request $request)
    {
       //
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
