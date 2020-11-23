<div id="add-medical_institute" class="modal fade p-3" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="add-medical_instituteLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="add-medical_instituteLabel">{{__('packages.create.form_header')}}</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <form action="{{route('medical_institutes.store')}}" method="POST">
                    @csrf
                        <div class="form-group mb-3">
                            <label for="name">{{__('medical_institutes.create.name')}}</label>
                            <input type="text" id="name" name="name" class="form-control @error('name') is-invalid @enderror" placeholder="{{__('medical_institutes.create.name')}}" required>
                            <div class="invalid-tooltip"> </div>
                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="form-group mb-3">
                            <label for="address">{{__('medical_institutes.create.address')}}</label>
                        <input type="text" id="address" name="address"  class="form-control @error('address') is-invalid @enderror" placeholder="{{__('medical_institutes.create.address')}}" required>
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
                                <option selected disabled>{{__('medical_institutes.create.location')}}</option>
                                @foreach (\App\Models\Country::all() as $country)
                                <option value="{{$country->name}}" >{{$country->name}}</option>
                                @endforeach
                            </select> 
                            @error('location')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror  
                        </div>
                                                              
                      
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                </form>                                           
                      
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->