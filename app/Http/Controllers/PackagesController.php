<?php

namespace App\Http\Controllers;

use App\Models\MembershipCategory;
use App\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PackagesController extends Controller
{

    public function index()
    {
        return Inertia::render('Services/packages/manage', ['memberships' => MembershipCategory::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
//        return view('packages.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validateRequest($request);

        $plan = app('rinvex.subscriptions.plan')->create([
            'name' => $request['package_name'],
            'description' => $request['package_description'],
            'price' => $request['package_price'],
            'signup_fee' => 0,
            'invoice_period' => $request['package_invoice_period'],
            'invoice_interval' => $request['package_invoice_interval'],
            'trial_period' => $request['package_trial_period'],
            'trial_interval' => 'day',
            'sort_order' => $request['package_sort_order'],
            'currency' => $request['package_currency'],
            'category' => $request['package_category']
        ]);

        return redirect()->route('packages.index')->with(['status' => 'success','message'=> 'Packege Saved Successful!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  Plan  $package
     * @return \Illuminate\Http\Response
     */
    public function show(Plan $package)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Plan  $package
     * @return \Illuminate\Http\Response
     */
    public function edit(Plan $package)
    {
        return view('packages.edit', ['package'=> $package]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Plan  $package
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Plan $package)
    {
        $this->validateRequest($request);

        $package->update([
            'name' => $request['package_name'],
            'description' => $request['package_description'],
            'price' => $request['package_price'],
            'signup_fee' => 0,
            'invoice_period' => $request['package_invoice_period'],
            'invoice_interval' => $request['package_invoice_interval'],
            'trial_period' => $request['package_trial_period'],
            'trial_interval' => 'day',
            'sort_order' => $request['package_sort_order'],
            'currency' => $request['package_currency'],
            'category' => $request['package_category']
        ]);

        return redirect()->route('packages.index')->with(['status' => 'success','message'=> 'Packege Saved Successful!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Plan  $package
     * @return \Illuminate\Http\Response
     */
    public function destroy(Plan $package)
    {
        //
    }


    private function validateRequest(Request $request)
    {
        return $request->validate([
            'package_name' => ['required' ,'String'],
            'package_description' => ['required', 'String'],
            'package_price' => ['required', 'numeric'],
            'package_invoice_interval' => ['required', Rule::in(array_column(getInvoiceInterval(), 'value'))],
            'package_trial_period' => ['required', 'numeric'],
            'package_sort_order' => ['required', 'numeric'],
            'package_currency' => ['required', Rule::in(array_column(getCurrency(), 'value'))],
            'package_category' => ['required', Rule::in(array_column(getPackageCategories(), 'value'))],
        ]);
        // dd($request['package_category']);
    }

    public function membershipStore(Request $request)
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

    public function membershipUpdate(MembershipCategory $membership, Request $request)
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

    public function membershipDestroy(MembershipCategory $membership)
    {
        $membership->delete();
        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }
}
