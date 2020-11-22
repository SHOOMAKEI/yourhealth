<li class="side-nav-item">
    <a href="{{route('profile_info.index')}}" class="side-nav-link">
        <i class="uil-home-alt"></i>
        <span> Profile Informations</span>
    </a>
</li>

@role('doctor')
    @if(auth()->user()->provider_profile->exists())
        <li class="side-nav-item">
            <a href="{{route('medical_qualification.index')}}" class="side-nav-link">
                <i class="uil-home-alt"></i>
                <span> Medical Qualifications</span>
            </a>
        </li>
    @endif
@endrole

@role('owner')
    @if(auth()->user()->provider_profile->exists())
        <li class="side-nav-item">
            <a href="{{route('establishments.index')}}" class="side-nav-link">
                <i class="uil-home-alt"></i>
                <span> Establishment Info</span>
            </a>
        </li>
    @endif
@endrole

@role('doctor')
    @if(auth()->user()->provider_profile->education_qualifications->isNotEmpty())
        <li class="side-nav-item">
            <a href="{{route('specializations.index')}}" class="side-nav-link">
                <i class="uil-home-alt"></i>
                <span> Specializations</span>
            </a>
        </li>
    @endif
@endrole

@hasallroles('doctor|owner')

    @if(auth()->user()->provider_profile->medical_specializations->isNotEmpty() && auth()->user()->provider_profile->establishments->isNotEmpty())
        <li class="side-nav-item">
            <a href="{{route('verifications.index')}}" class="side-nav-link">
                <i class="uil-home-alt"></i>
                <span> Attachments</span>
            </a>
        </li>
    @endif

@else

    @role('doctor')

        @if(auth()->user()->provider_profile->medical_specializations->isNotEmpty())
            <li class="side-nav-item">
                <a href="{{route('verifications.index')}}" class="side-nav-link">
                    <i class="uil-home-alt"></i>
                    <span> Attachments</span>
                </a>
            </li>
        @endif

    @else

        @if(auth()->user()->provider_profile->establishments->isNotEmpty())
            <li class="side-nav-item">
                <a href="{{route('verifications.index')}}" class="side-nav-link">
                    <i class="uil-home-alt"></i>
                    <span> Attachments</span>
                </a>
            </li>
        @endif

    @endrole

@endhasallroles

@if(auth()->user()->provider_profile->verifications->isNotEmpty())
    <li class="side-nav-item">
        <a href="{{route('submittion.index')}}" class="side-nav-link">
            <i class="uil-home-alt"></i>
            <span> Submittion</span>
        </a>
    </li>
@endif