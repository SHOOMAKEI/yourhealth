@extends('layouts.master')
@section('header')
    Service Provider Profile
@endsection


@section('contents')
<div class="row">
    <div class="col-xl-4 col-lg-5">
        <div class="card text-center">
            <div class="card-body">
                <img src="{{ Auth::user()->profile_photo_url }}" class="rounded-circle avatar-lg img-thumbnail"
                alt="profile-image">

                <h4 class="mb-0 mt-2">{{Auth::user()->name}}</h4>
                <p class="text-muted font-14">Founder</p>


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
                            {{$education_qualifications->sum('year_of_experience')}} &nbsp;Years of Experience
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
                                @money($profile->consultation_fee->price, $profile->consultation_fee->currency)</span></p>
                        @endif
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
    </div> <!-- end col-->

    <div class="col-xl-8 col-lg-7">
        <div class="card">
            <div class="card-body">
                <ul class="nav nav-pills bg-nav-pills nav-justified mb-3">
                    <li class="nav-item">
                        <a href="#aboutme" data-toggle="tab" aria-expanded="false" class="nav-link rounded-0 active">
                            About
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#settings" data-toggle="tab" aria-expanded="false" class="nav-link rounded-0">
                            Settings
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#timeline" data-toggle="tab" aria-expanded="true" class="nav-link rounded-0 ">
                            Establishment
                        </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane" id="aboutme">

                        <h5 class="text-uppercase"><i class="mdi mdi-briefcase mr-1"></i>
                            Experience</h5>

                        <div class="timeline-alt pb-0">
                            <div class="timeline-item">
                                <i class="mdi mdi-circle bg-info-lighten text-info timeline-icon"></i>
                                <div class="timeline-item-info">
                                    <h5 class="mt-0 mb-1">Lead designer / Developer</h5>
                                    <p class="font-14">websitename.com <span class="ml-2 font-12">Year: 2015 - 18</span></p>
                                    <p class="text-muted mt-2 mb-0 pb-3">Everyone realizes why a new common language
                                        would be desirable: one could refuse to pay expensive translators.
                                        To achieve this, it would be necessary to have uniform grammar,
                                        pronunciation and more common words.</p>
                                </div>
                            </div>

                        </div>
                        <!-- end timeline -->        

                    </div> <!-- end tab-pane -->
                    <!-- end about me section content -->

                    <div class="tab-pane show active" id="timeline">

                    
                    </div>
                    <!-- end timeline content-->

                    <div class="tab-pane" id="settings">
                    <form action="{{route('provider_profiles.store')}}" method="POST">
                        @csrf
                        <input type="text" name="profile_category" value="profile" hidden />
                            <h5 class="mb-4 text-uppercase"><i class="mdi mdi-account-circle mr-1"></i> Personal Info</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="firstname">Who Should We Call you ?</label>
                                    <input type="text" class="form-control" id="firstname" name="username" value="{{empty($profile->username)?'': $profile->username}}" placeholder="User Name">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="lastname">Gender</label>
                                        <div class="mt-2">
                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" id="customRadio3" name="gender" value="M" class="custom-control-input">
                                                <label class="custom-control-label" for="customRadio3">Male</label>
                                            </div>
                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" id="customRadio4" name="gender" value="F" class="custom-control-input">
                                                <label class="custom-control-label" for="customRadio4">Female</label>
                                            </div>
                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" id="customRadio4" name="gender" value="O" class="custom-control-input">
                                                <label class="custom-control-label" for="customRadio4">Other</label>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- end col -->
                            </div> <!-- end row -->

                            <div class="row">
                                <div class="form-group mb-2 col-md-6">
                                    <label for="country_id">Country</label>
                                    <select class="custom-select mb-3" name="country_id" required>
                                        @foreach ($countries as $country)
                                        <option value="{{$country->id}}" >{{$country->name}}</option>
                                        @endforeach
                                    </select> 
                                    @error('country_id')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror  
                                </div>
                                <div class="form-group mb-2 col-md-6">
                                    <label for="city_id">City</label>
                                    <select class="custom-select mb-3" name="city_id" required>
                                        @foreach ($cities as $city)
                                        <option value="{{$city->id}}" >{{$city->name}}</option>
                                        @endforeach
                                    </select> 
                                    @error('city_id')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror  
                                </div>
                            </div> <!-- end row -->

                            <div class="text-right">
                                <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
                            </div>
                        </form>
                        <br>
                        @hasanyrole('doctor|owner')
                        @else
                        <form action="{{route('provider_profiles.store')}}" method="POST">
                            @csrf
                            <h5 class="mb-3 text-uppercase bg-light p-2"><i class="mdi mdi-office-building mr-1"></i> Profile Category</h5>
                            <div class="row">
                                <input type="text" name="profile_category" value="profile-category" hidden/>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="lastname">Who Are You</label>
                                        <div class="mt-2">
                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" id="customRadio34" name="category" value="owner" class="custom-control-input">
                                                <label class="custom-control-label" for="customRadio34">Establishment Owner</label>
                                            </div>
                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" id="customRadio43" name="category" value="both" class="custom-control-input">
                                                <label class="custom-control-label" for="customRadio43">Both Doctor and Establishment Owner</label>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- end col -->
                            </div> <!-- end row -->

                            <div class="text-right">
                                <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
                            </div>
                        </form>
                        @endhasanyrole
                        <br>
                        @if(empty($profile->medical_registrations[0]->id))
                        @else
                        <form action="{{route('provider_profiles.store')}}" method="POST">
                            @csrf
                            <h5 class="mb-3 text-uppercase bg-light p-2"><i class="mdi mdi-earth mr-1"></i> Medical Registration</h5>
                            <div class="row">
                                <input type="text" name="profile_category" value="medical-registration" hidden/>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="registration_number">Registration Number</label>
                                        <input type="text" class="form-control" id="registration_number" placeholder="Registration Number">
                                    </div>
                                </div>
                                <div class="form-group mb-2 col-md-6">
                                    <label for="location">Medical Registration Council</label>
                                    <select class="custom-select mb-3" name="medical_registration_id" required>
                                        <option selected disabled>Medical Registration Council</option>
                                        @foreach ($medical_councils as $medical_council)
                                        <option value="{{$medical_council->id}}" >{{$medical_council->name}}</option>
                                        @endforeach
                                    </select> 
                                    @error('medical_registration_id')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror  
                                </div>
                            </div> <!-- end row -->
                            
                            <div class="text-right">
                                <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
                            </div>
                        </form>
                        @endif
                        <br>
                        <form action="{{route('provider_profiles.store')}}" method="POST">
                            @csrf
                            <h5 class="mb-3 text-uppercase bg-light p-2"><i class="mdi mdi-earth mr-1"></i> Medical Qualifications</h5>
                            <div class="row">
                                <input type="text" name="profile_category" value="education-qualification" hidden/>
                                <div class="form-group mb-2 col-md-6">
                                    <label for="medical_courses">Medical Course</label>
                                    <select class="custom-select mb-3" name="medical_course_id" required>
                                        <option selected disabled>Medical Course</option>
                                        @foreach ($medical_courses as $medical_course)
                                        <option value="{{$medical_course->id}}" >{{$medical_course->name}}</option>
                                        @endforeach
                                    </select> 
                                    @error('medical_course_id')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror  
                                </div>
                                <div class="form-group mb-2 col-md-6">
                                    <label for="location">Medical Institute</label>
                                    <select class="custom-select mb-3" name="medical_institute_id" required>
                                        <option selected disabled>Medical Institute</option>
                                        @foreach ($medical_institutes as $medical_institute)
                                        <option value="{{$medical_institute->id}}" >{{$medical_institute->name}}</option>
                                        @endforeach
                                    </select> 
                                    @error('medical_institutes')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror  
                                </div>
                            </div> <!-- end row -->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="year_of_complition">Year of Complition</label>
                                        <input type="text" class="form-control" id="year_of_complition" name="year_of_complition" placeholder="Year Of Complition">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="year_of_experience">Year of Experience</label>
                                        <input type="text" class="form-control" id="year_of_experience" name="year_of_experience" placeholder="Year of Experience">
                                    </div>
                                </div>
                            </div> <!-- end row -->
                            <div class="text-right">
                                <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
                            </div>
                        </form>
                        <br>
                        <form action="{{route('provider_profiles.store')}}" method="POST">
                            @csrf
                            <input type="text" name="profile_category" value="establishment" hidden />
                                <h5 class="mb-4 text-uppercase bg-light p-2"><i class="mdi mdi-account-circle mr-1"></i> Establishment Information</h5>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="firstname">Establishment Name</label>
                                            <input type="text" class="form-control" name="name" id="firstname" placeholder="User Name">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="firstname">Mobile Number</label>
                                            <input type="text" class="form-control" name="mobile_number" id="firstname" placeholder="User Name">
                                        </div>
                                    </div>
                                </div> <!-- end row -->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="firstname">Email</label>
                                            <input type="email" class="form-control" name="email" id="firstname" placeholder="User Name">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="firstname">Andress</label>
                                            <input type="text" class="form-control" name="address" id="firstname" placeholder="User Name">
                                        </div>
                                    </div>
                                </div> <!-- end row -->
    
                                <div class="row">
                                    <div class="form-group mb-2 col-md-6">
                                        <label for="location">Country</label>
                                        <select class="custom-select mb-3" name="country_id" required>
                                            <option selected disabled>Country</option>
                                            @foreach ($countries as $country)
                                            <option value="{{$country->id}}" >{{$country->name}}</option>
                                            @endforeach
                                        </select> 
                                        @error('location')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror  
                                    </div>
                                    <div class="form-group mb-2 col-md-6">
                                        <label for="city">City</label>
                                        <select class="custom-select mb-3" name="city_id" required>
                                            <option selected disabled>City</option>
                                            @foreach ($cities as $city)
                                            <option value="{{$city->id}}" >{{$city->name}}</option>
                                            @endforeach
                                        </select> 
                                        @error('city')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror  
                                    </div>
                                </div> <!-- end row -->
                                <div class="form-group mb-2 col-md-6">
                                    <label for="category">Category</label>
                                    <select class="custom-select mb-3" name="category" required>
                                        <option selected disabled>Category</option>
                                        @foreach (getEstablishmentCategories() as $category)
                                        <option value="{{$category['value']}}" >{{$category['option']}}</option>
                                        @endforeach
                                    </select> 
                                    @error('category')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror  
                                </div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
                                </div>
                            </form>
                            <br>
                            <form action="{{route('provider_profiles.store')}}" method="POST">
                                @csrf
                                <h5 class="mb-3 text-uppercase bg-light p-2"><i class="mdi mdi-earth mr-1"></i> Medical Specialization</h5>
                                <div class="row">
                                    <input type="text" name="profile_category" value="specializations" hidden/>
                                    <div class="form-group mb-2 col-md-6">
                                        <label for="specializations">Medical Specializations</label>
                                        <select class="custom-select mb-3" name="specialization_id" required>
                                            <option selected disabled>Medical Specializations</option>
                                            @foreach ($specializations as $specialization)
                                            <option value="{{$specialization->id}}" >{{$specialization->name}}</option>
                                            @endforeach
                                        </select> 
                                        @error('medical_registration_id')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror  
                                    </div>
                                </div> <!-- end row -->
                                
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
                                </div>
                            </form>
                            <br>
                            <form action="{{route('provider_profiles.store')}}" method="POST">
                                @csrf
                                <h5 class="mb-3 text-uppercase bg-light p-2"><i class="mdi mdi-earth mr-1"></i> Medical Procedures</h5>
                                <div class="row">
                                    <input type="text" name="profile_category" value="procedures" hidden/>
                                    <div class="form-group mb-2 col-md-6">
                                        <label for="location">Medical Procedures</label>
                                        <select class="custom-select mb-3" name="procedure_id" required>
                                            <option selected disabled>Medical Procedures</option>
                                            @foreach ($procedures as $procedure)
                                            <option value="{{$procedure->id}}" >{{$procedure->name}}</option>
                                            @endforeach
                                        </select> 
                                        @error('procedure_id')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror  
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="price">Price</label>
                                            <input type="text" class="form-control" name="price" id="price" placeholder="Price">
                                        </div>
                                    </div>
                                </div> <!-- end row -->
                                <div class="row">
                                    <div class="form-group mb-2 col-md-6">
                                        <label for="location">Currency</label>
                                        <select class="custom-select mb-3" name="currency" required>
                                            <option selected disabled>Currency</option>
                                            @foreach (getCurrency() as $currency)
                                            <option value="{{$currency['value']}}" >{{$currency['option']}}</option>
                                            @endforeach
                                        </select> 
                                        @error('procedure_id')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror  
                                    </div>
                                </div>
                                
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
                                </div>
                            </form>
                            <br>
                            <form action="{{route('provider_profiles.store')}}" method="POST">
                                @csrf
                                <h5 class="mb-3 text-uppercase bg-light p-2"><i class="mdi mdi-earth mr-1"></i> Consaltation Fee</h5>
                                <div class="row">
                                    <input type="text" name="profile_category" value="consaltation-fee" hidden/>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="price">Price</label>
                                            <input type="text" class="form-control" id="price" placeholder="Price">
                                        </div>
                                    </div>
                                    <div class="form-group mb-2 col-md-6">
                                        <label for="location">Currency</label>
                                        <select class="custom-select mb-3" name="currency" required>
                                            <option selected disabled>Currency</option>
                                            @foreach (getCurrency() as $currency)
                                            <option value="{{$currency['value']}}" >{{$currency['option']}}</option>
                                            @endforeach
                                        </select> 
                                        @error('procedure_id')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror  
                                    </div>
                                </div> <!-- end row -->

                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
                                </div>
                            </form>
                            <br>

                            <form action="{{route('provider_profiles.store')}}" method="POST" enctype="multipart/form-data">
                                @csrf
                                <h5 class="mb-3 text-uppercase bg-light p-2"><i class="mdi mdi-earth mr-1"></i> Profile verification</h5>
                                <div class="row">
                                    <input type="text" name="profile_category" value="verification" hidden/>
                                    @foreach ($required_verifications as $verification)
                                    <div class="col-md-12">
                                        <div class="form-group">
                                        <label for="price">{{$verification->name}}</label>
                                            <div class="input-group">
                                                <div class="custom-file">
                                                <input type="text" name="file[][verification_id]" value="{{$verification->id}}" hidden/>
                                                <input type="file" class="custom-file-input" name="file[][file]" id="inputGroupFile04-{{$verification->id}}">
                                                    <label class="custom-file-label" for="inputGroupFile04-{{$verification->id}}">Choose {{$verification->name}} file</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                </div> <!-- end row -->
                                
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
                                </div>
                            </form>
                    </div>
                    <!-- end settings content-->

                </div> <!-- end tab-content -->
            </div> <!-- end card body -->
        </div> <!-- end card -->
    </div> <!-- end col -->
</div>
@endsection