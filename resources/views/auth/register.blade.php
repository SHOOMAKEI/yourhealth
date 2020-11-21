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
                            <form method="POST" action="{{route('register')}}">
                                @csrf
                                <div class="form-group">
                                    <label for="fullname">{{__('auth.register.service_provider.full_name')}}</label>
                                    <input 
                                        type="text"
                                        class="form-control @error('name') is-invalid @enderror"
                                        id="fullname"
                                        name="name"
                                        required=""
                                        placeholder="{{__('auth.register.service_provider.full_name')}}">
                                    @error('name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <input type="text" hidden name="category" value="service-provider" required="">
                                </div>
                                <div class="form-group">
                                    <label for="email">{{__('auth.register.service_provider.email')}}</label>
                                    <input
                                        type="email"
                                        class="form-control @error('email') is-invalid @enderror"
                                        id="email"
                                        name="email"
                                        required=""
                                        placeholder="{{__('auth.register.service_provider.email')}}">
                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="mobile_number">{{__('auth.register.service_provider.mobile_number')}}</label>
                                    <input
                                        type="text"
                                        class="form-control @error('mobile_number') is-invalid @enderror"
                                        id="mobile_number"
                                        name="mobile_number"
                                        required=""
                                        placeholder="{{__('auth.register.service_provider.mobile_number')}}">
                                    @error('mobile_number')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="password1">{{__('auth.register.service_provider.password')}}</label>
                                    <input type="password" id="password1" name="password" class="form-control" required="">
                                </div>
                                <div class="form-group">
                                    <label for="password2">{{__('auth.register.service_provider.password_confrimation')}}</label>
                                    <input type="password" id="password2" name="password_confirmation" class="form-control" required="">
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