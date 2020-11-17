@extends('layouts.master')

@section('header')
{{__('medical_courses.create.header')}}
@endsection

@section('contents')
<div class="col-lg-12">
    <div class="card">
        <div class="card-body">

        <h4 class="header-title">{{__('medical_courses.create.form_header')}}</h4>
            <p class="text-muted font-14">
                
            </p>
        <form action="{{route('medical_courses.store')}}" method="POST">
            @csrf
                <div class="form-group mb-3">
                    <label for="name">{{__('medical_courses.create.name')}}</label>
                    <input type="text" id="name" name="name" class="form-control @error('name') is-invalid @enderror" placeholder="{{__('medical_courses.create.name')}}" required>
                    <div class="invalid-tooltip"> </div>
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group mb-3">
                    <label for="award_code">{{__('medical_courses.create.award_code')}}</label>
                <input type="text" id="award_code" name="award_code"  class="form-control @error('award_code') is-invalid @enderror" placeholder="{{__('medical_courses.create.award_code')}}" required>
                    <div class="invalid-tooltip"> </div>
                    @error('award_code')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group mb-3">
                    <label for="medical_institute_id">{{__('medical_courses.create.institute')}}</label>
                    <select class="custom-select mb-3" name="medical_institute_id" required>
                        <option  disabled>{{__('medical_courses.create.institute')}}</option>
                        @foreach ($institutes as $institute)
                        <option value="{{$institute->id}}" >{{$institute->name}}</option>
                        @endforeach
                    </select> 
                    @error('institute')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror  
                </div>
                <button type="submit" class="btn btn-primary">{{__('medical_courses.create.save')}}</button>
            </form>                                           
              
        </div> <!-- end card-body -->
    </div> <!-- end card -->
</div>
@endsection