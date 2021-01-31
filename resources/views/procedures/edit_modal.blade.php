<div id="update-procedure-{{$procedure->id}}" class="modal fade p-3" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="update-procedure-{{$procedure->id}}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="update-procedure-{{$procedure->id}}Label">{{__('procedures.create.form_header')}}</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <form action="{{route('procedures.update',['procedure' => $procedure->id])}}" method="POST">
                    @csrf
                    @method('PUT')
                        <div class="form-group mb-3">
                            <label for="name">{{__('procedures.create.name')}}</label>
                        <input type="text" id="name" name="name" value="{{$procedure->name}}" class="form-control @error('name') is-invalid @enderror" placeholder="{{__('procedures.create.name')}}" required>
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
                      
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->