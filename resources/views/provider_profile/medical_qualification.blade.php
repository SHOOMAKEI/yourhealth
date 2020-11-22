@extends('layouts.master')

@section('contents')
<form action="{{route('provider_profiles.store')}}" method="POST">
    @csrf
    <h5 class="mb-3 text-uppercase bg-light p-2"><i class="mdi mdi-earth mr-1"></i> Medical Qualifications</h5>
    <div class="row">
        <input type="text" name="profile_category" value="education-qualification" hidden/>
        <div class="form-group mb-2 col-md-6">
            <label for="medical_courses">Medical Course</label>
            <select class="custom-select mb-3" name="medical_course_id" required>
                <option selected disabled>Medical Course</option>
                @foreach ($medical_courses as $medical_course)
                <option value="{{$medical_course->id}}" >{{$medical_course->name}}</option>
                @endforeach
            </select> 
            @error('medical_course_id')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror  
        </div>
        <div class="form-group mb-2 col-md-6">
            <label for="location">Medical Institute</label>
            <select class="custom-select mb-3" name="medical_institute_id" required>
                <option selected disabled>Medical Institute</option>
                @foreach ($medical_institutes as $medical_institute)
                <option value="{{$medical_institute->id}}" >{{$medical_institute->name}}</option>
                @endforeach
            </select> 
            @error('medical_institutes')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror  
        </div>
    </div> <!-- end row -->
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="year_of_complition">Year of Complition</label>
                <input type="text" class="form-control" id="year_of_complition" name="year_of_complition" placeholder="Year Of Complition">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="year_of_experience">Year of Experience</label>
                <input type="text" class="form-control" id="year_of_experience" name="year_of_experience" placeholder="Year of Experience">
            </div>
        </div>
    </div> <!-- end row -->
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="registration_number">Registration Number</label>
                <input type="text" class="form-control" name="registration_number" id="registration_number" placeholder="Registration Number">
            </div>
        </div>
        <div class="form-group mb-2 col-md-6">
            <label for="location">Medical Registration Council</label>
            <select class="custom-select mb-3" name="medical_registration_id" required>
                <option selected disabled>Medical Registration Council</option>
                @foreach ($medical_councils as $medical_council)
                <option value="{{$medical_council->id}}" >{{$medical_council->name}}</option>
                @endforeach
            </select> 
            @error('medical_registration_id')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror  
        </div>
    </div> 
    <div class="text-right">
        <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
    </div>
</form>
@endsection