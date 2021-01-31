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
                                    Thanks for signing up! Before getting started, could you verify your 
                                    email address by clicking on the link we just emailed to you? If you didn't 
                                    receive the email, we will gladly send you another.
                                </p>
                            </div>
                            @if (session('status') == 'verification-link-sent')
                                <div class="alert alert-primary mb-4 font-medium text-sm" role="alert">
                                    A new verification link has been sent to the email address you provided during registration.
                                </div>
                            @endif
                            <form method="POST" action="{{ route('verification.send') }}">
                                @csrf
                                <button class="btn btn-primary btn-block mb-2" type="submit"> Resend Verification Email </button>
                            </form>
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <button class="btn btn-light btn-block mb-2" type="submit"> Logout </button>
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
