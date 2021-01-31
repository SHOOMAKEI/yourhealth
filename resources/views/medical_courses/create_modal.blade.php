<div id="add-medical_courses" class="modal fade p-3" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="add-medical_coursesLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="add-medical_coursesLabel">{{__('packages.create.form_header')}}</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <form action="{{route('medical_courses.store')}}" method="POST">
                    @csrf
                        <div class="form-group mb-3">
                            <label for="name">{{__('medical_courses.create.name')}}</label>
                            <input type="text" id="name" name="name" class="form-control @error('name') is-invalid @enderror" placeholder="{{__('medical_courses.create.name')}}" required>
                            <div class="invalid-tooltip"> </div>
                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="form-group mb-3">
                            <label for="award_code">{{__('medical_courses.create.award_code')}}</label>
                        <input type="text" id="award_code" name="award_code"  class="form-control @error('award_code') is-invalid @enderror" placeholder="{{__('medical_courses.create.award_code')}}" required>
                            <div class="invalid-tooltip"> </div>
                            @error('award_code')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="form-group mb-3">
                            <label for="medical_courses_id">{{__('medical_courses.create.institute')}}</label>
                            <select class="custom-select mb-3" name="medical_courses_id" required>
                                <option  disabled>{{__('medical_courses.create.institute')}}</option>
                                @foreach (\App\Models\MedicalInstitute::all() as $institute)
                                <option value="{{$institute->id}}" >{{$institute->name}}</option>
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