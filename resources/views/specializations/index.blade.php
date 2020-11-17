@extends('layouts.master')

@section('header')
{{__('specializations.index.header')}}
@endsection

@section('menu-right')
<a href="{{route('specializations.create')}}" class="btn btn-success btn-sm"><i class=" uil-pen"></i>{{__('specializations.index.add_new')}}</a>
@endsection
@section('contents')
<table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
    <thead>
        <tr>
            <th>{{__('specializations.index.table.name')}}</th>
            <th>{{__('specializations.index.table.more')}}</th>
        </tr>
    </thead>


    <tbody>
        @foreach ($specializations as $specialization)
            <tr>
                <td>
                   {{$specialization->name}}
                </td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="dripicons-gear noti-icon"></i>&nbsp; More
                        </button>
                        <div class="dropdown-menu">
                        {{-- <a class="dropdown-item" href="{{route('specializations.show',['specialization' => $specialization->id])}}" class="action-icon" data-toggle="modal" data-target="#feature-modal-{{$specialization->id}}"> <i class="mdi mdi-eye"></i> {{__('specializations.index.action.show')}}</a> --}}
                            
                            <a class="dropdown-item" href="{{route('specializations.edit',['specialization' => $specialization->id])}}" class="action-icon"> <i class="mdi mdi-pencil"></i> {{__('specializations.index.action.edit')}}</a>
                            <form action="{{route('specializations.destroy',['specialization' => $specialization->id])}}">
                                @csrf
                                @method('DELETE')
                                <button class="dropdown-item"  class="action-icon text-danger"> <i class="mdi mdi-delete text-danger"></i> {{__('specializations.index.action.delete')}}</button>
                            </form>
                            
                        </div>
                    </div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
                                                
@endsection

                                                