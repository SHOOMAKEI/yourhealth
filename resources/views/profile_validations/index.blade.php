@extends('layouts.master')

@section('contents')
    <div class="container-fluid mt-2">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#add-attachment">
                            <i class=" uil-plus"></i>
                            Add
                        </button>
                        @include('profile_validations.components.create_modal')
                    </div>
                    <h4 class="page-title">Required attachments</h4>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body px-2">
                <table id="datatable-buttons" class="table dt-responsive nowrap w-100">
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
                                @include('profile_validations.components.update_modal')
                                <td>
                                   {{$profile_validation->name}}
                                </td>
                                <td>
                                    {{$profile_validation->category}}
                                 </td>
                                <td>
                                    <div class="btn-group float-right mr-4">
                                        <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="dripicons-gear noti-icon"></i>&nbsp; More
                                        </button>
                                        <div class="dropdown-menu">
                                        {{-- <a class="dropdown-item" href="{{route('profile_validations.show',['profile_validation' => $profile_validation->id])}}" class="action-icon" data-toggle="modal" data-target="#feature-modal-{{$profile_validation->id}}"> <i class="mdi mdi-eye"></i> {{__('profile_validations.index.action.show')}}</a> --}}
                                           
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit-{{$profile_validation->id}}-attachment" class="action-icon"> <i class="mdi mdi-pencil"></i> {{__('profile_validations.index.action.edit')}}</a>
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
            </div>
        </div>
    </div> 
@endsection

