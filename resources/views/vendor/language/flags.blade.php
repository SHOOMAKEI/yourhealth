@foreach (language()->allowed() as $code => $name)
    <a href="{{ language()->back($code) }}" class="dropdown-item notify-item">
        <img src="{{ asset('assets/images/flags/'. language()->country($code) .'.png') }}" alt="{{ $name }}" width="{{ config('language.flags.width') }}" class="mr-1" height="12"/> &nbsp; {{ $name }}
    </a>
@endforeach
