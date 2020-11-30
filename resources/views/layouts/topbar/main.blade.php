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
        @hasallroles('service-provider|verified_sp')
            @include('layouts.topbar.verified_user_menu')
        @endhasallroles

        @hasallroles('service-provider|unverified_sp')
            @include('layouts.topbar.unverified_user_menu')
        @endhasallroles
        @role('super-admin')
            @include('layouts.topbar.verified_user_menu')
        @endrole
    </ul>
</div>
