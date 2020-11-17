@extends('layouts.master')

@section('header')
{{__('profile_validations.index.header')}}
@endsection

@section('menu-right')
<a href="{{route('profile_validations.create')}}" class="btn btn-success btn-sm"><i class=" uil-pen"></i>{{__('profile_validations.index.add_new')}}</a>
@endsection
@section('contents')
<table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
    <thead>
        <tr>
            <th>{{__('profile_validations.index.table.name')}}</th>
            <th>{{__('profile_validations.index.table.category')}}</th>
            <th>{{__('profile_validations.index.table.more')}}</th>
        </tr>
    </thead>


    <tbody>
        @foreach ($profile_validations as $profile_validation)
            <tr>
                <td>
                   {{$profile_validation->name}}
                </td>
                <td>
                    {{$profile_validation->category}}
                 </td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="dripicons-gear noti-icon"></i>&nbsp; More
                        </button>
                        <div class="dropdown-menu">
                        {{-- <a class="dropdown-item" href="{{route('profile_validations.show',['profile_validation' => $profile_validation->id])}}" class="action-icon" data-toggle="modal" data-target="#feature-modal-{{$profile_validation->id}}"> <i class="mdi mdi-eye"></i> {{__('profile_validations.index.action.show')}}</a> --}}
                           
                            <a class="dropdown-item" href="{{route('profile_validations.edit',['profile_validation' => $profile_validation->id])}}" class="action-icon"> <i class="mdi mdi-pencil"></i> {{__('profile_validations.index.action.edit')}}</a>
                            <form action="{{route('profile_validations.destroy',['profile_validation' => $profile_validation->id])}}">
                                @csrf
                                @method('DELETE')
                                <button class="dropdown-item"  class="action-icon text-danger"> <i class="mdi mdi-delete text-danger"></i> {{__('profile_validations.index.action.delete')}}</button>
                            </form>
                            
                        </div>
                    </div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
                                                
@endsection

                                                