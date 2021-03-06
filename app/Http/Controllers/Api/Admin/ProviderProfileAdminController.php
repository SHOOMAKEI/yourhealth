<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProviderProfile;
use App\Models\ProviderRejectionReason;
use App\Models\User;
use App\Notifications\ServiceProviderDisqualificationNotification;
use App\Notifications\ServiceProviderVerificationNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProviderProfileAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProviderProfile::where('is_submitted', 1)->where('is_verified', 0)->orderBy('submitted_at', 'DESC')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function verify($rootValue, array $args)
    {
        $provider = ProviderProfile::find($args['id']);
        $user = User::find($provider->user_id);
        $admin = User::find(auth()->user()->id);

        if ($provider->is_verified == 1) {
            return $provider;
        }

        $provider->forceFill([
            'is_verified' => 1,
        ])->save();

        $user->forceFill([
            'profile_stage' => 11,
        ])->save();

        $user->assignRole('verified-service-provider');
        $user->removeRole('unverified-service-provider');

        $user->notify(new ServiceProviderVerificationNotification());

        return $provider;
    }

    public function unverify($rootValue, array $args)
    {
        $provider = ProviderProfile::find($args['input']['id']);
        $user = User::find($provider->user_id);

        $provider_last_rejection = ProviderRejectionReason::where('provider_profile_id', $provider->id)->orderBy('created_at', 'DESC')->first();

        if ($provider->is_verified == 0) {
            return $provider;
        }

        $provider->forceFill([
            'is_verified' => 0,
            'submitted_at' => null
        ])->save();

        $user->forceFill([
            'profile_stage' => 0,
        ])->save();

        $user->removeRole('verified-service-provider');
        $user->assignRole('unverified-service-provider');

        if (!isset($provider_last_rejection->rejection_round)) {
            $reasons = ProviderRejectionReason::create([
                'provider_profile_id'=> $provider->id,
                'reasons' => $args['input']['reasons'],
                'rejected_round' => 1
            ]);

            return $provider;
        }

        $reasons = ProviderRejectionReason::create([
            'provider_profile_id'=> $provider->id,
            'reasons' => $args['input']['reasons'],
            'rejected_round' => $provider_last_rejection->rejection_round+1
        ]);

        $user->notify(new ServiceProviderDisqualificationNotification($reasons));

        return $provider;
    }
}
