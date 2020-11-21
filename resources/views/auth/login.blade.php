@extends('layouts.base')

@section('contents')
    <div class="account-pages mt-5 mb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="card">
                        <div class="card-body px-4 pt-3 pb-2">
                            <div class="text-center w-75 m-auto pb-2">
                                <h4 class="text-dark-50 text-center mt-0 font-weight-bold">Login</h4>
                            </div>
                            <form method="POST" action="{{ route('login') }}" class="needs-validation" novalidate>
                                @csrf
                                <div class="form-group position-relative mb-3">
                                    <label for="emailaddress">Email address</label>
                                    <input class="form-control" type="email" name="email" :value="old('email')" required autofocus>
                                    <div class="valid-tooltip">
                                        Looks good!
                                    </div>
                                    <div class="invalid-tooltip">
                                        Please provide an email.
                                    </div>
                                </div>
                                <div class="form-group position-relative mb-3">
                                    @if (Route::has('password.request'))
                                        <a href="{{ route('password.request') }}" class="text-muted float-right">
                                            <small>Forgot your password?</small>
                                        </a>
                                    @endif
                                    <label for="password">Password</label>
                                    <div class="input-group input-group-merge">
                                        <input type="password" id="password" class="form-control" type="password" name="password" required autocomplete="current-password">
                                        <div class="input-group-append" data-password="false">
                                            <div class="input-group-text">
                                                <span class="password-eye"></span>
                                            </div>
                                        </div>
                                        <div class="valid-tooltip">
                                            Looks good!
                                        </div>
                                        <div class="invalid-tooltip">
                                            Please provide a password.
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-block" type="submit"> Login </button>
                                <div class="block mt-2">
                                    <label for="remember_me" class="flex items-center">
                                        <input id="remember_me" type="checkbox" class="form-checkbox" name="remember">
                                        <span class="ml-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
                                    </label>
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