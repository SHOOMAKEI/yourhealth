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
                                    Thanks for signing up! Before getting started, could you verify your mobile 
                                    number by entering the code on the sms we just send to you? If you didn't 
                                    receive the code, we will gladly send you another.
                                </p>
                            </div>
                            @if (session('status') == 'verification-code-sent')
                                <div class="alert alert-primary mb-4 font-medium text-sm" role="alert">
                                    A new verification Code has been sent to your mobile number provided during registration.
                                </div>
                            @endif

                            @if (session('status') == 'wrong-verification-code')
                                <div class="alert alert-danger mb-4 font-medium text-sm" role="alert">
                                    Your have enter wrong verification code.
                                </div>
                            @endif
                            <form method="POST" action="{{ route('verification_code.verify') }}" class="needs-validation" novalidate>
                                @csrf
                                <div class="form-group position-relative mb-3">
                                    <label for="verification_code">Enter Verification Code</label>
                                    <input type="text" class="form-control" id="verification_code" name="verification_code" required autofocus>
                                    <div class="valid-tooltip">
                                        Looks good!
                                    </div>
                                    <div class="invalid-tooltip">
                                        Please enter verification code.
                                    </div>
                                </div>
                                <div class="form-group mb-2 text-center">
                                    <button class="btn btn-primary btn-block" type="submit"> Verify </button>
                                </div>
                            </form>
                            <form method="POST" action="{{ route('verification_code.send') }}">
                                @csrf
                                <button class="btn btn-secondary btn-block mb-2" type="submit"> Resend Verification Code </button>
                            </form>
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <button class="btn btn-link btn-block mb-2" type="submit"> Logout </button>
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
