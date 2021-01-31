<div id="update-medical_institute-{{$medical_institute->id}}" class="modal fade p-3" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="update-medical_institute-{{$medical_institute->id}}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="update-medical_institute-{{$medical_institute->id}}Label">{{__('medical_institutes.create.form_header')}}</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <form action="{{route('medical_institutes.update',['medical_institute' => $medical_institute->id])}}" method="POST">
                    @csrf
                    @method('PUT')
                        <div class="form-group mb-3">
                            <label for="name">{{__('medical_institutes.create.name')}}</label>
                        <input type="text" id="name" name="name" value="{{$medical_institute->name}}" class="form-control @error('name') is-invalid @enderror" placeholder="{{__('medical_institutes.create.name')}}" required>
                            <div class="invalid-tooltip"> </div>
                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="form-group mb-3">
                            <label for="address">{{__('medical_institutes.create.address')}}</label>
                        <input type="text" id="address" name="address" value="{{$medical_institute->address}}" class="form-control @error('address') is-invalid @enderror" placeholder="{{__('medical_institutes.create.address')}}" required>
                            <div class="invalid-tooltip"> </div>
                            @error('address')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="form-group mb-3">
                            <label for="location">{{__('medical_institutes.create.location')}}</label>
                            <select class="custom-select mb-3" name="location" required>
                                <option  disabled>{{__('medical_institutes.create.location')}}</option>
                                @foreach (\App\Models\Country::all() as $country)
                                <option value="{{$country->name}}" @if($country->name == $medical_institute->location) selected @endif>{{$country->name}}</option>
                                @endforeach
                            </select> 
                            @error('institute')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror  
                        </div>
        
                        <button type="submit" class="btn btn-primary">{{__('medical_institutes.create.save')}}</button>
                    </form>                                   
                      
                </div> <!-- end card-body -->                                        
                      
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->