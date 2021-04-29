<?php

namespace App\Http\Controllers\Packages;

use App\Http\Controllers\Controller;
use App\Models\MembershipCategory;
use App\Models\PackageFeature;
use App\Models\PackageMemberRange;
use App\Models\PackagePlan;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PackagesController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'Services/packages/manage',
            ['memberships' => MembershipCategory::all(),
                'packages' => PackagePlan::all()->map(function ($query) {
                    $data['id'] = $query->id;
                    $data['name'] = $query->name;
                    $data['price'] = $query->price;
                    $data['currency'] = $query->currency;
                    $data['has_price'] = $query->has_price;
                    $data['has_member_range'] = $query->has_member_range;
                    $data['membership_category'] = $query->membership_category;
                    $data['features'] = $query->package_features->map(function ($q) {
                        $data['id'] = $q->id;
                        $data['name'] = $q->name;
                        $data['services'] = $q->services->map(function ($query) {
                            $data['id'] = $query->id;
                            $data['name'] = $query->name;
                            $data['created_ta'] = $query->created_at;

                            return $data;
                        });


                        return $data;
                    });
                    $data['ranges'] = $query->package_member_ranges;
                    $data['created_at'] = $query->created_at;
                    $data['updated_at'] = $query->updated_at;
                    $data['is_active'] = $query->is_active;

                    return $data;
                }),
                'features' => PackageFeature::all()->map(function ($query) {
                    $data['id'] = $query->id;
                    $data['name'] = $query->name;
                    $data['services'] = $query->services->map(function ($q) {
                        $data['id'] = $q->id;
                        $data['name'] = $q->name;

                        return $data;
                    });
                    $data['created_at'] = $query->created_at;
                    $data['updated_at'] = $query->updated_at;
                    return $data;
                }),
                'ranges' => PackageMemberRange::all(),
                'services' => Service::where('is_active', true)->get(['id', 'name'])
                ]
        );
    }



    public function store(Request $request)
    {
        $this->validateRequest($request);

        if (isset($request['price'])) {
            $request->request->add(['has_price' => true]);
        }

        if (isset($request['features.*.id'])) {
            $request->request->add(['has_member_range' => true]);
        }

        $package = PackagePlan::create([
            'name' => $request['name'],
            'membership_category_id' => $request['membership_category_id'],
            'is_active' => $request['is_active'],
            'price' => $request['price']??null,
            'currency' => $request['currency']??null,
            'has_member_range'=> $request['has_member_range']??false,
            'has_price'=> $request['has_price']??false,
        ]);


        foreach ($request['features'] as $data) {
            $package->package_features()->syncWithoutDetaching($data['id']);
        }

        foreach ($request['ranges'] as $data) {
            $package->package_member_ranges()->syncWithoutDetaching($data['id']);
        }


        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }


    public function update(PackagePlan $packages_registration, Request $request)
    {

        $this->validateRequest($request);

        if (($request['price'] >0)) {
            $request->request->add(['has_price' => true]);

        }

        if (($request['features'][0]['id']>0)) {
            $request->request->add(['has_member_range' => true]);
        }

        $packages_registration->update([
            'name' => $request['name'],
            'membership_category_id' => $request['membership_category_id'],
            'is_active' => $request['is_active'],
            'price' => $request['price']??null,
            'currency' => $request['currency']??null,
            'has_member_range'=> $request['has_member_range']??false,
            'has_price'=> $request['has_price']??false,
        ]);

        if (!($request['price'] >0)) {

            foreach ($request['features'] as $data) {
                $packages_registration->package_features()->syncWithoutDetaching($data['id']);
            }

            foreach ($request['ranges'] as $data) {
                $packages_registration->package_member_ranges()->syncWithoutDetaching($data['id']);
            }
        }

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function destroy(PackagePlan $package)
    {
        $package->delete();
        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }


    private function validateRequest(Request $request)
    {
        return $request->validate([
            'name' => ['required' ,'String', 'max:255'],
            'membership_category_id' => ['required' ,'numeric', 'exists:membership_categories,id'],
            'is_active' => ['required' ,'boolean'],
            'price' => ['nullable','numeric'],
            'currency' => ['required_if:price,!=,""'],
            'features.*.id' => ['exists:package_features,id'],
            'ranges.*.id' => ['exists:package_member_ranges,id'],
        ]);
    }
}
