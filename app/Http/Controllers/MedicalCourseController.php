<?php

namespace App\Http\Controllers;

use App\Models\MedicalCourse;
use App\Models\MedicalInstitute;
use Illuminate\Http\Request;

class MedicalCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('medical_courses.index', ['medical_courses' => MedicalCourse::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('medical_courses.create', ['institutes' => MedicalInstitute::all()]);
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

        MedicalCourse::create([
            'name' => $request['name'],
            'award_code' => $request['award_code'],
            'medical_institute_id' => $request['medical_institute_id']
        ]);

        return  redirect()->route('medical_courses.index')->with(['status' => 'success','message' => 'Medical Course Saved Successful!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MedicalCourse  $medicalCourse
     * @return \Illuminate\Http\Response
     */
    public function show(MedicalCourse $medicalCourse)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MedicalCourse  $medicalCourse
     * @return \Illuminate\Http\Response
     */
    public function edit(MedicalCourse $medical_course)
    {
        return  view('medical_courses.edit', ['medical_course'=> $medical_course, 'institutes' => MedicalInstitute::all()]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MedicalCourse  $medicalCourse
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MedicalCourse $medical_course)
    {
        $this->validateRequest($request);

        $medical_course->update([
            'name' => $request['name'],
            'award_code' => $request['award_code'],
            'medical_institute_id' => $request['medical_institute_id']
        ]);

        return  redirect()->route('medical_courses.index')->with(['status' => 'success','message' => 'Medical Course Saved Successful!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MedicalCourse  $medicalCourse
     * @return \Illuminate\Http\Response
     */
    public function destroy(MedicalCourse $medicalCourse)
    {
        //
    }

    private function validateRequest(Request $request)
    {
        return  $request->validate([
            'name' => ['required'],
            'award_code' => ['required'],
            'medical_institute_id' => ['required' , 'exists:medical_institutes,id']
        ]);
    }
}
