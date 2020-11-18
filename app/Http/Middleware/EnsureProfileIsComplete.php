<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use App\Contracts\MustCompleteProfile;
use Illuminate\Support\Facades\Redirect;

class EnsureProfileIsComplete
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $redirectToRoute=null)
    {
        if (! $request->user() ||
        ($request->user() instanceof MustCompleteProfile &&
        ! $request->user()->hasVerifiedMobileNumber())) {
        return $request->expectsJson()
                ? abort(403, 'Your mobile number is not verified.')
                : Redirect::guest(URL::route($redirectToRoute ?: 'verify.mobile-number'));
        }
        return $next($request);
    }
}
