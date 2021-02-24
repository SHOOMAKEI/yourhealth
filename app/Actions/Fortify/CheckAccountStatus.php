<?php

namespace App\Actions\Fortify;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckAccountStatus
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $next)
    {
        $validated = Auth::validate($credentials = [
            'email' => $request->email,
            'password' => $request->password,
            'is_active' => 1
        ]);

        if (!$validated) {
            return redirect()->back()->with(['status'=> 'Your Account is disabled Contact Support team for more informaiton']);
        }

        return $next;
    }
}
