<?php

namespace App\Http\Controllers\Packages;

use App\Http\Controllers\Controller;
use App\Models\MembershipCategory;
use Illuminate\Http\Request;

class MembershipController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'max:255', 'string'],
            'description' => ['required','string'],
            'is_active' => ['required','boolean'],
        ]);

        MembershipCategory::create([
            'name' => $request['name'],
            'description' => $request['description'],
            'is_active' => $request['is_active']
        ]);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function update(MembershipCategory $membership, Request $request)
    {
        $request->validate([
            'id' => ['required', 'numeric', 'exists:membership_categories,id'],
            'name' => ['required', 'max:255', 'string'],
            'description' => ['required','string'],
            'is_active' => ['required','boolean'],
        ]);

        $membership->update([
            'name' => $request['name'],
            'description' => $request['description'],
            'is_active' => $request['is_active']
        ]);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function destroy(MembershipCategory $membership)
    {
        $membership->delete();
        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }
}
