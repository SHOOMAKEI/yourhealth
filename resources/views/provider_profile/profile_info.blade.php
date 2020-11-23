@extends('layouts.master')

@section('contents')
    <div class="container mt-4">
        <div class="row">
            <div class="card col-12">
                <div class="card-header">
                    <h5 class="text-uppercase p-2">
                        Profile information
                    </h5>
                </div>
                <div class="card-body">
                    <div class="col-md-5">
                        <form action="{{route('provider_profiles.store')}}" method="POST" class="needs-validation" novalidate>
                            @csrf
                            <input name="profile_category" value="profile" hidden>
                            <div class="form-group mb-3">
                                <label for="username">Who should we call you?</label>
                                    
                                    <input type="text" class="form-control @if($errors->has('username')) is-invalid @endif" id="username" name="username"  placeholder="Username" value="{{empty($profile->username)?'': $profile->username}}" required>
                                    @if($errors->has('username'))
                                    <div class="invalid-feedback" style="display: block">
                                        {{$errors->first('username')}}
                                    </div>
                                    @endif
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                                <div class="invalid-feedback">
                                    Please provide fill this value
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="gender">Gender</label>
                                <select class="custom-select @if($errors->has('gender')) is-invalid @endif " id="gender" name="gender" required>
                                    <option value="M" 
                                    @if (!empty($profile->gender)&& ($profile->gender== 'M'))
                                        selected
                                    @endif
                                    >Male</option>
                                    <option value="F"
                                    @if (!empty($profile->gender)&& ($profile->gender== 'owner'))
                                        selected
                                    @endif
                                    >Female</option>
                                </select>
                            </div>
                            @if($errors->has('gender'))
                            <div class="invalid-feedback" style="display: block">
                                {{$errors->first('gender')}}
                            </div>
                            @endif
                            <div class="form-group mb-3">
                                <label for="country_id">Country</label>
                                <select class="custom-select @if($errors->has('country_id')) is-invalid @endif" name="country_id" required>
                                    @foreach ($countries as $country)
                                    <option value="{{$country->id}}"  
                                        @if (!empty($profile->country_id)&& ($profile->country_id)== $country->id)
                                            selected
                                        @endif
                                    >{{$country->name}}</option>
                                    @endforeach
                                </select> 
                                @if($errors->has('country_id'))
                                <div class="invalid-feedback" style="display: block">
                                    {{$errors->first('country_id')}}
                                </div>
                                @endif
                            </div>
                            <div class="form-group mb-3">
                                <label for="city_id">City</label>
                                <select class="custom-select @if($errors->has('city_id')) is-invalid @endif" name="city_id" required>
                                    @foreach ($cities as $city)
                                    <option value="{{$city->id}}" 
                                        @if (!empty($profile->city_id)&& ($profile->city_id)== $city->id)
                                            selected
                                        @endif
                                    >{{$city->name}}</option>
                                    @endforeach
                                </select> 
                                @if($errors->has('city_id'))
                                    <div class="invalid-feedback" style="display: block">
                                        {{$errors->first('city_id')}}
                                    </div>
                                @endif
                            </div>
                            <div class="form-group mb-3">
                                <label for="category">Who are you</label>
                                <select class="custom-select @if($errors->has('category')) is-invalid @endif" id="category" name="category" required>
                                    <option value="owner" 
                                        @role('owner')
                                            selected
                                        @endrole
                                    >Establishment Owner</option>
                                    <option value="only"
                                        @role('doctor')
                                            selected
                                        @endrole
                                    >Doctor Only</option>
                                    <option value="both"
                                        @hasallrole('doctor|owner')
                                            selected
                                        @endhasallrole
                                    >Both Doctor and Establishment Owner</option>
                                </select>
                            </div>
                            @if($errors->has('category'))
                                <div class="invalid-feedback" style="display: block">
                                    {{$errors->first('category')}}
                                </div>
                            @endif
                            <div class="text-right">
                                <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div> 
@endsection