<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" >
        <meta content="A fully featured health platform" name="description" />
        <meta content="Christopher Shoo And Michael Assey" name="author" />
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="shortcut icon" href="{{asset('assets/images/favicon.ico')}}">
        <link href="{{asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('assets/css/app.min.css')}}" rel="stylesheet" type="text/css" id="light-style" />
        <link href="{{asset('assets/css/app-dark.min.css')}}" rel="stylesheet" type="text/css" id="dark-style" />
        @livewireStyles

        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.js" defer></script>
        <title>{{ config('app.name', 'Your Health') }}</title>

    </head>

    <body class="loading" data-layout-config='{"leftSideBarTheme":"dark","layoutBoxed":false, "leftSidebarCondensed":false, "leftSidebarScrollable":false,"darkMode":false, "showRightSidebarOnStart": true}'>
        <div class="wrapper">
            @include('layouts.sidebar.main')
            <div class="content-page">
                <div class="content">
                    @include('layouts.topbar.main')
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <h4 class="page-title">{{$header}}</h4>
                                </div>
                            </div>
                        </div>
                        {{ $slot }}
                    </div>
                </div>
               @include('layouts.footer')
            </div>
        </div>
        @stack('modals')


        <script src="{{ asset('js/app.js') }}"></script>
        @livewireScripts
        @stack('scripts')
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
