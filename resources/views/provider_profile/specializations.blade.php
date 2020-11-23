@extends('layouts.master')

@section('contents')
<form action="{{route('provider_profiles.store')}}" method="POST">
    @csrf
    <h5 class="mb-3 text-uppercase bg-light p-2"><i class="mdi mdi-earth mr-1"></i> Medical Specialization</h5>
    <div class="row">
        <input type="text" name="profile_category" value="specializations" hidden/>
        <div class="form-group mb-2 col-md-6">
            <label for="specializations">Medical Specializations</label>
            <select class="custom-select mb-3 @if($errors->has('specialization_id')) is-invalid @endif" name="specialization_id" required>
                <option selected disabled>Medical Specializations</option>
                @foreach ($specializations as $specialization)
                <option value="{{$specialization->id}}" >{{$specialization->name}}</option>
                @endforeach
            </select> 
            @if($errors->has('specialization_id'))
                <div class="invalid-feedback" style="display: block">
                    {{$errors->first('specialization_id')}}
                </div>
            @endif
        </div>
    </div> <!-- end row -->
    <div class="row">
        <div class="form-group mb-2 col-md-6">
            <label for="location">Medical Procedures</label>
            <select class="custom-select mb-3 @if($errors->has('procedure_id')) is-invalid @endif" name="procedure_id" required>
                <option selected disabled>Medical Procedures</option>
                @foreach ($procedures as $procedure)
                <option value="{{$procedure->id}}" >{{$procedure->name}}</option>
                @endforeach
            </select> 
            @if($errors->has('procedure_id'))
                <div class="invalid-feedback" style="display: block">
                    {{$errors->first('procedure_id')}}
                </div>
            @endif
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" class="form-control @if($errors->has('price')) is-invalid @endif" name="price" id="price" placeholder="Price">
            </div>
            @if($errors->has('price'))
                <div class="invalid-feedback" style="display: block">
                    {{$errors->first('price')}}
                </div>
            @endif
        </div>
    </div> <!-- end row -->
    <div class="row">
        <div class="form-group mb-2 col-md-6">
            <label for="location">Currency</label>
            <select class="custom-select mb-3 @if($errors->has('currency')) is-invalid @endif" name="currency" required>
                <option selected disabled>Currency</option>
                @foreach (getCurrency() as $currency)
                <option value="{{$currency['value']}}" >{{$currency['option']}}</option>
                @endforeach
            </select> 
            @if($errors->has('currency'))
                <div class="invalid-feedback" style="display: block">
                    {{$errors->first('currency')}}
                </div>
            @endif  
        </div>
    </div>
    Constultation Fee
    <hr>
    <div class="col-md-6">
        <div class="form-group">
            <label for="consaltation_price">Consaltation Price</label>
            <input type="text" class="form-control @if($errors->has('consaltation_price')) is-invalid @endif" id="consaltation_price" name="consaltation_price" placeholder="Constaltation Fee">
        </div>
        @if($errors->has('consaltation_price'))
            <div class="invalid-feedback" style="display: block">
                {{$errors->first('consaltation_price')}}
            </div>
        @endif
    </div>
    <div class="form-group mb-2 col-md-6">
        <label for="consaltation_currency">Currency</label>
        <select class="custom-select mb-3 @if($errors->has('consaltation_currency')) is-invalid @endif" name="consaltation_currency" required>
            <option selected disabled>Currency</option>
            @foreach (getCurrency() as $currency)
            <option value="{{$currency['value']}}" >{{$currency['option']}}</option>
            @endforeach
        </select> 
        @if($errors->has('consaltation_currency'))
            <div class="invalid-feedback" style="display: block">
                {{$errors->first('consaltation_currency')}}
            </div>
        @endif
    </div>
    <div class="text-right">
        <button type="submit" class="btn btn-primary mt-2"><i class="mdi mdi-content-save"></i> Save</button>
    </div>
</form>
@endsection