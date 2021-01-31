<li class="dropdown notification-list">
    <a class="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
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
    @yield('menulist')
</li>