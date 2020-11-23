@extends('layouts.master')

@section('contents')
    <div class="container mt-4">
        <div class="row">
            <div class="card col-12">
                <div class="card-header">
                    <h5 class="text-uppercase p-2">
                        Medical Specializations
                    </h5>
                </div>
                <div class="card-body">
                    <div class="col-md-12">
                        <form action="{{route('provider_profiles.store')}}" method="POST">
                            @csrf
                            <div class="row">
                                <input type="text" name="profile_category" value="specializations" hidden/>
                                <div class="form-group mb-2 col-md-6">
                                    <label for="specializations">Medical Specializations</label>
                                    <select class="custom-select mb-3 @if($errors->has('specialization_id')) is-invalid @endif" name="specialization_id"  required>
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
                            </div> <!-- end row -->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="price">Medical Procedure Price</label>
                                        <input type="text" class="form-control @if($errors->has('price')) is-invalid @endif" name="price" id="price" placeholder="Price">
                                    </div>
                                    @if($errors->has('price'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('price')}}
                                        </div>
                                    @endif
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group mb-2 col-md-6">
                                    <label for="location">Medical Procedure Currency</label>
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
                            <h5 class="text-uppercase p-2">
                                Constultation Fee
                            </h5>
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
                                <label for="consaltation_currency">Constaltation Currency</label>
                                <select class="custom-select mb-3 @if($errors->has('consaltation_currency')) is-invalid @endif" name="consaltation_currency" required>
                                    <option selected disabled> Constaltation Currency</option>
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
                    </div>
                </div>
            </div>
        </div> 
    </div> 
@endsection



