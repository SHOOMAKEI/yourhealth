<?php

namespace App\Http\Controllers\Packages;

use App\Http\Controllers\Controller;
use App\Models\PackageMemberRange;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;


class RangeController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'min' => ['required', 'numeric'],
            'max' => ['required', 'numeric','gt:min'],
        ]);

        PackageMemberRange::create([
            'min' => $request['min'],
            'max' => $request['max'],
        ]);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function update(PackageMemberRange $range, Request $request)
    {
        $request->validate([
            'min' => ['required', 'numeric'],
            'max' => ['required', 'numeric','gt:min'],
        ]);

        $range->update([
            'min' => $request['min'],
            'max' => $request['max'],
        ]);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function destroy(PackageMemberRange $range)
    {
        $range->delete();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }
}
