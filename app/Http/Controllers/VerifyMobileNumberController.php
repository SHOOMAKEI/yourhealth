<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Auth\Events\Verified;

class VerifyMobileNumberController extends Controller
{
    public function show()
    {
        return view('auth.verify-mobile-number');
    }

    public function verify(Request $request)
    {
        $request->validate([
            'verification_code' => ['required', 'numeric']
        ]);

        if ($request->user()->hasVerifiedMobileNumber()) {
            return redirect()->intended(config('fortify.home').'?verified=1');
        }

        if ($request->user()->getMobileNumberVerificationCode() != $request['verification_code']) {

            return redirect()->back()->with(['status'=> 'wrong-verification-code']);
        }
        
        if ($request->user()->markMobileNumberAsVerified()) {

            event(new Verified($request->user()));
        }
        

        return redirect()->intended(config('fortify.home').'?verified=1');
    }

    public function resend(Request $request)
    {
        if ($request->user()->hasVerifiedMobileNumber()) {
            return $request->wantsJson()
                        ? new JsonResponse('', 204)
                        : redirect()->intended(config('fortify.home'));
        }

        $request->user()->sendMobileNumberVerificationNotification();

        return $request->wantsJson()
                    ? new JsonResponse('', 202)
                    : back()->with('status', 'verification-code-sent');
    }
    
}
