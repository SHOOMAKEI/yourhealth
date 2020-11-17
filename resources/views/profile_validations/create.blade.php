@extends('layouts.master')

@section('header')
{{__('profile_validations.create.header')}}
@endsection

@section('contents')
<div class="col-lg-12">
    <div class="card">
        <div class="card-body">

        <h4 class="header-title">{{__('profile_validations.create.form_header')}}</h4>
            <p class="text-muted font-14">
                
            </p>
        <form action="{{route('profile_validations.store')}}" method="POST">
            @csrf
                <div class="form-group mb-3">
                    <label for="name">{{__('profile_validations.create.name')}}</label>
                    <input type="text" id="name" name="name" class="form-control @error('name') is-invalid @enderror" placeholder="{{__('profile_validations.create.name')}}" required>
                    <div class="invalid-tooltip"> </div>
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group mb-3">
                    <label for="category">{{__('profile_validations.create.category')}}</label>
                    <select class="custom-select mb-3" name="category" required>
                        <option  disabled>{{__('profile_validations.create.category')}}</option>
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
                <button type="submit" class="btn btn-primary">{{__('profile_validations.create.save')}}</button>
            </form>                                           
              
        </div> <!-- end card-body -->
    </div> <!-- end card -->
</div>
@endsection