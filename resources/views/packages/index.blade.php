@extends('layouts.master')

@section('contents')
    <div class="container-fluid mt-2">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#add-package">
                            <i class=" uil-plus"></i>
                            Add
                        </button>
                        @include('packages.create_package_modal')
                    </div>
                    <h4 class="page-title">Required attachments</h4>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body px-2">
                <table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
                    <thead>
                        <tr>
                            <th>{{__('packages.index.table.name')}}</th>
                            <th>{{__('packages.index.table.description')}}</th>
                            <th>{{__('packages.index.table.price')}}</th>
                            <th>{{__('packages.index.table.trial_period')}}</th>
                            <th>{{__('packages.index.table.category')}}</th>
                            <th>{{__('packages.index.table.sort_order')}}</th>
                            <th>{{__('packages.index.table.more')}}</th>
                        </tr>
                    </thead>
                
                
                    <tbody>
                        @foreach ($packages as $package)
                            <tr>
                                <td>
                                    {{$package->name}}
                                </td>
                                <td>{{$package->description}}</td>
                                <td>@money($package->price, $package->currency) {{ $package->currency}} per {{$package->invoice_interval}}</td>
                                <td>{{$package->trial_period}} {{$package->trial_interval}}</td>
                                <td>{{str_replace('-', ' ',$package->category)}}</td>
                                <td>{{$package->sort_order}}</td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="dripicons-gear noti-icon"></i>&nbsp; More
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="{{route('packages.show',['package' => $package->id])}}" class="action-icon" data-toggle="modal" data-target="#feature-modal-{{$package->id}}"> <i class="mdi mdi-eye"></i> {{__('packages.index.action.show')}}</a>
                                            
                                            <a class="dropdown-item" href="{{route('packages.edit',['package' => $package->id])}}" class="action-icon"> <i class="mdi mdi-pencil"></i> {{__('packages.index.action.edit')}}</a>
                                            <form action="{{route('packages.destroy',['package' => $package->id])}}">
                                                @csrf
                                                @method('DELETE')
                                                <button class="dropdown-item"  class="action-icon text-danger"> <i class="mdi mdi-delete text-danger"></i> {{__('packages.index.action.delete')}}</button>
                                            </form>
                                            
                                        </div>
                                    </div>
                                    @include('packages.show',$package)
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div> 
@endsection



