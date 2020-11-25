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
                                    <select class="select2 form-control select2-multiple @if($errors->has('specialization')) is-invalid @endif"  data-toggle="select2" multiple="multiple" data-placeholder="Select your specializations" name="specialization[][id]"  required>
                                       @if (!empty($profile_specializations))
                                            @foreach ($profile_specializations as $specialization)
                                            <option value="{{$specialization->id}}" selected>{{$specialization->name}}</option>
                                        @endforeach
                                       @endif
                                        @foreach ($specializations as $specialization)
                                        <option value="{{$specialization->id}}">{{$specialization->name}}</option>
                                        @endforeach
                                    </select> 
                                    @if($errors->has('specialization'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('specialization.*.id')}}
                                        </div>
                                    @endif
                                </div>
                            </div> <!-- end row -->
                            <br><br>
                            <div class="row input_fields_wrap_procedures">
                                <div class="form-group mb-2 col-md-4">
                                    <label for="location">Medical Procedures</label>
                                    <select class="custom-select mb-3 @if($errors->has('procedure')) is-invalid @endif" name="procedure[1][id]" required>
                                        @foreach ($procedures as $procedure)
                                        <option value="{{$procedure->id}}" >{{$procedure->name}}</option>
                                        @endforeach
                                    </select> 
                                    @if($errors->has('procedure'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('procedure')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="price">Medical Procedure Price</label>
                                        <input type="text" class="form-control @if($errors->has('price')) is-invalid @endif" name="procedure[1][price]" id="price" placeholder="Price">
                                    </div>
                                    @if($errors->has('price'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('price')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="location">Medical Procedure Currency</label>
                                    <select class="custom-select mb-3 @if($errors->has('currency')) is-invalid @endif" name="procedure[1][currency]" required>
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
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <button type="button" class="btn btn-primary add_field_button_procedure"><i class="uil-plus"></i> </button>
                                    </div>
                                </div>
                            </div> <!-- end row -->
                        
                            <h5 class="text-uppercase p-2">
                                Constultation Fee
                            </h5>
                            <hr>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="consaltation_price">Consaltation Price</label>
                                    <input type="text" class="form-control @if($errors->has('consaltation_price')) is-invalid @endif" id="consaltation_price" value="{{!empty($consultation->price)? $consultation->price: ''}}" name="consaltation_price" placeholder="Constaltation Fee">
                                </div>
                                @if($errors->has('consaltation_price'))
                                    <div class="invalid-feedback" style="display: block">
                                        {{$errors->first('consaltation_price')}}
                                    </div>
                                @endif
                            </div>
                            <div class="form-group mb-2 col-md-6">
                                <label for="consaltation_currency">Constaltation Currency</label
                                <select class="custom-select mb-3 @if($errors->has('consaltation_currency')) is-invalid @endif" name="consaltation_currency" required>
                                    @foreach (getCurrency() as $currency)
                                    <option value="{{$currency['value']}}" {{!empty($consultation->currency) && ($consultation->currency == $currency['value'])? 'selected': ''}}>{{$currency['option']}}</option>
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

<script>
	 $(document).ready(function() {
	var max_fields      = 10; //maximum input boxes allowed
	var wrapper   		= $(".input_fields_wrap_procedures"); //Fields wrapper
	var add_button      = $(".add_field_button_procedure"); //Add button ID
	
	var x = 1; //initlal text box count
	$(add_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
			$(wrapper).append(`
					<div class="row">
						 <div class="form-group mb-2 col-md-4 added-${x}">
                                    <label for="location">Medical Procedures</label>
                                    <select class="custom-select mb-3 @if($errors->has('procedure')) is-invalid @endif" name="procedure[${x}][id]" required>
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
                                <div class="col-md-3 added-${x}">
                                    <div class="form-group">
                                        <label for="price">Medical Procedure Price</label>
                                        <input type="text" class="form-control @if($errors->has('price')) is-invalid @endif" name="procedure[${x}][price]" id="price" placeholder="Price">
                                    </div>
                                    @if($errors->has('price'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('price')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group col-md-3 added-${x}">
                                    <label for="location">Medical Procedure Currency</label>
                                    <select class="custom-select mb-3 @if($errors->has('currency')) is-invalid @endif" name="procedure[${x}][currency]" required>
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
						<div class="form-group col-lg-3 mt-4 pt-1">
							<a href="#" class="btn btn-danger btn-circle remove_field">
								<i class="fas fa-trash"></i>
							</a>
                        </div>
                    </div>`); //add input box
		}
	});
	
	$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(`.added-${x}`).parent('div').remove(); x--;
	})

});
</script>
@endsection



