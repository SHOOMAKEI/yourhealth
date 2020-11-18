@extends('layouts.guest-register')

@section('contents')
    <div class="col-xl-12">
        <div class="card">
            <!-- Logo -->
            <div class="card-header pt-4 pb-4 text-center bg-primary">
                <a href="index.html">
                    <span><img src="{{asset('assets/images/logo.png')}}" alt="" height="18"></span>
                </a>
            </div>
            <div class="card-body">

                <h4 class="header-title mb-3"> Create Your Account Here</h4>

                    <div id="rootwizard">
                        <ul class="nav nav-pills nav-justified form-wizard-header mb-3">
                            <li class="nav-item" data-target-form="#accountForm">
                                <a href="#first" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2 active">
                                    <i class="uil-medkit mr-1"></i>
                                    <span class="d-none d-sm-inline">Service Providers</span>
                                </a>
                            </li>
                            <li class="nav-item" data-target-form="#profileForm">
                                <a href="#second" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                    <i class="mdi mdi-account-supervisor-outline mr-1"></i>
                                    <span class="d-none d-sm-inline">Patients</span>
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content mb-0 b-0">

                            <div class="tab-pane active" id="first">
                                <form id="accountForm" method="POST" action="{{route('register')}}" class="form-horizontal">
                                    @csrf
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="userName3">{{__('auth.register.service_provider.full_name')}}</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="userName3" name="name" required="" placeholder="{{__('auth.register.service_provider.full_name')}}">
                                                </div>
                                                @error('name')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                            <input type="text" hidden name="category" value="service-provider" required="">
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="email">{{__('auth.register.service_provider.email')}}</label>
                                                <div class="col-md-9">
                                                    <input type="email" class="form-control @error('email') is-invalid @enderror" id="email" name="email" required="" placeholder="{{__('auth.register.service_provider.email')}}">
                                                </div>
                                                @error('email')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="mobile_number">{{__('auth.register.service_provider.mobile_number')}}</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control @error('mobile_number') is-invalid @enderror" id="mobile_number" name="mobile_number" required="" placeholder="{{__('auth.register.service_provider.mobile_number')}}">
                                                </div>
                                                @error('mobile_number')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="password3"> {{__('auth.register.service_provider.password')}}</label>
                                                <div class="col-md-9">
                                                    <input type="password" id="password3" name="password" class="form-control" required="">
                                                </div>
                                            </div>
                                            
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="password_confirmation">{{__('auth.register.service_provider.password_confrimation')}}</label>
                                                <div class="col-md-9">
                                                    <input type="password" id="password_confirmation" name="password_confirmation" class="form-control" required="">
                                                </div>
                                            </div>
                                            <div class="mx-auto">
                                                <button type="submit" class="btn btn-primary">{{__('auth.register.service_provider.register')}}</button>
                                            </div>
                                        </div> <!-- end col -->
                                    </div> <!-- end row -->
                                </form>
                            </div>

                            <div class="tab-pane fade" id="second">
                                <form id="profileForm" method="POST" action="{{route('register')}}" class="form-horizontal">
                                    @csrf
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="userName3">{{__('auth.register.service_provider.full_name')}}</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="userName3" name="name" required="" placeholder="{{__('auth.register.service_provider.full_name')}}">
                                                </div>
                                                @error('name')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                            <input type="text" hidden name="category" value="patient" required="">
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="email">{{__('auth.register.service_provider.email')}}</label>
                                                <div class="col-md-9">
                                                    <input type="email" class="form-control @error('email') is-invalid @enderror" id="email" name="email" required="" placeholder="{{__('auth.register.service_provider.email')}}">
                                                </div>
                                                @error('email')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="mobile_number">{{__('auth.register.service_provider.mobile_number')}}</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control @error('mobile_number') is-invalid @enderror" id="mobile_number" name="mobile_number" required="" placeholder="{{__('auth.register.service_provider.mobile_number')}}">
                                                </div>
                                                @error('mobile_number')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="password3"> {{__('auth.register.service_provider.password')}}</label>
                                                <div class="col-md-9">
                                                    <input type="password" id="password3" name="password" class="form-control" required="">
                                                </div>
                                            </div>
                                            
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="password_confirmation">{{__('auth.register.service_provider.password_confrimation')}}</label>
                                                <div class="col-md-9">
                                                    <input type="password" id="password_confirmation" name="password_confirmation" class="form-control" required="">
                                                </div>
                                            </div>
                                            <div class="mx-auto">
                                                <button type="submit" class="btn btn-primary">{{__('auth.register.service_provider.register')}}</button>
                                            </div>
                                            
                                        </div> <!-- end col -->
                                    </div>
                                    <!-- end row -->
                                </form>
                            </div>
                        </div> <!-- tab-content -->
                    </div> <!-- end #rootwizard-->
    
            </div> <!-- end card-body -->
        </div> <!-- end card-->
    </div>
    
@endsection