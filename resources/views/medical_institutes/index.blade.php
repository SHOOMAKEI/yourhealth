@extends('layouts.master')

@section('header')
{{__('medical_institutes.index.header')}}
@endsection

@section('contents')
<div class="container-fluid mt-2">
    <div class="row">
        <div class="col-12">
            <div class="page-title-box">
                <div class="page-title-right">
                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#add-medical_institute">
                        <i class=" uil-plus"></i>
                        {{__('medical_institutes.index.add_new')}}
                    </button>
                    @include('medical_institutes.create_modal')
                </div>
                <h4 class="page-title">{{__('medical_institutes.index.header')}}</h4>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body px-2">
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
                            @include('medical_institutes.edit_modal')
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
                                        
                                        <a class="dropdown-item" data-toggle="modal" data-target="#update-medical_institute-{{$medical_institute->id}}"  class="action-icon"> <i class="mdi mdi-pencil"></i> {{__('medical_institutes.index.action.edit')}}</a>
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
        </div>
    </div>
</div>  
                                                
@endsection

                                              