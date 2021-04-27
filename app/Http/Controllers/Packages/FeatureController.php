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
        ]);

        PackageFeature::create([
            'name' => $request['name'],
        ]);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function update(PackageFeature $feature, Request $request)
    {
        $request->validate([
            'name' => ['required', 'string'],
        ]);

        $feature->update([
            'name' => $request['name'],
        ]);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function destroy(PackageFeature $feature)
    {
        $feature->delete();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }


}
