<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\RequestedService;
use App\Models\Service;
use App\Models\ServiceSubCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index(ServiceSubCategory $services_sub_category)
    {
        $servicesCategories = Service::where('service_sub_category_id', $services_sub_category->id)->get()->map(function ($query) {
            $data['id'] = $query->id;
            $data['is_active'] = $query->is_active;
            $data['name'] = $query->name;
            $data['service_sub_category_id'] = $query->service_sub_category_id;
            $data['description'] = $query->description;
            $data['created_at'] = $query->created_at;
            $data['updated_at'] = $query->updated_at;
            $data['approved_at'] = $query->approved_at;
            $data['approved_by'] = !is_null($query->approve) && ($query->approved_at != "") ?$query->approve->name: '';
            $data['created_by'] = !is_null($query->creator)?$query->creator->name: config('app.name');

            return $data;
        });

        return Inertia::render(
            'Services/services/components/Manage',
            ['categories'=> $servicesCategories,
                'service_sub_category' => $services_sub_category]
        );
    }




    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'max:255', 'string'],
            'description' => ['required','string'],
            'is_active' => ['boolean'],
            'approved_at' => ['boolean'],
            'service_sub_category_id' => ['required','exists:service_sub_categories,id'],
        ]);
//        dd($request['approved_at']?now()->toDateTime():null);

        Service::create([
            'name' => $request['name'],
            'description' => $request['description'],
            'is_active' => $request['is_active']?$request['is_active']:false,
            'created_by' => auth()->user()->id,
            'approved_by' => $request['approved_at']?auth()->user()->id:null,
            'approved_at' => $request['approved_at']?now():null,
            'service_sub_category_id' => $request['service_sub_category_id'],
        ]);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }


    public function update(Request $request, Service $service)
    {
        $request->validate([
            'name' => ['required', 'max:255', 'string'],
            'description' => ['required','string'],
        ]);

        $service->update([
            'name' => $request['name'],
            'description' => $request['description'],
        ]);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }



    public function destroy(Service $service)
    {
        $service->delete();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function toggleVisibility(Service $service)
    {

//        dd($services_category->id);
        $service->forceFill([
            'is_active' => !$service->is_active
        ])->save();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }


    public function toggleApproval(Service $service)
    {
        $service->forceFill([
            'approved_by' => isset($service->approved_by)?null:auth()->user()->id,
            'approved_at' =>($service->approved_at != "")?null:now()
        ])->save();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }
    public function requestedServices()
    {
        $requested_services = RequestedService::all()->map(function ($query) {
            $data['id'] = $query->id;
            $data['is_active'] = $query->is_active;
            $data['name'] = $query->name;
            $data['description'] = $query->description;
            $data['created_at'] = $query->created_at;
            $data['updated_at'] = $query->updated_at;

            return $data;
        });

        return Inertia::render('Services/requested/manage', ['services' => $requested_services]);
    }
}
