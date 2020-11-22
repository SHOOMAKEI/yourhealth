@extends('layouts.master')

@section('contents')
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
@endsection