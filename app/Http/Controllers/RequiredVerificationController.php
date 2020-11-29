<?php

namespace App\Http\Controllers;

use App\Models\RequiredVerification;
use Illuminate\Http\Request;

class RequiredVerificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('profile_validations.index', ['profile_validations' => RequiredVerification::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('profile_validations.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validateRequest($request);

        RequiredVerification::create([
            'name' => $request['name'],
            'category' => $request['category'],
        ]);

        return redirect()->route('profile_validations.index')->with(['status' => 'success','message' => 'Required Verification changes save successfull']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RequiredVerification  $profile_validation
     * @return \Illuminate\Http\Response
     */
    public function show(RequiredVerification $profile_validation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RequiredVerification  $profile_validation
     * @return \Illuminate\Http\Response
     */
    public function edit(RequiredVerification $profile_validation)
    {
        return view('profile_validations.edit', ['profile_validation' => $profile_validation]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\RequiredVerification  $profile_validation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RequiredVerification $profile_validation)
    {
        $this->validateRequest($request);

        $profile_validation->update([
            'name' => $request['name'],
            'category' => $request['category'],
        ]);

        return redirect()->route('profile_validations.index')->with(['status' => 'success','message' => 'Required Verification changes save successfull']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RequiredVerification  $profile_validation
     * @return \Illuminate\Http\Response
     */
    public function destroy(RequiredVerification $profile_validation)
    {
        //
    }

    private function validateRequest(Request $request)
    {
        return $request->validate([
            'name' => ['required'],
            'category' => ['required']
        ]);
    }
}
