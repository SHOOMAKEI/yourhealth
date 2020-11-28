@extends('layouts.master')

@section('contents')
    <div class="container mt-4">
        <div class="row">
            <div class="card col-12">
                <div class="card-header">
                    <h5 class="text-uppercase p-2">
                        Attachments
                    </h5>
                </div>
                <div class="card-body">
                    @if (!empty($profile->getMedia('provider_verificaiton_files')))
                        <div class="col-md-12">
                            <h5 class="text-uppercase p-2">
                              Submitted  Attachments
                            </h5>
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
                        </div><br><br>
                    @endif
                    <div class="col-md-5">
                        <form action="{{route('provider_profiles.store')}}" method="POST" enctype="multipart/form-data" class="needs-validation" novalidate>
                            @csrf
                            <div class="row">
                                <input type="text" name="profile_category" value="verification" hidden/>
                                @foreach ($required_verifications as $verification)
                                @if (!empty($establishment->category)&&($establishment->category==$verification->category))
                                    <div class="form-group mb-5">
                                        <label>{{$verification->name}}</label>
                                        <input type="text" name="file[][verification_id]" value="{{$verification->id}}" hidden/>
                                        <input type="file" name="file[][file]" id="file-input-{{$verification->id}}" class="form-control-file">
                                        @if($errors->has('verification_id'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('verification_id')}}
                                        </div>
                                        @endif 
                                        @if($errors->has('file.1.file'))
                                            <div class="invalid-feedback" style="display: block">
                                                {{$errors->first('file.1.file')}}
                                            </div>
                                        @endif 
                                    </div>
                                @elseif($user->hasRole('doctor')&&($verification->category == 'doctor'))
                                    <div class="form-group mb-5">
                                        <label>{{$verification->name}}</label>
                                        <input type="text" name="file[][verification_id]" value="{{$verification->id}}" hidden/>
                                        <input type="file" name="file[][file]" id="file-input-{{$verification->id}}" class="form-control-file">
                                        @if($errors->has('verification_id'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('verification_id')}}
                                        </div>
                                        @endif 
                                        @if($errors->has('file.0.file'))
                                            <div class="invalid-feedback" style="display: block">
                                                {{$errors->first('file.0.file')}}
                                            </div>
                                        @endif 
                                    </div>
                                @endif
                                    
                                @endforeach
                            </div>
                            <div class="text-right">
                                <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div> 
@endsection