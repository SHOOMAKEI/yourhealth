<div id="update-medical_council-{{$medical_council->id}}" class="modal fade p-3" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="update-medical_council-{{$medical_council->id}}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="update-medical_council-{{$medical_council->id}}Label">{{__('medical_councils.create.form_header')}}</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <form action="{{route('medical_councils.update',['medical_council' => $medical_council->id])}}" method="POST">
                    @csrf
                    @method('PUT')
                        <div class="form-group mb-3">
                            <label for="name">{{__('medical_councils.create.name')}}</label>
                        <input type="text" id="name" name="name" value="{{$medical_council->name}}" class="form-control @error('name') is-invalid @enderror" placeholder="{{__('medical_councils.create.name')}}" required>
                            <div class="invalid-tooltip"> </div>
                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="form-group mb-3">
                            <label for="country">{{__('medical_councils.create.country')}}</label>
                            <select class="custom-select mb-3" name="country_id" required>
                                <option  disabled>{{__('medical_councils.create.country')}}</option>
                                @foreach (\App\Models\Country::all() as $country)
                                <option value="{{$country->id}}" @if($country->id == $medical_council->country_id) selected @endif>{{$country->name}}</option>
                                @endforeach
                            </select> 
                            @error('institute')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror  
                        </div>
        
                        <button type="submit" class="btn btn-primary">{{__('medical_councils.create.save')}}</button>
                    </form>                                    
                      
                </div> <!-- end card-body -->                                        
                      
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->