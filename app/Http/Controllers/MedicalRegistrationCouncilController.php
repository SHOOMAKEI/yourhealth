<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use App\Models\MedicalRegistrationCouncil;

class MedicalRegistrationCouncilController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('medical_councils.index', ['medical_councils' => MedicalRegistrationCouncil::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('medical_councils.create', ['countries' => Country::all()]);
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

        MedicalRegistrationCouncil::create([
            'name' => $request['name'],
            'country_id' => $request['country_id']
        ]);

        return redirect()->route('medical_councils.index')->with(['success' => 'Medical Cuoncil Changes save successful']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MedicalRegistrationCouncil  $medicalRegistrationCouncil
     * @return \Illuminate\Http\Response
     */
    public function show(MedicalRegistrationCouncil $medicalRegistrationCouncil)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MedicalRegistrationCouncil  $medicalRegistrationCouncil
     * @return \Illuminate\Http\Response
     */
    public function edit(MedicalRegistrationCouncil $medical_council)
    {
        return view('medical_councils.edit',['medical_council' => $medical_council, 'countries' => Country::all()]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MedicalRegistrationCouncil  $medicalRegistrationCouncil
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MedicalRegistrationCouncil $medical_council)
    {
        $this->validateRequest($request);

        $medical_council->update([
            'name' => $request['name'],
            'country_id' => $request['country_id']
        ]);

        return redirect()->route('medical_councils.index')->with(['success' => 'Medical Cuoncil Changes save successful']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MedicalRegistrationCouncil  $medicalRegistrationCouncil
     * @return \Illuminate\Http\Response
     */
    public function destroy(MedicalRegistrationCouncil $medicalRegistrationCouncil)
    {
        //
    }

    private function validateRequest(Request $request)
    {
        return $request->validate([
            'name' => ['required'],
            'country_id' => ['required', 'exists:countries,id']
        ]);
    }
}
