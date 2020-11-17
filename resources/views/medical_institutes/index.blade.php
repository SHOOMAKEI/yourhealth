@extends('layouts.master')

@section('header')
{{__('medical_institutes.index.header')}}
@endsection

@section('menu-right')
<a href="{{route('medical_institutes.create')}}" class="btn btn-success btn-sm"><i class=" uil-pen"></i>{{__('medical_institutes.index.add_new')}}</a>
@endsection
@section('contents')
<table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
    <thead>
        <tr>
            <th>{{__('medical_institutes.index.table.name')}}</th>
            <th>{{__('medical_institutes.index.table.address')}}</th>
            <th>{{__('medical_institutes.index.table.location')}}</th>
            <th>{{__('medical_institutes.index.table.more')}}</th>
        </tr>
    </thead>


    <tbody>
        @foreach ($medical_institutes as $medical_institute)
            <tr>
                <td>
                   {{$medical_institute->name}}
                </td>
                <td>
                    {{$medical_institute->address}}
                 </td>
                 <td>
                    {{$medical_institute->location}}
                 </td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="dripicons-gear noti-icon"></i>&nbsp; More
                        </button>
                        <div class="dropdown-menu">
                        {{-- <a class="dropdown-item" href="{{route('medical_institutes.show',['medical_institute' => $medical_institute->id])}}" class="action-icon" data-toggle="modal" data-target="#feature-modal-{{$medical_institute->id}}"> <i class="mdi mdi-eye"></i> {{__('medical_institutes.index.action.show')}}</a> --}}
                            
                            <a class="dropdown-item" href="{{route('medical_institutes.edit',['medical_institute' => $medical_institute->id])}}" class="action-icon"> <i class="mdi mdi-pencil"></i> {{__('medical_institutes.index.action.edit')}}</a>
                            <form action="{{route('medical_institutes.destroy',['medical_institute' => $medical_institute->id])}}">
                                @csrf
                                @method('DELETE')
                                <button class="dropdown-item"  class="action-icon text-danger"> <i class="mdi mdi-delete text-danger"></i> {{__('medical_institutes.index.action.delete')}}</button>
                            </form>
                            
                        </div>
                    </div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
                                                
@endsection

                                                