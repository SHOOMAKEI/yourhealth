<x-jet-action-section>
    <x-slot name="title">
        {{ __('OTP (One Time Password Authentication) for Mobile App') }}
    </x-slot>

    <x-slot name="description">
        {{ __('Add additional security to your account using OTP (One Time Password Authentication) for Mobile App.') }}
    </x-slot>

    <x-slot name="content">
        <h3 class="h5 font-weight-bold">
            @if (auth()->user()->enabled_otp)
                {{ __('You have enabled OTP (One Time Password Authentication).') }}
            @else
                {{ __('You have not enabled OTP (One Time Password Authentication).') }}
            @endif
        </h3>

        <div class="mt-3">
            <p>
                {{ __('When OTP (One Time Password Authentication) is enabled, you will be prompted for a secure, random code thats sent to your mobile number during authentication. You may retrieve this code from sms that we sent to you.') }}
            </p>
        </div>

        <div class="mt-3">
            @if (! auth()->user()->enabled_otp)
                <a href="{{route('otp.enable')}}" class="btn btn-dark">
                    {{ __('Enable') }}
                </a>
            @else
                <a href="{{route('otp.disable')}}" class="btn btn-danger">
                    {{ __('Disable') }}
                </a>
            @endif
        </div>
    </x-slot>
</x-jet-action-section>