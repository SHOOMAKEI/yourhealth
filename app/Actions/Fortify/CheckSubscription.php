<?php

namespace App\Actions\Fortify;

use Illuminate\Http\Request;

class CheckSubscription
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $next)
    {
        $user = Auth::getProvider()->retrieveByCredentials([
            'email' => $request->email,
            'password' => $request->password,
            'is_active' => 1
        ]);
        

        $plan = $user->subscribedPlans()[0];

        if (empty($plan)) {
            return  redirect()->url('/')->with(['status'=> 'Please Subscribe to one of our package that we offer']);
        }

        //    if (!$user->subscribedTo($plan->id)) {
        //     return  redirect()->url('/')->with(['status'=> 'Please Subscribe to one of our package that we offer']);
        //    }

        return $next;
    }
}
