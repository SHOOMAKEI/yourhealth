@extends('layouts.master')

@section('contents')
<form action="{{route('provider_profiles.store')}}" method="POST">
    @csrf
    <input type="text" name="profile_category" value="establishment" hidden />
        <h5 class="mb-4 text-uppercase bg-light p-2"><i class="mdi mdi-account-circle mr-1"></i> Establishment Information</h5>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="firstname">Establishment Name</label>
                    <input type="text" class="form-control" name="name" id="firstname" placeholder="User Name">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="firstname">Mobile Number</label>
                    <input type="text" class="form-control" name="mobile_number" id="firstname" placeholder="User Name">
                </div>
            </div>
        </div> <!-- end row -->
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="firstname">Email</label>
                    <input type="email" class="form-control" name="email" id="firstname" placeholder="User Name">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="firstname">Andress</label>
                    <input type="text" class="form-control" name="address" id="firstname" placeholder="User Name">
                </div>
            </div>
        </div> <!-- end row -->

        <div class="row">
            <div class="form-group mb-2 col-md-6">
                <label for="location">Country</label>
                <select class="custom-select mb-3" name="country_id" required>
                    <option selected disabled>Country</option>
                    @foreach ($countries as $country)
                    <option value="{{$country->id}}" >{{$country->name}}</option>
                    @endforeach
                </select> 
                @error('location')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror  
            </div>
            <div class="form-group mb-2 col-md-6">
                <label for="city">City</label>
                <select class="custom-select mb-3" name="city_id" required>
                    <option selected disabled>City</option>
                    @foreach ($cities as $city)
                    <option value="{{$city->id}}" >{{$city->name}}</option>
                    @endforeach
                </select> 
                @error('city')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror  
            </div>
        </div> <!-- end row -->
        <div class="form-group mb-2 col-md-6">
            <label for="category">Category</label>
            <select class="custom-select mb-3" name="category" required>
                <option selected disabled>Category</option>
                @foreach (getEstablishmentCategories() as $category)
                <option value="{{$category['value']}}" >{{$category['option']}}</option>
                @endforeach
            </select> 
            @error('category')
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