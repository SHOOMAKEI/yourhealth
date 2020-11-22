<!--- Sidemenu -->
<ul class="metismenu side-nav">
    @role('service-provider')
        <li class="side-nav-title side-nav-item">Navigation</li>
        @if (!empty(auth()->user()->account->is_verified))
            <li class="side-nav-item">
            <a href="{{route('dashboard')}}" class="side-nav-link">
                    <i class="uil-home-alt"></i>
                    <span> Dashboard </span>
                </a>
            </li>
        @else
            <li class="side-nav-item">
                <a href="{{route('profile_info.index')}}" class="side-nav-link">
                    <i class="uil-home-alt"></i>
                    <span> Profile Informations</span>@dump($errors->all())
                </a>
            </li>
        
            @role('doctor')
                @if(!empty(auth()->user()->provider_profile->id))
                    <li class="side-nav-item">
                        <a href="{{route('medical_qualification.index')}}" class="side-nav-link">
                            <i class="uil-home-alt"></i>
                            <span> Medical Qualifications</span>
                        </a>
                    </li>
                @endif
            @endrole
            @role('owner')
                @if(!empty(auth()->user()->provider_profile->id))
                    <li class="side-nav-item">
                        <a href="{{route('establishments.index')}}" class="side-nav-link">
                            <i class="uil-home-alt"></i>
                            <span> Establishment Info</span>
                        </a>
                    </li>
                @endif
            @endrole
            @role('doctor')
                @if(!empty(auth()->user()->provider_profile->medical_qualifications))
                    <li class="side-nav-item">
                        <a href="{{route('specializations.index')}}" class="side-nav-link">
                            <i class="uil-home-alt"></i>
                            <span> Specializations</span>
                        </a>
                    </li>
                @endif
            @endrole
                <li class="side-nav-item">
                    <a href="{{route('verifications.index')}}" class="side-nav-link">
                        <i class="uil-home-alt"></i>
                        <span> Verifications</span>
                    </a>
                </li>
            @if(!empty(auth()->user()->provider_profile->verifications))
                <li class="side-nav-item">
                    <a href="{{route('submittion.index')}}" class="side-nav-link">
                        <i class="uil-home-alt"></i>
                        <span> Submittion</span>
                    </a>
                </li>
            @endif
        @endif
    @endrole
    @role('super-admin')
        <li class="side-nav-title side-nav-item">Navigation</li>

        <li class="side-nav-item">
        <a href="{{route('dashboard')}}" class="side-nav-link">
                <i class="uil-home-alt"></i>
                <span> Dashboard </span>
            </a>
        </li>
        <li class="side-nav-title side-nav-item">System Users Listing</li>
        <li class="side-nav-item">
            <a href="#" class="side-nav-link" aria-expanded="false">
                <i class="uil-users-alt"></i>
                <span> Service Provider </span>
                <span class="menu-arrow"></span>
            </a>
            <ul class="side-nav-second-level mm-collapse" aria-expanded="false" style="height: 0px;">
                <li>
                    <a href="{{route('service_provider_profiles.index')}}">Profile List</a>
                </li>
                <li>
                    <a href="#">Reported List</a>
                </li>
            </ul>
        </li>
            <li class="side-nav-title side-nav-item">System Configuration</li>
        <li class="side-nav-item">
            <a href="{{route('packages.index')}}" class="side-nav-link">
                <i class="uil-moneybag "></i>
                <span> Packages </span>
            </a>
        </li>

        <li class="side-nav-item">
            <a href="#" class="side-nav-link" aria-expanded="false">
                <i class="uil-clipboard-alt"></i>
                <span> Provider Profile </span>
                <span class="menu-arrow"></span>
            </a>
            <ul class="side-nav-second-level mm-collapse" aria-expanded="false" style="height: 0px;">
                <li>
                    <a href="{{route('specializations.index')}}">Spesialization</a>
                </li>
                <li>
                    <a href="{{route('procedures.index')}}">Procedures</a>
                </li>
            </ul>
        </li>
        <li class="side-nav-item">
            <a href="#" class="side-nav-link" aria-expanded="false">
                <i class="uil-award"></i>
                <span> Qualifications</span>
                <span class="menu-arrow"></span>
            </a>
            <ul class="side-nav-second-level mm-collapse" aria-expanded="false" style="height: 0px;">
                <li>
                    <a href="{{route('medical_institutes.index')}}">Medical Instistutes</a>
                </li>
                <li>
                    <a href="{{route('medical_courses.index')}}">Medical Courses</a>
                </li>
                <li>
                    <a href="{{route('medical_councils.index')}}">Medical Councils</a>
                </li>
            </ul>
        </li>
            <li class="side-nav-item">
            <a href="{{route('profile_validations.index')}}" class="side-nav-link">
                <i class="uil-shield-check"></i>
                <span> Validation Requirements </span>
            </a>
        </li>
    @endrole
</ul>