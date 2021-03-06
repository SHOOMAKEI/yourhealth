<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     *
     * @param  \Laravel\Fortify\Http\Requests\VerifyEmailRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function __invoke(User $id, Request $request)
    {
        if ($id->hasVerifiedEmail()) {
            return redirect(route('login'));
        }

        if ($id->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return redirect(route('login'));
    }
}
