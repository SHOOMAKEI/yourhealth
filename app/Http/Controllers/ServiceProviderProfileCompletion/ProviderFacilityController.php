<?php

namespace App\Http\Controllers\ServiceProviderProfileCompletion;

use App\Contracts\Repositories\Registration\ServiceProviderRegistrationRepositoryInterface;
use App\Http\Controllers\Controller;
use App\Models\ProviderFacility;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Utils;

class ProviderFacilityController extends Controller
{


    public function store(Request $request, ServiceProviderRegistrationRepositoryInterface $repository)
    {
        $this->validateFacility($request);

        $data = $request->toArray();
        $data+=['user_id' => auth()->user()->id];
        $data+=['provider_company_id' => auth()->user()->service_provider->provider_companies[0]->id];

        $repository->createProviderFacility($data);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }



    public function update(
        Request $request,
        ProviderFacility $facility,
        ServiceProviderRegistrationRepositoryInterface $repository)
    {


        $this->validateFacility($request);
        $data = $request->toArray();
        $data+=['user_id' => auth()->user()->id];
        $data+=['id' => $facility->id];
        $data+=['provider_company_id' => auth()->user()->service_provider->provider_companies[0]->id];
        $repository->updateProviderFacility($data);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);

    }


    public function destroy(
        ProviderFacility $facility,
        ServiceProviderRegistrationRepositoryInterface $repository)
    {
        $request['facility_id'] = $facility->id;

        $repository->deleteProviderFacility($request);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    private function validateFacility(Request $request){
        return $request->validate([
            'name' => ['required', 'max:255', 'string'],
            'trading_name' => ['required', 'max:255', 'string'],
            'website' => ['max:255', 'string'],
            'vrn' => ['required', 'max:255', 'string'],
            'tin' => ['required', 'max:255', 'string'],
            'email' => ['required', 'max:255', 'string'],
            'alternative_mobile_number' => [ 'max:255', 'string'],
            'mobile_number' => ['required', 'max:255', 'string'],
            'address' => ['required', 'max:255', 'string'],
            'physical_address' => ['required', 'max:255', 'string'],
            'registration_date' => ['required', 'max:255', 'date_format:Y-m-d'],
            'registration_number' => ['required', 'max:255', 'string'],
            'description' => ['string', 'max:900'],
            'provider_sub_level_id' => ['required','numeric', 'exists:provider_sub_levels,id'],
        ]);

    }
}
