<div class="left-side-menu">
    @include('layouts.side-bar-logo')
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