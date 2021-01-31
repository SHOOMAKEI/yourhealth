@extends('layouts.master')

@section('header')
    Priview Your Profile Before Submittion
@endsection

@section('menu-right')

@endsection
@section('contents')
<div class="col-xl-10 col-lg-10 mt-5">
    @if ($profile->is_submitted != 1)
    <a href="{{route('submittion.store')}}" class="btn btn-success btn-sm"><i class=" uil-pen"></i>Submit Details For Verification</a>
    @endif
   <br/>
    <div class="card text-center">
        <div class="card-body">
            <img src="{{ Auth::user()->profile_photo_url }}" class="rounded-circle avatar-lg img-thumbnail"
            alt="profile-image">

            <h4 class="mb-0 mt-2">{{Auth::user()->name}}</h4>
            <p class="text-muted font-14"></p>


            <div class="text-left mt-3">
                <h4 class="font-13 text-uppercase">About Me :</h4>
                @if (!empty($profile->education_qualifications))
                    @foreach ($profile->education_qualifications as $qualification)
                        <p class="text-muted font-13 mb-3">
                            {{$qualification->medical_course->award_code}}&nbsp;{{$qualification->medical_course->name}} &nbsp; at <br>
                            {{$qualification->medical_institute->name}} &nbsp; ({{$qualification->year_of_complition}})
                            
                        </p class="text-muted font-13 mb-3">
                    @endforeach
                    <p class="text-muted font-13 mb-3">
                        {{$profile->education_qualifications->sum('year_of_experience')}} &nbsp;Years of Experience
                    </p>
                @endif
                @if (!empty($profile->medical_registrations))
                    <p>
                        Medical Registration
                    </p>
                    <p class="text-muted font-13 mb-3">
                        @foreach ($profile->medical_registrations as $registration)
                        <p class="text-muted mb-1 font-13"><strong>Medical Registration Council Name :</strong> <span class="ml-2">{{$registration->name}}</span></p>
                        <p class="text-muted mb-1 font-13"><strong>Medical Registration Number :</strong> <span class="ml-2">{{$registration->pivot->registration_number}}</span></p>   
                        @endforeach
                    </p>
                @endif
                
                @if (!empty($profile->medical_specializations))
                    <p>
                        Specializations
                    </p>
                    <p class="text-muted font-13 mb-3">
                        @foreach ($profile->medical_specializations as $specialization)
                            <span class="badge badge-outline-secondary badge-pill">{{$specialization->name}}</span>&nbsp;
                        @endforeach
                    </p>
                @endif
              @if (!empty($profile->medical_procedures))
                <p>
                 Procedures
                </p>
                <p class="text-muted font-13 mb-3">
                    @foreach ($profile->medical_procedures as $procedure)
                        <span class="badge badge-outline-secondary badge-pill">{{$procedure->name}} </span>&nbsp;
                        @money($procedure->pivot->price,$procedure->pivot->currency)<br>
                    @endforeach
                </p>
               
              @endif
               
                @if (!empty($profile))
                <p class="text-muted mb-2 font-13"><strong>User Name :</strong> <span class="ml-2">{{ $profile->username}}
                    </span>
                </p>
                
                    <p class="text-muted mb-2 font-13"><strong>Mobile :</strong><span class="ml-2">@if(!empty($profile->establishments[0]->mobile_number)) 
                        {{ $profile->establishments[0]->mobile_number}} <span class="badge badge-primary-lighten badge-pill">Work</span><br>
                        {{Auth::user()->mobile_number}} <span class="badge badge-secondary-lighten badge-pill">Personal</span>
                        @else 
                        {{Auth::user()->mobile_number}} <span class="badge badge-primary-lighten badge-pill">Work</span> <span class="badge badge-secondary-lighten badge-pill">Personal</span>
                        @endif
                    </span></p>

                    <p class="text-muted mb-2 font-13"><strong>Email :</strong> <span class="ml-2 ">@if(!empty($profile->email)) 
                        {{ $profile->email}} <span class="badge badge-primary-lighten badge-pill">Work</span>
                        {{Auth::user()->email}} <span class="badge badge-secondary-lighten badge-pill">Personal</span>
                        @else 
                        {{Auth::user()->email}} <span class="badge badge-primary-lighten badge-pill">Work</span> <span class="badge badge-secondary-lighten badge-pill">Personal</span>
                        @endif</span></p>
                        <p class="text-muted mb-1 font-13"><strong>Gender :</strong> <span class="ml-2">
                            @if($profile->gender == 'F') 
                            Female 
                            @elseif($profile->gender == 'M') 
                            Male @else Other @endif</span></p>
                    <p class="text-muted mb-1 font-13"><strong>Location :</strong> <span class="ml-2">{{$profile->city->name}}, &nbsp;{{$profile->country->name}}</span></p>
                    @if (!empty($profile->consultation_fee))
                        <p class="text-muted mb-1 font-13"><strong>Constaltation Fee :</strong> <span class="ml-2">
                            @money($profile->consultation_fee->price, $profile->consultation_fee->currency,true)</span></p>
                    @endif
                        <p class="text-muted mb-1 font-13"><strong>Profile Status :</strong> @if($profile->is_submitted ==1)<span class="badge badge-primary-lighten badge-pill">Submitted Wait for verification</span>@else<span class="badge badge-secondary-lighten badge-pill">Not Submitted</span> @endif</p>
                @endif
            </div>

            </ul>
        </div> <!-- end card-body -->
    </div> <!-- end card -->
    @if (!empty($profile->establishments))
    <div class="card">
        <div class="card-body">
            <h4 class="header-title mt-0 mb-3">Establishment Information</h4>
            <p class="text-muted font-13"> 
            @foreach ($profile->establishments as $establishment)
                
            
            <div class="text-left">
                <p class="text-muted fist-capital"><strong>{{$establishment->category}} &nbsp; Name :</strong> <span class="ml-2">{{$establishment->name}}&nbsp; {{$establishment->category}}</span></p>

                <p class="text-muted"><strong>Mobile :</strong><span class="ml-2">{{$establishment->mobile_number}}</span></p>

                <p class="text-muted"><strong>Email :</strong> <span class="ml-2">{{$establishment->email}}</span></p>

                <p class="text-muted"><strong>Address :</strong> <span class="ml-2">{{$establishment->address}}</span></p>
                <p class="text-muted"><strong>Location :</strong> <span class="ml-2">{{$establishment->country->name}}, &nbsp; {{$establishment->city->name}}</span></p>

            </div>
            <br>
            <hr>
            @endforeach
        </div>
    </div>
    @endif
@endsection