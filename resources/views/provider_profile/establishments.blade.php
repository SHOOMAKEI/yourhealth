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
                                    <input type="text" class="form-control @if($errors->has('name')) is-invalid @endif" name="name" id="establishment-name" value="{{!empty($establishment->name)? $establishment->name: ''}}" placeholder="Establishment Name" required>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div class="invalid-feedback">
                                        Please provide fill this value
                                    </div>
                                    @if($errors->has('name'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('name')}}
                                        </div>
                                    @endif 
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="mobile-number">Mobile Number</label>
                                    <input type="text" class="form-control @if($errors->has('mobile_number')) is-invalid @endif" value="{{!empty($establishment->mobile_number)? $establishment->mobile_number: ''}}" name="mobile_number" id="mobile-number" data-toggle="input-mask"
                                    data-mask-format="+255000000000" placeholder="+255XXXXXXXXX" required>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div class="invalid-feedback">
                                        Please provide fill this value
                                    </div>
                                    @if($errors->has('mobile_number'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('mobile_number')}}
                                        </div>
                                    @endif 
                                </div>
                            </div>
                        </div> <!-- end row -->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control @if($errors->has('email')) is-invalid @endif" name="email" value="{{!empty($establishment->email)? $establishment->email: ''}}" id="email" placeholder="Email" required>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div class="invalid-feedback">
                                        Please provide fill this value
                                    </div>
                                    @if($errors->has('email'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('email')}}
                                        </div>
                                    @endif 
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="address">Postal Andress</label>
                                    <input type="text" class="form-control @if($errors->has('address')) is-invalid @endif" name="address" value="{{!empty($establishment->address)? $establishment->address: ''}}" id="address" placeholder="P.O.Box XXX" required>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div class="invalid-feedback">
                                        Please provide fill this value
                                    </div>
                                    @if($errors->has('address'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('address')}}
                                        </div>
                                    @endif 
                                </div>
                            </div>
                        </div> <!-- end row -->
                
                        <div class="row">
                            <div class="form-group mb-2 col-md-6">
                                <label for="location">Country</label>
                                <select class="custom-select mb-3 @if($errors->has('country_id')) is-invalid @endif" name="country_id" required>
                                    <option disabled>Country</option>
                                    @foreach ($countries as $country)
                                    <option value="{{$country->id}}" {{!empty($establishment->country_id) && ($establishment->country_id == $country->id)? 'selected': ''}} >{{$country->name}}</option>
                                    @endforeach
                                </select> 
                                @if($errors->has('country_id'))
                                    <div class="invalid-feedback" style="display: block">
                                        {{$errors->first('country_id')}}
                                    </div>
                                @endif 
                            </div>
                            <div class="form-group mb-2 col-md-6">
                                <label for="city">City</label>
                                <select class="custom-select mb-3 @if($errors->has('city_id')) is-invalid @endif" name="city_id" required>
                                    <option disabled>City</option>
                                    @foreach ($cities as $city)
                                    <option value="{{$city->id}}" {{!empty($establishment->city_id) && ($establishment->city_id == $city->id)? 'selected': ''}}>{{$city->name}}</option>
                                    @endforeach
                                </select> 
                                @if($errors->has('city_id'))
                                    <div class="invalid-feedback" style="display: block">
                                        {{$errors->first('city_id')}}
                                    </div>
                                @endif   
                            </div>
                        </div> <!-- end row -->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="category">Category</label>
                                    <select class="custom-select mb-3 @if($errors->has('category')) is-invalid @endif" name="category" required>
                                        <option  disabled>Category</option>
                                        @foreach (getEstablishmentCategories() as $category)
                                        <option value="{{$category['value']}}" {{!empty($establishment->category) && ($establishment->category == $category['value'])? 'selected': ''}}>{{$category['option']}}</option>
                                        @endforeach
                                    </select> 
                                    @if($errors->has('category'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('category')}}
                                        </div>
                                    @endif 
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