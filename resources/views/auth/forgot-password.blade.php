@extends('layouts.base')

@section('contents')
    <div class="account-pages mt-5 mb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="card">
                        <div class="card-body px-4 pt-3 pb-2">
                            <div class="text-center w-75 m-auto pb-2">
                                <p>
                                    Forgot your password? No problem. Just let us know your email address and 
                                    we will email you a password reset link that will allow you to choose a new one.
                                </p>
                            </div>
                            @if (session('status'))
                                <div class="mb-4 font-medium text-sm text-green-600">
                                    {{ session('status') }}
                                </div>
                            @endif
                            <form method="POST" action="{{ route('password.email') }}" class="needs-validation" novalidate>
                                @csrf
                                <div class="form-group position-relative mb-3">
                                    <label for="emailaddress">Email address</label>
                                    <input id="email" class="form-control" type="email" name="email" :value="old('email')" required autofocus>
                                    <div class="valid-tooltip">
                                        Looks good!
                                    </div>
                                    <div class="invalid-tooltip">
                                        Please provide an email.
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-block mb-2" type="submit"> Email password reset link </button>
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