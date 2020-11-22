@extends('layouts.master')

@section('contents')
    <div class="container mt-4">
        <div class="row">
            <div class="card col-12">
                <div class="card-body">
                    <div class="col-md-5">
                        <form action="{{route('provider_profiles.store')}}" method="POST" class="needs-validation" novalidate>
                            @csrf
                            <div class="form-group mb-3">
                                <label for="username">Who should we call you?</label>
                                @if(auth()->user()->provider_profile->exists())
                                    <input type="text" class="form-control" id="username" name="username"  placeholder="Username" value="{{auth()->user()->provider_profile->username}}" required>
                                @else
                                    <input type="text" class="form-control" id="username" name="username"  placeholder="Username" value="" required>
                                @endif
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="gender">Gender</label>
                                <select class="custom-select" id="gender" name="gender" required>
                                    <option value="M" selected>Male</option>
                                    <option value="F">Female</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="country_id">Country</label>
                                <select class="custom-select" name="country_id" required>
                                    @foreach ($countries as $country)
                                    <option value="{{$country->id}}" >{{$country->name}}</option>
                                    @endforeach
                                </select> 
                                @error('country_id')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror  
                            </div>
                            <div class="form-group mb-3">
                                <label for="city_id">City</label>
                                <select class="custom-select" name="city_id" required>
                                    @foreach ($cities as $city)
                                    <option value="{{$city->id}}" >{{$city->name}}</option>
                                    @endforeach
                                </select> 
                                @error('city_id')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror  
                            </div>
                            <div class="form-group mb-3">
                                <label for="category">Who are you</label>
                                <select class="custom-select" id="category" name="category" required>
                                    <option value="owner" selected>Establishment Owner</option>
                                    <option value="only">Doctor Only</option>
                                    <option value="both">Both Doctor and Establishment Owner</option>
                                </select>
                            </div>
                            <button class="btn btn-primary" type="submit">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div> 
@endsection