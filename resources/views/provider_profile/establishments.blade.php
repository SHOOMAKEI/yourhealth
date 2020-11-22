@extends('layouts.master')

@section('contents')

<div class="container mt-4">
    <div class="row">
        <div class="card col-12">
            <div class="card-header">
                <h5 class="text-uppercase p-2">
                    Establishment Information
                </h5>
            </div>
            <div class="card-body">
                <form action="{{route('provider_profiles.store')}}" method="POST" class="needs-validation" novalidate>
                    @csrf
                    <input type="text" name="profile_category" value="establishment" hidden />
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="establishment-name">Establishment Name</label>
                                    <input type="text" class="form-control" name="name" id="establishment-name" placeholder="Establishment Name" required>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div class="invalid-feedback">
                                        Please provide fill this value
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="mobile-number">Mobile Number</label>
                                    <input type="text" class="form-control" name="mobile_number" id="mobile-number" data-toggle="input-mask"
                                    data-mask-format="+255000000000" placeholder="+255XXXXXXXXX" required>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div class="invalid-feedback">
                                        Please provide fill this value
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end row -->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Email" required>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div class="invalid-feedback">
                                        Please provide fill this value
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="address">Postal Andress</label>
                                    <input type="text" class="form-control" name="address" id="address" placeholder="P.O.Box XXX" required>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div class="invalid-feedback">
                                        Please provide fill this value
                                    </div>
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
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group mb-3">
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
    

@endsection