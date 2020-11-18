<x-guest-layout>
    <x-jet-authentication-card>
        <x-slot name="logo">
            <x-jet-authentication-card-logo />
        </x-slot>

        <div class="mb-4 text-sm text-gray-600">
            {{ __('Thanks for signing up! Before getting started, could you verify your mobile number by entering the code on the sms we just send to you? If you didn\'t receive the code, we will gladly send you another.') }}
        </div>

        @if (session('status') == 'verification-code-sent')
            <div class="mb-4 font-medium text-sm text-green-600">
                {{ __('A new verification Code has been sent to your mobile number provided during registration.') }}
            </div>
        @endif

        @if (session('status') == 'wrong-verification-code')
            <div class="mb-4 font-medium text-sm text-red-600">
                {{ __('Your have enter wrong verification code') }}
            </div>
        @endif
        <form method="POST" action="{{ route('verification_code.verify') }}">
            @csrf
            <div>
                <x-jet-label for="verification_code" value="{{ __('Enter Verification Code') }}" />
                <x-jet-input id="verification_code" class="block mt-1 w-full" type="text" name="verification_code" :value="old('verification_code')" required autofocus />
            </div><br>
            <div>
                <x-jet-button type="submit" >
                    {{ __('Verify Number') }}
                </x-jet-button>
            </div>
        </form>
        <br>
        <hr/>
        <div class="mt-4 flex items-center justify-between">
            <form method="POST" action="{{ route('verification_code.send') }}">
                @csrf

                <div>
                    <x-jet-button type="submit">
                        {{ __('Resend Verification Code') }}
                    </x-jet-button>
                </div>
            </form>

            <form method="POST" action="{{ route('logout') }}">
                @csrf

                <button type="submit" class="underline text-sm text-gray-600 hover:text-gray-900">
                    {{ __('Logout') }}
                </button>
            </form>
        </div>
    </x-jet-authentication-card>
</x-guest-layout>
