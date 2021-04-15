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
            $data['service_category_id'] = $query->service_category_id;
            $data['description'] = $query->description;
            $data['created_at'] = $query->created_at;
            $data['updated_at'] = $query->updated_at;
            $data['approved_at'] = $query->approved_at;
            $data['approved_by'] = !is_null($query->approver) && !is_null($query->approved_at) ?$query->approver->name: '';
            $data['created_by'] = !is_null($query->creator)?$query->creator->name: config('app.name');

            return $data;
        });

        return Inertia::render('Services/services/components/Manage', ['categories'=> $servicesCategories]);
    }




    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'max:255', 'string'],
            'description' => ['required','string'],
            'is_active' => ['required','boolean'],
            'approved_at' => ['required','boolean'],
            'service_category_id' => ['required','exists:service_categories,id'],
        ]);
//        dd($request['approved_at']?now()->toDateTime():null);

        Service::create([
            'name' => $request['name'],
            'description' => $request['description'],
            'is_active' => $request['is_active'],
            'created_by' => auth()->user()->id,
            'approved_by' => $request['approved_at']?auth()->user()->id:null,
            'approved_at' => $request['approved_at']?now():null,
            'service_category_id' => $request['service_category_id'],
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
            'approved_by' => !is_null($service->approved_by)?null:auth()->user()->id,
            'approved_at' => !is_null($service->approved_at)?null:now()
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
