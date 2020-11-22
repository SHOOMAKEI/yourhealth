@extends('layouts.master')

@section('contents')
<form action="{{route('provider_profiles.store')}}" method="POST">
    @csrf
    <input type="text" name="profile_category" value="profile" hidden />
        <h5 class="mb-4 text-uppercase"><i class="mdi mdi-account-circle mr-1"></i> Personal Info</h5>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="firstname">Who Should We Call you ?</label>
                <input type="text" class="form-control" id="firstname" name="username"  placeholder="User Name">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="lastname">Gender</label>
                    <div class="mt-2">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadio3" name="gender" value="M" class="custom-control-input">
                            <label class="custom-control-label" for="customRadio3">Male</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadio4" name="gender" value="F" class="custom-control-input">
                            <label class="custom-control-label" for="customRadio4">Female</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadio4" name="gender" value="O" class="custom-control-input">
                            <label class="custom-control-label" for="customRadio4">Other</label>
                        </div>
                    </div>
                </div>
            </div> <!-- end col -->
        </div> <!-- end row -->

        <div class="row">
            <div class="form-group mb-2 col-md-6">
                <label for="country_id">Country</label>
                <select class="custom-select mb-3" name="country_id" required>
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
            <div class="form-group mb-2 col-md-6">
                <label for="city_id">City</label>
                <select class="custom-select mb-3" name="city_id" required>
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
        </div> <!-- end row -->
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="lastname">Who Are You</label>
                    <div class="mt-2">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadio34" name="category" value="owner" class="custom-control-input">
                            <label class="custom-control-label" for="customRadio34">Establishment Owner</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadio43" name="category" value="only" class="custom-control-input">
                            <label class="custom-control-label" for="customRadio43">Doctor Only</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadio43" name="category" value="both" class="custom-control-input">
                            <label class="custom-control-label" for="customRadio43">Both Doctor and Establishment Owner</label>
                        </div>
                    </div>
                </div>
            </div> <!-- end col -->
        </div> <!-- end row -->
        <div class="text-right">
            <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
        </div>
    </form>
@endsection