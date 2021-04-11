<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >
    <meta content="A fully featured health platform" name="description" />
    <meta content="Christopher Shoo And Michael Assey" name="author" />
    <link rel="shortcut icon" href="{{asset('assets/images/favicon.png')}}">
    <link href="{{asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/css/app.min.css')}}" rel="stylesheet" type="text/css" id="light-style" />
    <link href="{{asset('assets/css/app-dark.min.css')}}" rel="stylesheet" type="text/css" id="dark-style" />

    @routes
    <script src="{{ mix('/js/app.js') }}" defer></script>
      <script src="{{asset('assets/js/vendor.min.js')}}" defer ></script>

      <script src="{{asset('assets/js/vendor/bootstrap.bundle.min.js')}}" defer ></script>
      <script src="{{asset('assets/js/app.min.js')}}" defer ></script>
      <script defer>
          $(".alert-success").fadeTo(2000, 500).slideUp(500, function(){
              $(".alert-success").slideUp(500);
          });
      </script>
    <title>{{ config('app.name', 'MSON') }}</title>

  </head>
  <body data-layout="detached" data-layout-config='{"darkMode":false,leftSidebarCondensed":false}'>
    @inertia
          <script src="{{asset('assets/js/vendor/jquery.min.js')}}"  ></script>
  </body>
</html>
