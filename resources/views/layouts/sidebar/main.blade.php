<div class="left-side-menu">
    <a href="{{ route('dashboard') }}" class="logo text-center logo-dark" :active="request()->routeIs('dashboard')">
        <span class="logo-lg">
            <img src="assets/images/logo-dark.png" alt="" height="16">
        </span>
        <span class="logo-sm">
            <img src="assets/images/logo_sm_dark.png" alt="" height="16">
        </span>
    </a>
    <div class="h-100" id="left-side-menu-container" data-simplebar>
        <ul class="metismenu side-nav">
            <li class="side-nav-title side-nav-item">Navigation</li>

            @role('service-provider')
                @if (!empty(auth()->user()->account->is_verified))
                    @include('layouts.sidebar.verified_sp_menu')
                @else
                    @include('layouts.sidebar.unverified_sp_menu')
                @endif
            @endrole

            @role('super-admin')
                @include('layouts.sidebar.admin_menu')
            @endrole
            
        </ul>
        <div class="clearfix"></div>
    </div>
</div>