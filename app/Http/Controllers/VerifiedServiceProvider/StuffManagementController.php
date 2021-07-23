<?php

namespace App\Http\Controllers\VerifiedServiceProvider;

use App\Http\Controllers\Controller;
use App\Models\FacilityInvitation;
use App\Models\ProviderFacility;
use App\Models\User;
use App\Notifications\StuffInvitationNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Notification;

class StuffManagementController extends Controller
{
    public function index()
    {
        $invitation_data = collect();

        foreach (auth()->user()->service_provider->provider_companies[0]->facilities as $f) {
            $values =  FacilityInvitation::where(
                'provider_facility_id',
                $f->id
            )->get()->map(function ($query) {
                $data['id'] = $query->id;
                $data['email'] = $query->email;
                $data['role'] = $query->role;
                $data['provider_facility_id'] = $query->provider_facility_id;
                $data['status'] = $query->status;
                return $data;
            });
            if (!$values->isEmpty()) {
                $invitation_data =  $invitation_data->merge($values);
            }
        }

        $invitations = $invitation_data->toArray();


        return inertia(
            'VerifiedServiceProviders/StuffManagement/FacilityInvitation',
            ['facilities' => ProviderFacility::where(
                'provider_company_id',
                auth()->user()->service_provider->provider_companies[0]->id
            )->get(),
                'invitations' =>  $invitations
            ]
        );
    }


    public function store(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', 'max:255', 'unique:facility_invitations,email'],
            'role' => ['required', Rule::in(['stuff', 'admin'])],
            'provider_facility_id' => ['required', 'numeric', 'exists:provider_facilities,id']
        ]);

        $token = Str::random(40);

        if (!($request['email'] == auth()->user()->email)) {
            FacilityInvitation::create([
                    'email' => $request['email'],
                    'role' => $request['role'],
                    'token' => $token,
                    'provider_facility_id' => $request['provider_facility_id']
                ]);

            Notification::route('mail', $request['email'])->notify(new StuffInvitationNotification(
                ProviderFacility::find($request['provider_facility_id']),
                $token,
                $request['role'],
                $request['email']
            ));
        }

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function invitation(string $token, string $email)
    {
        $invitation = FacilityInvitation::where(['email' => $email, 'token' => $token, 'status' => 'pending'])->first();

        if (is_null($invitation)) {
            return redirect(route('login'));
        }

        session()->keep([
            'email' => $email,
            'token'=> $token,
            'provider_facility_id' => $invitation->provider_facility_id,
            'invitation_type' => 'facility'
        ]);

        if (is_null(User::where('email', $invitation->email)->first())) {

            return redirect(route('register.individual'));
        }

        return  redirect(route('login'));
    }
}
