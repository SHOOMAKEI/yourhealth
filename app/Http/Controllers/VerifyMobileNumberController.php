<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\Verified;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VerifyMobileNumberController extends Controller
{
    public function show()
    {
        return Inertia::render('Auth/VerifyMobileNumber');
    }

    public function verify(Request $request)
    {
        $request->validate([
            'verification_code' => ['required', 'numeric']
        ]);

        if ($request->user()->hasVerifiedMobileNumber()) {
            return redirect()->intended(route('login'));
        }

        if ($request->user()->getMobileNumberVerificationCode() != $request['verification_code']) {
            return redirect()->back()->with(['status'=> 'wrong-verification-code']);
        }

        if ($request->user()->markMobileNumberAsVerified()) {
            event(new Verified($request->user()));
        }


        return redirect()->intended(route('login'));
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
