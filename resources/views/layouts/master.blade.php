<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <title>{{ config('app.name', 'Your Health') }}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Omakei & BShoo" name="author" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- App favicon -->
        <link rel="shortcut icon" href="{{asset('assets/images/favicon.ico')}}">

        <!-- App css -->
        <link href="{{asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('assets/css/app.min.css')}}" rel="stylesheet" type="text/css" id="light-style" />
        <link href="{{asset('assets/css/app-dark.min.css')}}" rel="stylesheet" type="text/css" id="dark-style" />
        <link href="{{asset('assets/css/vendor/buttons.bootstrap4.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('assets/css/vendor/dataTables.bootstrap4.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('assets/css/vendor/responsive.bootstrap4.css')}}" rel="stylesheet" type="text/css" />
        {{-- <link rel="stylesheet" href="{{ asset('css/app.css') }}"> --}}

        @livewireStyles

        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.js" defer></script>

    </head>

    <body class="loading" data-layout-config='{"leftSideBarTheme":"dark","layoutBoxed":false, "leftSidebarCondensed":false, "leftSidebarScrollable":false,"darkMode":false, "showRightSidebarOnStart": true}'>
        <!-- Begin page -->
        <div class="wrapper">
            <!-- ========== Left Sidebar Start ========== -->
            <div class="left-side-menu">
    
              @include('layouts.side-bar-logo')
    
                <div class="h-100" id="left-side-menu-container" data-simplebar>


                    @include('layouts.menu')

                    <div class="clearfix"></div>

                </div>
                <!-- Sidebar -left -->

            </div>
            <!-- Left Sidebar End -->

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page">
                <div class="content">
                    @include('layouts.top-bar')

                    <!-- Start Content-->
                    <div class="container-fluid">
                        
                        <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <div class="page-title-right">
                                        @yield('menu-right')
                                    </div>
                                    <h4 class="page-title">@yield('header')</h4>
                                </div>
                            </div>
                        </div>     
                        <!-- end page title --> 
                       @yield('contents')
                    </div> <!-- container -->

                </div> <!-- content -->

               @include('layouts.footer')

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->

        @include('layouts.right-bar')


        <!-- bundle -->
        <script src="{{asset('assets/js/vendor.min.js')}}"></script>
        <script src="{{asset('assets/js/app.min.js')}}"></script>
        <script src="{{asset('assets/js/vendor/dataTables.buttons.min.js')}}"></script>
        <script src="{{asset('assets/js/vendor/buttons.bootstrap4.min.js')}}"></script>
        <script src="{{asset('assets/js/vendor/buttons.html5.min.js')}}"></script>
        <script src="{{asset('assets/js/vendor/buttons.flash.min.js')}}"></script>
        <script src="{{asset('assets/js/vendor/buttons.print.min.js')}}"></script>
        <script src="{{asset('assets/js/vendor/jquery.dataTables.min.js')}}"></script>
        <script src="{{asset('assets/js/vendor/dataTables.bootstrap4.js')}}"></script>
        <script src="{{asset('assets/js/vendor/dataTables.responsive.min.js')}}"></script>
        <script src="{{asset('assets/js/vendor/responsive.bootstrap4.min.js')}}"></script>
        <script src="{{asset('assets/js/pages/demo.datatable-init.js')}}"></script>
    </body>
</html>
