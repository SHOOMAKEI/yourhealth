<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\ServiceCategory;
use App\Models\ServiceSubCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceSubCategoryController extends Controller
{
    public function index(ServiceCategory $services_category)
    {
        $servicesCategories = ServiceSubCategory::where('service_category_id', $services_category->id)->get()->map(function ($query) {
            $data['id'] = $query->id;
            $data['is_active'] = $query->is_active;
            $data['name'] = $query->name;
            $data['service_category_id'] = $query->service_category_id;
            $data['description'] = $query->description;
            $data['created_at'] = $query->created_at;
            $data['updated_at'] = $query->updated_at;
            $data['approved_at'] = $query->approved_at;
            $data['approved_by'] = !is_null($query->approved_by) && !is_null($query->approved_at) ?$query->approve->name: '';
            $data['created_by'] = !is_null($query->created_by)?$query->creator->name: config('app.name');

            return $data;
        });

        return Inertia::render('Services/subcategories/components/Manage', ['categories'=> $servicesCategories, 'service_category' => $services_category]);
    }




    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'max:255', 'string'],
            'description' => ['required','string'],
            'is_active' => ['boolean'],
            'approved_at' => ['boolean'],
            'service_category_id' => ['required','exists:service_categories,id'],
        ]);
//        dd($request['description']);

        ServiceSubCategory::create([
            'name' => $request['name'],
            'description' => $request['description'],
            'is_active' => $request['is_active']?$request['is_active']:false,
            'created_by' => auth()->user()->id,
            'approved_by' => $request['approved_at']?auth()->user()->id:null,
            'approved_at' => $request['approved_at']?now():null,
            'service_category_id' => $request['service_category_id'],
        ]);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }


    public function update(Request $request, ServiceSubCategory $services_sub_category)
    {
        $request->validate([
            'name' => ['required', 'max:255', 'string'],
            'description' => ['required','string'],
        ]);

        $services_sub_category->update([
            'name' => $request['name'],
            'description' => $request['description'],
        ]);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function show(ServiceSubCategory $services_sub_category)
    {
        $subcategories = Service::where('service_sub_category_id', $services_sub_category->id)->limit(9)->get()
            ->map(function ($query) {
                $data['id'] = $query->id;
                $data['is_active'] = $query->is_active;
                $data['name'] = $query->name;
                $data['description'] = $query->description;
                $data['created_at'] = $query->created_at;
                $data['updated_at'] = $query->updated_at;
                $data['approved_at'] = $query->approved_at;
                $data['approved_by'] = !is_null($query->approve) && ($query->approved_at != "") ?$query->approve->name: '';
                $data['created_by'] = !is_null($query->creator)?$query->creator->name: config('app.name');

                return $data;
            });

        return $subcategories;
    }

    public function destroy(ServiceSubCategory $services_sub_category)
    {
        $services_sub_category->delete();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function toggleVisibility(ServiceSubCategory $services_sub_category)
    {

        $services_sub_category->forceFill([
            'is_active' => !$services_sub_category->is_active
        ])->save();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }


    public function toggleApproval(ServiceSubCategory $services_sub_category)
    {
        $services_sub_category->forceFill([
            'approved_by' => isset($services_sub_category->approved_by)?null:auth()->user()->id,
            'approved_at' => ($services_sub_category->approved_by != "")?null:now()
        ])->save();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }
}
