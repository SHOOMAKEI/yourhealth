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
            'currency' => ['required', 'string', Rule::in(array_column(getCurrency(), 'value'))],
            'price' => ['required', 'numeric',],
        ]);

        PackageMemberRange::create([
            'min' => $request['min'],
            'max' => $request['max'],
            'currency' => $request['currency'],
            'price' => $request['price'],
        ]);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function update(PackageMemberRange $range, Request $request)
    {
        $request->validate([
            'min' => ['required', 'numeric'],
            'max' => ['required', 'numeric','gt:min'],
            'currency' => ['required', 'string', Rule::in(array_column(getCurrency(), 'value'))],
            'price' => ['required', 'numeric',],
        ]);

        $range->update([
            'min' => $request['min'],
            'max' => $request['max'],
            'currency' => $request['currency'],
            'price' => $request['price'],
        ]);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function destroy(PackageMemberRange $range)
    {
        $range->delete();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }
}
