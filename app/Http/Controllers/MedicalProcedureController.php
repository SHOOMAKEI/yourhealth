<?php

namespace App\Http\Controllers;

use App\Models\MedicalProcedure;
use Illuminate\Http\Request;

class MedicalProcedureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('procedures.index', ['procedures' => MedicalProcedure::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('procedures.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validateRequrest($request);

        MedicalProcedure::create([
            'name' => $request['name']
        ]);

        return redirect()->route('procedures.index')->with(['status' => 'success','message' => 'Medical Procedure changes Saved']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MedicalProcedure  $procedure
     * @return \Illuminate\Http\Response
     */
    public function show(MedicalProcedure $procedure)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MedicalProcedure  $procedure
     * @return \Illuminate\Http\Response
     */
    public function edit(MedicalProcedure $procedure)
    {
        return view('procedures.edit', ['procedure'=> $procedure]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MedicalProcedure  $procedure
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MedicalProcedure $procedure)
    {
        $this->validateRequrest($request);

        $procedure->update([
            'name' => $request['name']
        ]);

        return redirect()->route('procedures.index')->with(['status' => 'success','message' => 'Medical Procedure changes Saved']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MedicalProcedure  $procedure
     * @return \Illuminate\Http\Response
     */
    public function destroy(MedicalProcedure $procedure)
    {
        //
    }

    private function validateRequrest(Request $request)
    {
         return $request->validate([
            'name' => ['required']
         ]);
    }
}
