@extends('layouts.base')

@section('contents')
    <div class="account-pages mt-5 mb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="card">
                        <div class="card-body px-4 pt-3 pb-2">
                            <div class="text-center w-75 m-auto pb-2">
                                <h4 class="text-dark-50 text-center mt-0 font-weight-bold">Create Account</h4>
                            </div>
                            <form method="POST" action="{{route('register')}}" class="needs-validation" novalidate>
                                @csrf
                                <div class="form-group position-relative mb-3">
                                    <label for="fullname">{{__('auth.register.service_provider.full_name')}}</label>
                                    <input 
                                        type="text"
                                        class="form-control @error('name') is-invalid @enderror"
                                        id="fullname"
                                        name="name"
                                        required=""
                                        placeholder="{{__('auth.register.service_provider.full_name')}}">
                                    <div class="valid-tooltip">
                                        Looks good!
                                    </div>
                                    <div class="invalid-tooltip">
                                        Please enter full name.
                                    </div>
                                    @if($errors->has('name'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('name')}}
                                        </div>
                                    @endif
                                <div class="form-group position-relative mb-3">
                                    <input type="text" hidden name="category" value="service-provider" required="">
                                </div>
                                <div class="form-group position-relative mb-3">
                                    <label for="email">{{__('auth.register.service_provider.email')}}</label>
                                    <input
                                        type="email"
                                        class="form-control @error('email') is-invalid @enderror"
                                        id="email"
                                        name="email"
                                        required=""
                                        placeholder="{{__('auth.register.service_provider.email')}}">
                                    <div class="valid-tooltip">
                                        Looks good!
                                    </div>
                                    <div class="invalid-tooltip">
                                        Please provide an email.
                                    </div>
                                    @if($errors->has('email'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('email')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group position-relative mb-3">
                                    <label for="mobile_number">{{__('auth.register.service_provider.mobile_number')}}</label>
                                    <input
                                        type="text"
                                        class="form-control @error('mobile_number') is-invalid @enderror"
                                        id="mobile_number"
                                        name="mobile_number"
                                        required=""
                                        data-toggle="input-mask"
                                        data-mask-format="+255000000000"
                                        placeholder="{{__('auth.register.service_provider.mobile_number')}}">
                                    <div class="valid-tooltip">
                                        Looks good!
                                    </div>
                                    <div class="invalid-tooltip">
                                        Please provide a phone number
                                    </div>
                                    @if($errors->has('mobile_number'))
                                    <div class="invalid-feedback" style="display: block">
                                        {{$errors->first('mobile_number')}}
                                    </div>
                                @endif
                                </div>
                                <div class="form-group position-relative mb-3">
                                    <label for="password1">{{__('auth.register.service_provider.password')}}</label>
                                    <input type="password" id="password1" name="password" class="form-control" required="">
                                    <div class="valid-tooltip">
                                        Looks good!
                                    </div>
                                    <div class="invalid-tooltip">
                                        Please provide a password.
                                    </div>
                                </div>
                                <div class="form-group position-relative mb-3">
                                    <label for="password2">{{__('auth.register.service_provider.password_confrimation')}}</label>
                                    <input type="password" id="password2" name="password_confirmation" class="form-control" required="">
                                    <div class="valid-tooltip">
                                        Looks good!
                                    </div>
                                    <div class="invalid-tooltip">
                                        Please confirm a password.
                                    </div>
                                </div>
                                <div class="form-group mb-0 text-center">
                                    <button class="btn btn-primary btn-block" type="submit"> Sign Up </button>
                                    <p class="text-muted mt-2">
                                        Already have account? 
                                        <a href="{{route('login')}}" class="text-muted ml-1">
                                            <b>Log In</b>
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div> <!-- end card-body -->
                    </div>
                    <!-- end card -->
                </div> <!-- end col -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>
    
@endsection