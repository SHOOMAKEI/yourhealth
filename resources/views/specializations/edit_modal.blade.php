<div id="update-specialization-{{$specialization->id}}" class="modal fade p-3" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="update-specialization-{{$specialization->id}}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="update-specialization-{{$specialization->id}}Label">{{__('specializations.create.form_header')}}</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <form action="{{route('specializations.update',['specialization' => $specialization->id])}}" method="POST">
                    @csrf
                    @method('PUT')
                        <div class="form-group mb-3">
                            <label for="name">{{__('specializations.create.name')}}</label>
                            <input type="text" id="name" name="name" value="{{$specialization->name}}" class="form-control @error('name') is-invalid @enderror" placeholder="{{__('specializations.create.name')}}" required>
                            <div class="invalid-tooltip"> </div>
                            @error('name')
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