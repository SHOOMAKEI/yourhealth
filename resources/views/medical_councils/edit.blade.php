use App\Models\MedicalInstitute;
@extends('layouts.master')

@section('header')
{{__('medical_councils.create.header')}}
@endsection

@section('contents')
<div class="col-lg-12">
    <div class="card">
        <div class="card-body">

        <h4 class="header-title">{{__('medical_councils.create.form_header')}}</h4>
            <p class="text-muted font-14">
                
            </p>
        <form action="{{route('medical_councils.update',['medical_council' => $medical_council->id])}}" method="POST">
            @csrf
            @method('PUT')
                <div class="form-group mb-3">
                    <label for="name">{{__('medical_councils.create.name')}}</label>
                <input type="text" id="name" name="name" value="{{$medical_council->name}}" class="form-control @error('name') is-invalid @enderror" placeholder="{{__('medical_councils.create.name')}}" required>
                    <div class="invalid-tooltip"> </div>
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group mb-3">
                    <label for="country">{{__('medical_councils.create.country')}}</label>
                    <select class="custom-select mb-3" name="country_id" required>
                        <option  disabled>{{__('medical_councils.create.country')}}</option>
                        @foreach ($countries as $country)
                        <option value="{{$country->id}}" @if($country->id == $medical_council->country_id) selected @endif>{{$country->name}}</option>
                        @endforeach
                    </select> 
                    @error('institute')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror  
                </div>

                <button type="submit" class="btn btn-primary">{{__('medical_councils.create.save')}}</button>
            </form>                                           
              
        </div> <!-- end card-body -->
    </div> <!-- end card -->
</div>
@endsection