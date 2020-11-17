@extends('layouts.master')

@section('header')
{{__('medical_councils.index.header')}}
@endsection

@section('menu-right')
<a href="{{route('medical_councils.create')}}" class="btn btn-success btn-sm"><i class=" uil-pen"></i>{{__('medical_councils.index.add_new')}}</a>
@endsection
@section('contents')
<table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
    <thead>
        <tr>
            <th>{{__('medical_councils.index.table.name')}}</th>
            <th>{{__('medical_councils.index.table.country')}}</th>
            <th>{{__('medical_councils.index.table.more')}}</th>
        </tr>
    </thead>


    <tbody>
        @foreach ($medical_councils as $medical_council)
            <tr>
                <td>
                   {{$medical_council->name}}
                </td>
                <td>
                    {{$medical_council->country->name}}
                 </td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="dripicons-gear noti-icon"></i>&nbsp; More
                        </button>
                        <div class="dropdown-menu">
                        {{-- <a class="dropdown-item" href="{{route('medical_councils.show',['medical_council' => $medical_council->id])}}" class="action-icon" data-toggle="modal" data-target="#feature-modal-{{$medical_council->id}}"> <i class="mdi mdi-eye"></i> {{__('medical_councils.index.action.show')}}</a> --}}
                            <a class="dropdown-item" href="{{route('medical_councils.edit',['medical_council' => $medical_council->id])}}" class="action-icon"> <i class="mdi mdi-pencil"></i> {{__('medical_councils.index.action.edit')}}</a>
                            <form action="{{route('medical_councils.destroy',['medical_council' => $medical_council->id])}}">
                                @csrf
                                @method('DELETE')
                                <button class="dropdown-item"  class="action-icon text-danger"> <i class="mdi mdi-delete text-danger"></i> {{__('medical_councils.index.action.delete')}}</button>
                            </form>
                            
                        </div>
                    </div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
                                                
@endsection

                                                