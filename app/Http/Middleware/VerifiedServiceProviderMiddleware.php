<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class VerifiedServiceProviderMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (!$request->user()->hasRole('verified_sp') && !$request->user()->hasRole('super-admin')) {
            return $request->expectsJson()
                    ? abort(200, 'Your Profile is verified')
                    : Redirect::route('profile_info.index');
        }

        return $next($request);
    }
}
