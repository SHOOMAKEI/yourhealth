@extends('layouts.topbar.avatar')

@section('menulist')
    <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
        <div class=" dropdown-header noti-title">
            <h6 class="text-overflow m-0">{{ __('Manage Account') }}</h6>
        </div>
        <a href="{{ route('profile.show') }}" class="dropdown-item notify-item">
            <i class="mdi mdi-account-edit mr-1"></i>
            <span>Settings</span>
        </a>
        <a href="javascript:void(0);" class="dropdown-item notify-item">
            <i class="mdi mdi-lifebuoy mr-1"></i>
            <span>Support</span>
        </a>
        <form method="POST" action="{{ route('logout') }}"class="dropdown-item notify-item">
            @csrf
            <a href="{{ route('logout') }}" onclick="event.preventDefault(); this.closest('form').submit();">
                <i class="mdi mdi-logout mr-1"></i>
                {{ __('Logout') }}
            </a>
        </form>
    </div>
@endsection
