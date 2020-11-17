@extends('layouts.master')

@section('header')
{{__('procedures.create.header')}}
@endsection

@section('contents')
<div class="col-lg-12">
    <div class="card">
        <div class="card-body">

        <h4 class="header-title">{{__('procedures.create.form_header')}}</h4>
            <p class="text-muted font-14">
                
            </p>
        <form action="{{route('procedures.store')}}" method="POST">
            @csrf
                <div class="form-group mb-3">
                    <label for="name">{{__('procedures.create.name')}}</label>
                    <input type="text" id="name" name="name" class="form-control @error('name') is-invalid @enderror" placeholder="{{__('procedures.create.name')}}" required>
                    <div class="invalid-tooltip"> </div>
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <button type="submit" class="btn btn-primary">{{__('procedures.create.save')}}</button>
            </form>                                           
              
        </div> <!-- end card-body -->
    </div> <!-- end card -->
</div>
@endsection