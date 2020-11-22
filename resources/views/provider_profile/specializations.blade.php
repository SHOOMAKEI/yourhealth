@extends('layouts.master')

@section('contents')
<form action="{{route('provider_profiles.store')}}" method="POST">
    @csrf
    <h5 class="mb-3 text-uppercase bg-light p-2"><i class="mdi mdi-earth mr-1"></i> Medical Specialization</h5>
    <div class="row">
        <input type="text" name="profile_category" value="specializations" hidden/>
        <div class="form-group mb-2 col-md-6">
            <label for="specializations">Medical Specializations</label>
            <select class="custom-select mb-3" name="specialization_id" required>
                <option selected disabled>Medical Specializations</option>
                @foreach ($specializations as $specialization)
                <option value="{{$specialization->id}}" >{{$specialization->name}}</option>
                @endforeach
            </select> 
            @error('medical_registration_id')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror  
        </div>
    </div> <!-- end row -->
    <div class="row">
        <div class="form-group mb-2 col-md-6">
            <label for="location">Medical Procedures</label>
            <select class="custom-select mb-3" name="procedure_id" required>
                <option selected disabled>Medical Procedures</option>
                @foreach ($procedures as $procedure)
                <option value="{{$procedure->id}}" >{{$procedure->name}}</option>
                @endforeach
            </select> 
            @error('procedure_id')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror  
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" class="form-control" name="price" id="price" placeholder="Price">
            </div>
        </div>
    </div> <!-- end row -->
    <div class="row">
        <div class="form-group mb-2 col-md-6">
            <label for="location">Currency</label>
            <select class="custom-select mb-3" name="currency" required>
                <option selected disabled>Currency</option>
                @foreach (getCurrency() as $currency)
                <option value="{{$currency['value']}}" >{{$currency['option']}}</option>
                @endforeach
            </select> 
            @error('procedure_id')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror  
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label for="price">Price</label>
            <input type="text" class="form-control" id="price" placeholder="Price">
        </div>
    </div>
    <div class="form-group mb-2 col-md-6">
        <label for="location">Currency</label>
        <select class="custom-select mb-3" name="currency" required>
            <option selected disabled>Currency</option>
            @foreach (getCurrency() as $currency)
            <option value="{{$currency['value']}}" >{{$currency['option']}}</option>
            @endforeach
        </select> 
        @error('procedure_id')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror  
    </div>
    <div class="text-right">
        <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
    </div>
</form>
@endsection