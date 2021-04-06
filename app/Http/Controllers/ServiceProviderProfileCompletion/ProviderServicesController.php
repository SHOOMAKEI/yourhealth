<?php

namespace App\Http\Controllers\ServiceProviderProfileCompletion;

use App\Contracts\Repositories\Registration\ServiceProviderRegistrationRepositoryInterface;
use App\Http\Controllers\Controller;
use App\Models\ProviderFacility;
use App\Models\Service;
use App\Models\Specialization;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ProviderServicesController extends Controller
{

    public function store(Request $request, ServiceProviderRegistrationRepositoryInterface $repository)
    {
        $request->validate([
            'price'=> ['required' , 'numeric'],
            'currency'=> ['required', Rule::in(['TZS','KES', 'UGS']), 'max:255'],
        ]);

        $data[0] = $request->toArray();

        $data[0]+=['user_id' => auth()->user()->id];

        $repository->createProviderProfileServices($data);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);


    }


    public function destroy(Service $service, ServiceProviderRegistrationRepositoryInterface $repository)
    {
        $request['service_id'] = $service->id;

        $repository->deleteProviderProfileServices($request);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function facilityStore(Request $request, ServiceProviderRegistrationRepositoryInterface $repository)
    {
        $facilities = ProviderFacility::where(
            'provider_company_id', auth()->user()->service_provider->provider_companies[0]->id)->get()->pluck('id');
        $request->validate([
            'price'=> ['required' , 'numeric'],
            'currency'=> ['required', Rule::in(['TZS','KES', 'UGS']), 'max:255'],
            'provider_facility_id' => Rule::in($facilities)
        ]);

        $data[0] = $request->toArray();

        $data[0]+=['user_id' => auth()->user()->id];


        $repository->createProviderFacilityServices($data);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);


    }


    public function facilityDestroy(Service $service, ServiceProviderRegistrationRepositoryInterface $repository)
    {
        $request['service_id'] = $service->id;

        $repository->deleteProviderFacilityServices($request);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function requestServiceStore(Request $request, ServiceProviderRegistrationRepositoryInterface $repository)
    {
        $request->validate([
            'name'=> ['required', 'string'],
            'description'=> [ 'string'],
        ]);

        $data = $request->toArray();

        $data+=['provider_profile_id' => auth()->user()->service_provider->id];

        $repository->createRequestedService($data);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }
}
