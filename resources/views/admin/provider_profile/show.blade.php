
<div id="feature-modal-{{$profile->id}}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
            <h4 class="modal-title" id="standard-modalLabel">{{$profile->username}}  Profile Information</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <ul class="nav nav-pills bg-nav-pills nav-justified mb-3">
                    <li class="nav-item">
                        <a href="#home1" data-toggle="tab" aria-expanded="false" class="nav-link rounded-0 active">
                            <i class="mdi mdi-home-variant d-md-none d-block"></i>
                            <span class="d-none d-md-block">Profile</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#profile1" data-toggle="tab" aria-expanded="true" class="nav-link rounded-0">
                            <i class="mdi mdi-account-circle d-md-none d-block"></i>
                            <span class="d-none d-md-block">Attachments</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#settings1" data-toggle="tab" aria-expanded="false" class="nav-link rounded-0">
                            <i class="mdi mdi-settings-outline d-md-none d-block"></i>
                            <span class="d-none d-md-block">Establishments</span>
                        </a>
                    </li>
                </ul>
                
                <div class="tab-content">
                    <div class="tab-pane show active" id="home1">
                        <div class="card text-center">
                            <div class="card-body">
                                <img src="{{$profile->account->profile_photo_url }}" class="rounded-circle avatar-lg img-thumbnail"
                                alt="profile-image">
                
                                <h4 class="mb-0 mt-2">{{$profile->username}}</h4>
                
                
                                <div class="text-left mt-3">
                                    <h4 class="font-13 text-uppercase">education Qualification :</h4>
                                    @foreach ($profile->education_qualifications as $qualification)
                                    <p class="text-muted font-13 mb-3">
                                        {{$qualification->medical_course->award_code}}&nbsp;{{$qualification->medical_course->name}} &nbsp; at <br>
                                        {{$qualification->medical_institute->name}} &nbsp; ({{$qualification->year_of_complition}})
                                        
                                    </p class="text-muted font-13 mb-3">
                                    @endforeach
                                   <p class="text-muted font-13 mb-3">
                                    {{$profile->education_qualifications->sum('year_of_experience')}} &nbsp;Years of Experience
                                   </p>
                
                                   <p>
                                       Specializations
                                   </p>
                                   <p class="text-muted font-13 mb-3">
                                    @foreach ($profile->medical_specializations as $specialization)
                                    <span class="badge badge-outline-secondary badge-pill">{{$specialization->name}}</span>&nbsp;
                                    @endforeach
                                   </p>
                                   <p>
                                    Procedures
                                    </p>
                                    <p class="text-muted font-13 mb-3">
                                    @foreach ($profile->medical_procedures as $procedure)
                                    <span class="badge badge-outline-secondary badge-pill">{{$procedure->name}} </span>&nbsp;
                                    @money($procedure->pivot->price,$procedure->pivot->currency,true)<br>
                                    @endforeach
                                    </p>
                                    <p class="text-muted mb-2 font-13"><strong>User Name :</strong> <span class="ml-2">{{ $profile->username}}
                                        </span></p>
                
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
                                    
                                </div>
                
                                </ul>
                            </div> <!-- end card-body -->
                        </div> <!-- end card -->
                    </div>
                    <div class="tab-pane" id="profile1">
                        
                        @foreach ($profile->getMedia('provider_verificaiton_files') as $attachment)
                            <div class="col-xl-12 col-lg-12">
                                <div class="card m-1 shadow-none border">
                                    <div class="p-2">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <div class="avatar-sm">
                                                    <span class="avatar-title bg-light text-secondary rounded">
                                                        <i class="mdi mdi-file-pdf-outline font-18"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col pl-0">
                                                <a href="{{$attachment->getUrl()}}" class="text-muted font-weight-bold">{{$attachment->name}}.{{str_replace('application/','',$attachment->mime_type)}}</a>
                                                <p class="mb-0 font-13">{{round(($attachment->size/1024)/1024, 2)}} MB</p>
                                            </div>
                                        </div> <!-- end row -->
                                    </div> <!-- end .p-2-->
                                </div> <!-- end col -->
                            </div>
                        @endforeach
                        
                    </div>
                    <div class="tab-pane" id="settings1">
                        <div class="card">
                            <div class="card-body">
                                
                                <p class="text-muted font-13"> 
                                @foreach ($profile->establishments as $establishment)
                                    
                                
                                <div class="text-left">
                                    <p class="text-muted fist-capital"><strong>{{$establishment->category}} &nbsp; Name :</strong> <span class="ml-2">{{$establishment->name}}&nbsp; {{$establishment->category}}</span></p>
                
                                    <p class="text-muted"><strong>Mobile :</strong><span class="ml-2">{{$establishment->mobile_number}}</span></p>
                
                                    <p class="text-muted"><strong>Email :</strong> <span class="ml-2">{{$establishment->email}}</span></p>
                
                                    <p class="text-muted"><strong>Address :</strong> <span class="ml-2">{{$establishment->address}}</span></p>
                                    <p class="text-muted"><strong>Location :</strong> <span class="ml-2">{{$establishment->country->name}}, &nbsp; {{$establishment->city->name}}</span></p>
                                    @role('owner')
                                    <p class="text-muted"><strong>Position :</strong> <span class="ml-2">Owner</span></p>
                                    @else
                                    <p class="text-muted"><strong>Position :</strong> <span class="ml-2">Owner</span></p>
                                    @endrole
                                </div>
                                <br>
                                <hr>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
                                                                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->