<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
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
        ($request->user()->profile_stage != 10)&& !$request->user()->hasRole('super-admin')) {
            return $request->expectsJson()
                ? abort(403, 'Your Profile is not complete.')
                : Redirect::route('profile_info.index');
        }

        if (! $request->user() ||
        ($request->user()->profile_stage == 10)&& !$request->user()->hasRole('super-admin')) {
            return $request->expectsJson()
                ? abort(403, 'Please wait for verifications')
                : Redirect::route('submittion.index');
        }

       

        return $next($request);
    }
}
