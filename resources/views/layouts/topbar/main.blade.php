<div class="navbar-custom">
    <ul class="list-unstyled topbar-right-menu float-right mb-0">
        <li class="dropdown notification-list topbar-dropdown">
            <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
              {{language()->flag()}}
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu">
               {{language()->flags()}}
            </div>
        </li>
        @role('service-provider')
            @if (!empty(auth()->user()->account->is_verified))
                @include('layouts.topbar.verified_user_menu')
            @else
                @include('layouts.topbar.unverified_user_menu')
            @endif
        @endrole

        @role('super-admin')
            @include('layouts.topbar.verified_user_menu')
        @endrole
    </ul>
</div>
