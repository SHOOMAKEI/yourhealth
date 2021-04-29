<?php

namespace App\Http\Controllers\Packages;

use App\Http\Controllers\Controller;
use App\Models\PackageFeature;
use Illuminate\Http\Request;

class FeatureController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'services.*.id' => ['numeric', 'exists:services,id'],
        ]);

        $feature = PackageFeature::create([
            'name' => $request['name'],
        ]);


        foreach ($request['services'] as $data) {
            $feature->services()->syncWithoutDetaching($data['id']);
        }


        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function update(PackageFeature $feature, Request $request)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'services.*.id' => ['numeric', 'exists:services,id'],
        ]);

        $feature->update([
            'name' => $request['name'],
        ]);


        foreach ($request['services'] as $data) {
            $feature->services()->syncWithoutDetaching($data['id']);
        }


        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function destroy(PackageFeature $feature)
    {
        $feature->delete();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }
}
