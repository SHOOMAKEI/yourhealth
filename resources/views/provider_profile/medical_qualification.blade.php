@extends('layouts.master')

@section('contents')
    <div class="container mt-4">
        <div class="row">
            <div class="card col-12">
                <div class="card-header">
                    <h5 class="text-uppercase p-2">
                        Medical Qualifications
                    </h5>
                </div>
                <div class="card-body">
                    <div class="col-md-12">
                        <form action="{{route('provider_profiles.store')}}" method="POST">
                            @csrf
                            <input name="profile_category" value="education-qualification" hidden>
                            <div class="row">
                                <input type="text" name="profile_category" value="education-qualification" hidden/>
                                <div class="form-group mb-2 col-md-6">
                                    <label for="medical_courses">Medical Course</label>
                                    <select class="custom-select mb-3 @if($errors->has('medical_course_id')) is-invalid @endif" name="medical_course_id" required>
                                        <option selected disabled>Medical Course</option>
                                        @foreach ($medical_courses as $medical_course)
                                        <option value="{{$medical_course->id}}" >{{$medical_course->name}}</option>
                                        @endforeach
                                    </select>
                                    @if($errors->has('medical_course_id'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('medical_course_id')}}
                                        </div>
                                    @endif 
                                </div>
                                <div class="form-group mb-2 col-md-6">
                                    <label for="location">Medical Institute</label>
                                    <select class="custom-select mb-3 @if($errors->has('medical_institute_id')) is-invalid @endif" name="medical_institute_id" required>
                                        <option selected disabled>Medical Institute</option>
                                        @foreach ($medical_institutes as $medical_institute)
                                        <option value="{{$medical_institute->id}}" >{{$medical_institute->name}}</option>
                                        @endforeach
                                    </select> 
                                    @if($errors->has('medical_institute_id'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('medical_institute_id')}}
                                        </div>
                                    @endif 
                                </div>
                            </div> <!-- end row -->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="year_of_complition">Year of Complition</label>
                                        <input type="text" class="form-control @if($errors->has('year_of_complition')) is-invalid @endif" id="year_of_complition" name="year_of_complition" placeholder="Year Of Complition">
                                    </div>
                                    @if($errors->has('year_of_complition'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('year_of_complition')}}
                                        </div>
                                    @endif 
                                </div>
                            
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="year_of_experience">Year of Experience</label>
                                        <input type="text" class="form-control @if($errors->has('year_of_experience')) is-invalid @endif" id="year_of_experience" name="year_of_experience" placeholder="Year of Experience">
                                    </div>
                                    @if($errors->has('year_of_experience'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('year_of_experience')}}
                                        </div>
                                    @endif 
                                </div>
                            </div> <!-- end row -->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="registration_number">Registration Number</label>
                                        <input type="text" class="form-control @if($errors->has('registration_number')) is-invalid @endif" name="registration_number" id="registration_number" placeholder="Registration Number">
                                    </div>
                                    @if($errors->has('registration_number'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('registration_number')}}
                                        </div>
                                    @endif 
                                </div>
                                <div class="form-group mb-2 col-md-6">
                                    <label for="location">Medical Registration Council</label>
                                    <select class="custom-select mb-3 @if($errors->has('medical_registration_id')) is-invalid @endif" name="medical_registration_id" required>
                                        <option selected disabled>Medical Registration Council</option>
                                        @foreach ($medical_councils as $medical_council)
                                        <option value="{{$medical_council->id}}" >{{$medical_council->name}}</option>
                                        @endforeach
                                    </select> 
                                    @if($errors->has('medical_registration_id'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('medical_registration_id')}}
                                        </div>
                                    @endif 
                                </div>
                            </div> 
                            <div class="text-right">
                                <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div> 
@endsection

