  <!-- LOGO -->
  <a href="{{ route('dashboard') }}" class="logo text-center logo-light" :active="request()->routeIs('dashboard')">
    <span class="logo-lg">
        <img src="assets/images/logo.png" alt="" height="16">
    </span>
    <span class="logo-sm">
        <img src="assets/images/logo_sm.png" alt="" height="16">
    </span>
</a>

<!-- LOGO -->
<a href="{{ route('dashboard') }}" class="logo text-center logo-dark" :active="request()->routeIs('dashboard')">
    <span class="logo-lg">
        <img src="assets/images/logo-dark.png" alt="" height="16">
    </span>
    <span class="logo-sm">
        <img src="assets/images/logo_sm_dark.png" alt="" height="16">
    </span>
</a>