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
                                    <i class="mdi mdi-account-circle mr-1"></i>
                                    <span class="d-none d-sm-inline">Service Providers</span>
                                </a>
                            </li>
                            <li class="nav-item" data-target-form="#profileForm">
                                <a href="#second" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                    <i class="mdi mdi-face-profile mr-1"></i>
                                    <span class="d-none d-sm-inline">Patients</span>
                                </a>
                            </li>
                            <li class="nav-item" data-target-form="#otherForm">
                                <a href="#third" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                    <i class="mdi mdi-checkbox-marked-circle-outline mr-1"></i>
                                    <span class="d-none d-sm-inline">Finish</span>
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content mb-0 b-0">

                            <div class="tab-pane active" id="first">
                                <form id="accountForm" method="post" action="#" class="form-horizontal">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="userName3">User name</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control" id="userName3" name="userName3" required="">
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="password3"> Password</label>
                                                <div class="col-md-9">
                                                    <input type="password" id="password3" name="password3" class="form-control" required="">
                                                </div>
                                            </div>
                                            
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="confirm3">Re Password</label>
                                                <div class="col-md-9">
                                                    <input type="password" id="confirm3" name="confirm3" class="form-control" required="">
                                                </div>
                                            </div>
                                        </div> <!-- end col -->
                                    </div> <!-- end row -->
                                </form>
                            </div>

                            <div class="tab-pane fade" id="second">
                                <form id="profileForm" method="post" action="#" class="form-horizontal">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="name3"> First name</label>
                                                <div class="col-md-9">
                                                    <input type="text" id="name3" name="name3" class="form-control" required="">
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="surname3"> Last name</label>
                                                <div class="col-md-9">
                                                    <input type="text" id="surname3" name="surname3" class="form-control" required="">
                                                </div>
                                            </div>
                                
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="email3">Email</label>
                                                <div class="col-md-9">
                                                    <input type="email" id="email3" name="email3" class="form-control" required="">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end col -->
                                    </div>
                                    <!-- end row -->
                                </form>
                            </div>
                            <ul class="list-inline wizard mb-0">
                                <li class="previous list-inline-item disabled"><a href="#" class="btn btn-info">Previous</a>
                                </li>
                                <li class="next list-inline-item float-right"><a href="#" class="btn btn-info">Next</a></li>
                            </ul>

                        </div> <!-- tab-content -->
                    </div> <!-- end #rootwizard-->
    
            </div> <!-- end card-body -->
        </div> <!-- end card-->
    </div>
    
@endsection