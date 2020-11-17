@extends('layouts.master')

@section('header')
{{__('medical_institutes.create.header')}}
@endsection

@section('contents')
<div class="col-lg-12">
    <div class="card">
        <div class="card-body">

        <h4 class="header-title">{{__('medical_institutes.create.form_header')}}</h4>
            <p class="text-muted font-14">
                
            </p>
        <form action="{{route('medical_institutes.store')}}" method="POST">
            @csrf
                <div class="form-group mb-3">
                    <label for="name">{{__('medical_institutes.create.name')}}</label>
                    <input type="text" id="name" name="name" class="form-control @error('name') is-invalid @enderror" placeholder="{{__('medical_institutes.create.name')}}" required>
                    <div class="invalid-tooltip"> </div>
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group mb-3">
                    <label for="address">{{__('medical_institutes.create.address')}}</label>
                <input type="text" id="address" name="address"  class="form-control @error('address') is-invalid @enderror" placeholder="{{__('medical_institutes.create.address')}}" required>
                    <div class="invalid-tooltip"> </div>
                    @error('address')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group mb-3">
                    <label for="location">{{__('medical_institutes.create.location')}}</label>
                    <select class="custom-select mb-3" name="location" required>
                        <option selected disabled>{{__('medical_institutes.create.location')}}</option>
                        @foreach ($countries as $country)
                        <option value="{{$country->name}}" >{{$country->name}}</option>
                        @endforeach
                    </select> 
                    @error('location')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror  
                </div>
                <button type="submit" class="btn btn-primary">{{__('medical_institutes.create.save')}}</button>
            </form>                                           
              
        </div> <!-- end card-body -->
    </div> <!-- end card -->
</div>
@endsection