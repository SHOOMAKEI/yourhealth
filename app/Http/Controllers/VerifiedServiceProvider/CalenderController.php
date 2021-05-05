<?php

namespace App\Http\Controllers\VerifiedServiceProvider;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Day;
use App\Models\DaySession;
use App\Models\ProviderProfile;
use App\Models\User;
use Composer\DependencyResolver\Request;
use Inertia\Inertia;

class CalenderController extends Controller
{
    public function index()
    {
        $provider_profile = auth()->user()->service_provider;
        $facilities = null;
        if (!empty($provider_profile)&& $provider_profile->account_category_type == SERVICE_PROVIDER_FACILITY_ACCOUNT ||
                $provider_profile->account_category_type == SERVICE_PROVIDER_COMPANY_ACCOUNT) {
            $facilities = $provider_profile->provider_companies[0]->facilities;
        }
        return Inertia::render('VerifiedServiceProviders/Consultation/Calender', [
            'facilities' => $facilities,
            'days'=> Day::all(),
            'user' => collect(new UserResource(User::find(auth()->user()->id)))->toArray()]);
    }

    public function create()
    {
        $provider_profile = auth()->user()->service_provider;
        $facilities = null;
        if (!empty($provider_profile)&& $provider_profile->account_category_type == SERVICE_PROVIDER_FACILITY_ACCOUNT ||
            $provider_profile->account_category_type == SERVICE_PROVIDER_COMPANY_ACCOUNT) {
            $facilities = $provider_profile->provider_companies[0]->facilities;
        }
        return Inertia::render('VerifiedServiceProviders/Consultation/CreateSchedule', [
            'facilities' => $facilities,
            'days'=> Day::all(),
            'user' => collect(new UserResource(User::find(auth()->user()->id)))->toArray()]);
    }

    public function createProviderSchedule(Request $request)
    {
        $provider_profile = ProviderProfile::find(auth()->user()->service_provider->id);
        $index = 0;
        $sessions = [];
        foreach ($request as $days_sessions) {
            $sessions[$index] = DaySession::create([
                'name'=> $days_sessions['name'],
                'from'=> $days_sessions['from'],
                'to'=> $days_sessions['to'],
                'interval' => $days_sessions['interval'],
                'day_id' => $days_sessions['day_id']
            ]);

            $index++;
        }

        $provider_profile->day_sessions()->attach($sessions);
    }
}
