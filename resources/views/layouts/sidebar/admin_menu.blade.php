<li class="side-nav-item">
    <a href="{{route('dashboard')}}" class="side-nav-link">
        <i class="uil-home-alt"></i>
        <span> Dashboard </span>
    </a>
</li>
<li class="side-nav-title side-nav-item">User management</li>
<li class="side-nav-item">
    <a href="#" class="side-nav-link" aria-expanded="false">
        <i class="uil-users-alt"></i>
        <span> Service Provider </span>
        <span class="menu-arrow"></span>
    </a>
    <ul class="side-nav-second-level mm-collapse" aria-expanded="false" style="height: 0px;">
        <li>
            <a href="{{route('service_provider_profiles.index')}}">Requests</a>
        </li>
        <li>
            <a href="{{route('specializations.index')}}">Spesialization</a>
        </li>
        <li>
            <a href="{{route('procedures.index')}}">Procedures</a>
        </li>
        <li>
            <a href="{{route('profile_validations.index')}}">
                <span> Attachments </span>
            </a>
        </li>
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
    <li class="side-nav-title side-nav-item">System Configuration</li>
<li class="side-nav-item">
    <a href="{{route('packages.index')}}" class="side-nav-link">
        <i class="uil-moneybag "></i>
        <span> Packages </span>
    </a>
</li>



{{-- <li class="side-nav-item mm-active">
    <a href="javascript: void(0);" class="side-nav-link" aria-expanded="true">
        <i class="uil-location-point"></i>
        <span> Maps </span>
        <span class="menu-arrow"></span>
    </a>
    <ul class="side-nav-second-level mm-collapse mm-show" aria-expanded="false" style="">
        <li>
            <a href="maps-google.html">Google Maps</a>
        </li>
        <li>
            <a href="maps-vector.html">Vector Maps</a>
        </li>
    </ul>
</li> --}}