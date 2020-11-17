@extends('layouts.master')

@section('header')
{{__('medical_courses.index.header')}}
@endsection

@section('menu-right')
<a href="{{route('medical_courses.create')}}" class="btn btn-success btn-sm"><i class=" uil-pen"></i>{{__('medical_courses.index.add_new')}}</a>
@endsection
@section('contents')
<table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
    <thead>
        <tr>
            <th>{{__('medical_courses.index.table.name')}}</th>
            <th>{{__('medical_courses.index.table.award_code')}}</th>
            <th>{{__('medical_courses.index.table.institute')}}</th>
            <th>{{__('medical_courses.index.table.more')}}</th>
        </tr>
    </thead>


    <tbody>
        @foreach ($medical_courses as $medical_course)
            <tr>
                <td>
                   {{$medical_course->name}}
                </td>
                <td>
                    {{$medical_course->award_code}}
                 </td>
                 <td>
                    {{$medical_course->institute->name}}
                 </td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="dripicons-gear noti-icon"></i>&nbsp; More
                        </button>
                        <div class="dropdown-menu">
                        {{-- <a class="dropdown-item" href="{{route('medical_courses.show',['medical_course' => $medical_course->id])}}" class="action-icon" data-toggle="modal" data-target="#feature-modal-{{$medical_course->id}}"> <i class="mdi mdi-eye"></i> {{__('medical_courses.index.action.show')}}</a> --}}
                            
                            <a class="dropdown-item" href="{{route('medical_courses.edit',['medical_course' => $medical_course->id])}}" class="action-icon"> <i class="mdi mdi-pencil"></i> {{__('medical_courses.index.action.edit')}}</a>
                            <form action="{{route('medical_courses.destroy',['medical_course' => $medical_course->id])}}">
                                @csrf
                                @method('DELETE')
                                <button class="dropdown-item"  class="action-icon text-danger"> <i class="mdi mdi-delete text-danger"></i> {{__('medical_courses.index.action.delete')}}</button>
                            </form>
                            
                        </div>
                    </div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
                                                
@endsection

                                                