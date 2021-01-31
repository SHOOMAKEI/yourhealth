<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use App\Models\MedicalInstitute;

class MedicalInstituteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('medical_institutes.index', ['medical_institutes' => MedicalInstitute::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('medical_institutes.create', ['countries' => Country::all()]);
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

        MedicalInstitute::create([
            'name' => $request['name'],
            'address' => $request['address'],
            'location' => $request['location']
        ]);

        return redirect()->route('medical_institutes.index')->with(['status' => 'success','message' => 'Medical Institute Save Successful!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MedicalInstitute  $medicalInstitute
     * @return \Illuminate\Http\Response
     */
    public function show(MedicalInstitute $medicalInstitute)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MedicalInstitute  $medicalInstitute
     * @return \Illuminate\Http\Response
     */
    public function edit(MedicalInstitute $medical_institute)
    {
        return view('medical_institutes.edit', ['medical_institute' => $medical_institute, 'countries' => Country::all()]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MedicalInstitute  $medicalInstitute
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MedicalInstitute $medical_institute)
    {
        $this->validateRequest($request);

        $medical_institute->update([
            'name' => $request['name'],
            'address' => $request['address'],
            'location' => $request['location']
        ]);

        return redirect()->route('medical_institutes.index')->with(['status' => 'success','message' => 'Medical Institute Save Successful!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MedicalInstitute  $medicalInstitute
     * @return \Illuminate\Http\Response
     */
    public function destroy(MedicalInstitute $medicalInstitute)
    {
        //
    }

    private function validateRequest(Request $request)
    {
        return $request->validate([
            'name' => ['required'],
            'address' => ['required'],
            'location' => ['required']
        ]);
    }
}
