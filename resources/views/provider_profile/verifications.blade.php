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
                    <div class="col-md-5">
                        <form action="{{route('provider_profiles.store')}}" method="POST" enctype="multipart/form-data" class="needs-validation" novalidate>
                            @csrf
                            <div class="row">
                                <input type="text" name="profile_category" value="verification" hidden/>
                                @foreach ($required_verifications as $verification)
                                    <div class="form-group">
                                        <label>{{$verification->name}}</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input type="text" name="file[][verification_id]" value="{{$verification->id}}" hidden/>
                                                <input type="file" class="custom-file-input" name="file[][file]" id="file-input-{{$verification->id}}">
                                                <label class="custom-file-label" for="file-input-{{$verification->id}}">Choose file</label>
                                            </div>
                                        </div>
                                    </div>
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