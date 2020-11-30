<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\ProviderProfile;
use App\Http\Controllers\Controller;
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
        return view('admin.provider_profile.index', ['profiles'=> ProviderProfile::where('is_submitted',1)->get()]);
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

    public function verify(ProviderProfile $provider)
    {
        $user = User::find($provider->user_id);

        $provider->forceFill([
            'is_verified' => 1,
        ])->save();

        $user->forceFill([
            'profile_stage' => 11,
        ])->save();

        $user->assignRole('verified_sp');

        return redirect()->back()->with(['success' =>'Information Save Successful']);
    }

    public function unverify(ProviderProfile $provider){
        $user = User::find($provider->user_id);

        $provider->forceFill([
            'is_verified' => 0,
        ])->save();

        $user->forceFill([
            'profile_stage' => 0,
        ])->save();

        $user->removeRole('verified_sp');

        return redirect()->back()->with(['success' =>'Information Save Successful']);
    }
}
