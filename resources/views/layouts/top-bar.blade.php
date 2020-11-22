  <!-- Topbar Start -->
  <div class="navbar-custom">
    <ul class="list-unstyled topbar-right-menu float-right mb-0">
        <li class="dropdown notification-list d-lg-none">
            <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <i class="dripicons-search noti-icon"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                <form class="p-3">
                    <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                </form>
            </div>
        </li>
        <li class="dropdown notification-list topbar-dropdown">
            <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
              {{language()->flag()}}
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu">
               {{language()->flags()}}
            </div>
        </li>

         {{-- @livewire('navigation-dropdown') --}}
        <li class="dropdown notification-list">
            <a class="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false"
                aria-expanded="false">
                @if (Laravel\Jetstream\Jetstream::managesProfilePhotos())
                <span class="account-user-avatar"> 
                    <img src="{{ Auth::user()->profile_photo_url }}" alt="{{ Auth::user()->name }}" class="rounded-circle">
                </span>
                @else
                <span class="account-user-avatar">
                <div class="avatar-xs">
                    <span class="avatar-title bg-primary rounded-circle">
                        {{ strtoupper(substr(Auth::user()->name,0,2)) }}
                    </span>
                </div>
                </span>
                @endif
                <span>
                    <span class="account-user-name">{{ Auth::user()->name }}</span>
                    <span class="account-position">{{ Auth::user()->getRoleNames()->first() }}</span>
                </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                <!-- item-->
                <div class=" dropdown-header noti-title">
                    <h6 class="text-overflow m-0">{{ __('Manage Account') }}</h6>
                </div>
               @role('service-provider')
                <!-- item-->
                {{-- <a href="{{route('provider_profiles.index')}}" class="dropdown-item notify-item">
                    <i class="mdi mdi-account-circle mr-1"></i>
                    <span>{{ __('Profile') }}</span>
                </a> --}}
                @endrole
                <!-- item-->
                <a href="{{ route('profile.show') }}" class="dropdown-item notify-item">
                    <i class="mdi mdi-account-edit mr-1"></i>
                    <span>Settings</span>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                    <i class="mdi mdi-lifebuoy mr-1"></i>
                    <span>Support</span>
                </a>

                <!-- item-->
                <form method="POST" action="{{ route('logout') }}"class="dropdown-item notify-item">
                    @csrf

                    <a href="{{ route('logout') }}"
                        onclick="event.preventDefault();
                        this.closest('form').submit();">
                        <i class="mdi mdi-logout mr-1"></i>
                        {{ __('Logout') }}
                    </a>
                </form>

            </div>
        </li>

    </ul>
    <button class="button-menu-mobile open-left disable-btn">
        <i class="mdi mdi-menu"></i>
    </button>
</div>
<!-- end Topbar -->