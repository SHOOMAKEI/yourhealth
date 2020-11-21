<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" >
        <meta content="A fully featured health platform" name="description" />
        <meta content="Christopher Shoo And Michael Assey" name="author" />
        
        <link rel="shortcut icon" href="{{asset('assets/images/favicon.ico')}}">
        <link href="{{asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('assets/css/app.min.css')}}" rel="stylesheet" type="text/css" id="light-style" />
        <link href="{{asset('assets/css/app-dark.min.css')}}" rel="stylesheet" type="text/css" id="dark-style" />

        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.js" defer></script>

        <title>{{ config('app.name', 'Your Health') }}</title>

    </head>

    <body data-layout-config='{"darkMode":false}'>

        @yield('contents')  
        
        <script src="{{asset('assets/js/vendor.min.js')}}"></script>
        <script src="{{asset('assets/js/app.min.js')}}"></script>
    </body>
</html>