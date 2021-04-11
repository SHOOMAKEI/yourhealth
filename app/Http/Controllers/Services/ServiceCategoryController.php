<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\ServiceCategory;
use App\Models\ServiceSubCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceCategoryController extends Controller
{

    public function index()
    {
        $servicesCategories = ServiceCategory::all()->map(function($query){
            $data['id'] = $query->id;
            $data['is_active'] = $query->is_active;
            $data['name'] = $query->name;
            $data['description'] = $query->description;
            $data['created_at'] = $query->created_at;
            $data['updated_at'] = $query->updated_at;
            $data['approved_at'] = $query->approved_at;
            $data['approved_by'] = !is_null($query->approver) && !is_null($query->approved_at) ?$query->approver->name: '';
            $data['created_by'] = !is_null($query->creator)?$query->creator->name: config('app.name');

            return $data;
        });

        return Inertia::render('Services/categories/components/Manage', ['categories'=> $servicesCategories]);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'max:255', 'string'],
            'description' => ['required','string'],
            'is_active' => ['required','boolean'],
        ]);

        ServiceCategory::create([
            'name' => $request['name'],
            'description' => $request['description'],
            'is_active' => $request['is_active'],
            'created_by' => auth()->user()->id
        ]);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ServiceCategory  $serviceCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ServiceCategory $serviceCategory)
    {
        //
    }

    public function show(ServiceCategory $services_category)
    {
        $subcategories = ServiceSubCategory::where('service_category_id', $services_category->id)->limit(9)->get()
            ->map(function($query){
            $data['id'] = $query->id;
            $data['is_active'] = $query->is_active;
            $data['name'] = $query->name;
            $data['description'] = $query->description;
            $data['created_at'] = $query->created_at;
            $data['updated_at'] = $query->updated_at;
            $data['approved_at'] = $query->approved_at;
            $data['approved_by'] = !is_null($query->approver) && !is_null($query->approved_at) ?$query->approver->name: '';
            $data['created_by'] = !is_null($query->creator)?$query->creator->name: config('app.name');

            return $data;
        });

        return $subcategories;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ServiceCategory  $serviceCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceCategory $serviceCategory)
    {
        //
    }
}
