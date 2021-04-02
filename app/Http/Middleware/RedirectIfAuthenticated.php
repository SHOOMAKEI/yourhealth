<?php

namespace App\Http\Middleware;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  ...$guards
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$guards)
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                $user = User::find(auth()->user()->id);
                if ($user->hasRole('service-provider') && $user->hasRole('verified-service-provider')){
                    return redirect()->route('verified_sp.home');
                }
                if ($user->hasRole('service-provider') && $user->hasRole('unverified-service-provider')){
                    return redirect()->route('personalInfo.index');
                }
                if ($user->hasRole('super-admin')){
                    return redirect()->route('admin.dashboard');
                }
                return redirect(RouteServiceProvider::HOME);
            }
        }

        return $next($request);
    }
}
