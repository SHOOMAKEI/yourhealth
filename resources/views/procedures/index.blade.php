@extends('layouts.master')

@section('header')
{{__('procedures.index.header')}}
@endsection

@section('menu-right')
<a href="{{route('procedures.create')}}" class="btn btn-success btn-sm"><i class=" uil-pen"></i>{{__('procedures.index.add_new')}}</a>
@endsection
@section('contents')
<table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
    <thead>
        <tr>
            <th>{{__('procedures.index.table.name')}}</th>
            <th>{{__('procedures.index.table.more')}}</th>
        </tr>
    </thead>


    <tbody>
        @foreach ($procedures as $procedure)
            <tr>
                <td>
                   {{$procedure->name}}
                </td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="dripicons-gear noti-icon"></i>&nbsp; More
                        </button>
                        <div class="dropdown-menu">
                        {{-- <a class="dropdown-item" href="{{route('procedures.show',['procedure' => $procedure->id])}}" class="action-icon" data-toggle="modal" data-target="#feature-modal-{{$procedure->id}}"> <i class="mdi mdi-eye"></i> {{__('procedures.index.action.show')}}</a> --}}
                            
                            <a class="dropdown-item" href="{{route('procedures.edit',['procedure' => $procedure->id])}}" class="action-icon"> <i class="mdi mdi-pencil"></i> {{__('procedures.index.action.edit')}}</a>
                            <form action="{{route('procedures.destroy',['procedure' => $procedure->id])}}">
                                @csrf
                                @method('DELETE')
                                <button class="dropdown-item"  class="action-icon text-danger"> <i class="mdi mdi-delete text-danger"></i> {{__('procedures.index.action.delete')}}</button>
                            </form>
                            
                        </div>
                    </div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
                                                
@endsection

                                                