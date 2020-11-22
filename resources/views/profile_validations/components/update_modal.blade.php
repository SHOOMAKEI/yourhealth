<div id="edit-{{$profile_validation->id}}-attachment" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="edit-{{$profile_validation->id}}-attachmentLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="edit-{{$profile_validation->id}}-attachmentLabel">Add new required attachment</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <form action="{{route('profile_validations.update',['profile_validation' => $profile_validation->id])}}" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="form-group mb-3">
                        <label for="name">{{__('profile_validations.create.name')}}</label>
                        <input type="text" id="name" name="name" value="{{$profile_validation->name}}" class="form-control @error('name') is-invalid @enderror" placeholder="{{__('profile_validations.create.name')}}" required>
                        <div class="invalid-tooltip"> </div>
                        @error('name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="form-group mb-3">
                        <label for="category">{{__('profile_validation.create.category')}}</label>
                        <select class="custom-select mb-3" name="category" required>
                            <option  disabled>{{__('profile_validation.create.category')}}</option>
                            @foreach (getEstablishmentCategories() as $category)
                            <option value="{{$category['value']}}" @if($category['value'] == $profile_validation->category) selected @endif>{{$category['option']}}</option>
                            @endforeach
                        </select> 
                        @error('institute')
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