<div id="update-medical_course-{{$medical_course->id}}" class="modal fade p-3" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="update-medical_course-{{$medical_course->id}}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="update-medical_course-{{$medical_course->id}}Label">{{__('medical_courses.create.form_header')}}</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <form action="{{route('medical_courses.update',['medical_course' => $medical_course->id])}}" method="POST">
                    @csrf
                    @method('PUT')
                        <div class="form-group mb-3">
                            <label for="name">{{__('medical_courses.create.name')}}</label>
                        <input type="text" id="name" name="name" value="{{$medical_course->name}}" class="form-control @error('name') is-invalid @enderror" placeholder="{{__('medical_courses.create.name')}}" required>
                            <div class="invalid-tooltip"> </div>
                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="form-group mb-3">
                            <label for="award_code">{{__('medical_courses.create.award_code')}}</label>
                        <input type="text" id="award_code" name="award_code" value="{{$medical_course->award_code}}" class="form-control @error('award_code') is-invalid @enderror" placeholder="{{__('medical_courses.create.award_code')}}" required>
                            <div class="invalid-tooltip"> </div>
                            @error('award_code')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="form-group mb-3">
                            <label for="medical_course_id">{{__('medical_course.create.institute')}}</label>
                            <select class="custom-select mb-3" name="medical_course_id" required>
                                <option  disabled>{{__('medical_course.create.institute')}}</option>
                                @foreach (\App\Models\MedicalInstitute::all() as $institute)
                                <option value="{{$institute->id}}" @if($institute->id == $medical_course->medical_course_id) selected @endif>{{$institute->name}}</option>
                                @endforeach
                            </select> 
                            @error('institute')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror  
                        </div>
        
                        <button type="submit" class="btn btn-primary">{{__('medical_courses.create.save')}}</button>
                    </form>                                          
                      
                </div> <!-- end card-body -->                                        
                      
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->