@extends('layouts.master')

@section('header')
{{__('specializations.create.header')}}
@endsection

@section('contents')
<div class="col-lg-12">
    <div class="card">
        <div class="card-body">

        <h4 class="header-title">{{__('specializations.create.form_header')}}</h4>
            <p class="text-muted font-14">
                
            </p>
        <form action="{{route('specializations.store')}}" method="POST">
            @csrf
                <div class="form-group mb-3">
                    <label for="name">{{__('specializations.create.name')}}</label>
                    <input type="text" id="name" name="name" class="form-control @error('name') is-invalid @enderror" placeholder="{{__('specializations.create.name')}}" required>
                    <div class="invalid-tooltip"> </div>
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <button type="submit" class="btn btn-primary">{{__('specializations.create.save')}}</button>
            </form>                                           
              
        </div> <!-- end card-body -->
    </div> <!-- end card -->
</div>
@endsection