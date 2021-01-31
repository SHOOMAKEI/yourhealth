@extends('layouts.master')

@section('contents')
    <div class="container-fluid mt-2">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">Requests</h4>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body px-2">
                <table id="datatable-buttons" class="table dt-responsive nowrap w-100">
                    <thead>
                        <tr>
                            <th>{{__('admin/service_provider_profile.index.table.full_name')}}</th>
                            <th>{{__('admin/service_provider_profile.index.table.gender')}}</th>
                            <th>{{__('admin/service_provider_profile.index.table.location')}}</th>
                            <th>{{__('admin/service_provider_profile.index.table.verification_status')}}</th>
                            <th>{{__('admin/service_provider_profile.index.table.more')}}</th>
                        </tr>
                    </thead>
                
                    <tbody>
                        @foreach ($profiles as $profile)
                            <tr>
                                <td>
                                   {{$profile->username}}
                                </td>
                                <td>
                                    @if ($profile->gender == 'M') Male @else Female @endif
                                </td>
                                <td>
                                    {{$profile->country->name}}, &nbsp; {{$profile->city->name}}
                                 </td>
                                <td>
                                    @if ($profile->is_verified == 1)
                                        <span class="badge badge-outline-primary">Verified</span>
                                    @else
                                    <span class="badge badge-outline-danger">Not Verified</span>
                                    @endif
                                 </td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="dripicons-gear noti-icon"></i>&nbsp; More
                                        </button>
                                        <div class="dropdown-menu">
                                        <a class="dropdown-item" href="{{route('service_provider_profiles.show',['service_provider_profile' => $profile->id])}}" class="action-icon" data-toggle="modal" data-target="#feature-modal-{{$profile->id}}"> <i class="mdi mdi-eye"></i> {{__('admin/service_provider_profile.index.action.show')}}</a>
                                            @if ($profile->is_verified == 1)
                                            <a class="dropdown-item" href="{{route('service_provider_profiles.unverify',['provider' => $profile->id])}}" class="action-icon"> <i class="mdi mdi-pencil"></i> {{__('admin/service_provider_profile.index.action.change_status_unverify')}}</a> 
                                            @else
                                            <a class="dropdown-item" href="{{route('service_provider_profiles.verify',['provider' => $profile->id])}}" class="action-icon"> <i class="mdi mdi-pencil"></i> {{__('admin/service_provider_profile.index.action.change_status')}}</a>
                                            @endif
                                            <form action="{{route('service_provider_profiles.destroy',['service_provider_profile' => $profile->id])}}">
                                                @csrf
                                                @method('DELETE')
                                                <button class="dropdown-item"  class="action-icon text-danger"> <i class="mdi mdi-delete text-danger"></i> {{__('admin/service_provider_profile.index.action.delete')}}</button>
                                            </form>
                                            
                                        </div>
                                    </div>
                                    @include('admin/provider_profile.show',$profile)
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div> 
@endsection