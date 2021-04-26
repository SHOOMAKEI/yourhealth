<?php

namespace App\Http\Controllers;

use App\Contracts\Repositories\Auth\SettingsRepositoryInterface;
use App\Models\User;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Jenssegers\Agent\Agent;
use Laravel\Fortify\Rules\Password;

class SettingsController extends Controller
{
    public function index(Request $request)
    {
        $user = User::find(auth()->user()->id);
        return Inertia::render('Utilities/Settings', ['settings' =>[
            'qrcode_svg' => ($user->two_factor_recovery_codes != null)?$user->twoFactorQrCodeSvg(): null,
            'two_factor_recovery_codes' => ($user->two_factor_recovery_codes != null)? collect(json_decode(decrypt($user->two_factor_recovery_codes), true))
                ->map(function ($code) {
                    $data['code'] = $code;
                    return $data;
                })->toArray():null
        ],
            'sessions' => $this->sessions($request)->all()
            ]);
    }

    public function updateAccountInfo(Request $request, SettingsRepositoryInterface $repository)
    {
        $request->validate([
            'email' => ['required', 'string', 'email', 'max:255'],
            'mobile_number' => ['required', 'string','regex:/^([0-9\s\-\+\(\)]*)$/','max:255']
        ]);

        if (auth()->user()->email != $request['email']) {
            $request->validate([
                'email' => ['unique:users']
            ]);
        }

        if (auth()->user()->mobile_number != $request['mobile_number']) {
            $request->validate([
                'mobile_number' => ['unique:users'],
            ]);
        }

        if ($request['photo'] != null) {
            $request->validate([
                'photo' => [ 'string', 'base64image']
            ]);
        }


        $repository->updateAccountInfo($request->toArray());

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function updatePassword(Request $request, SettingsRepositoryInterface $repository)
    {
        $user = User::find(auth()->user()->id);

        $validator = Validator::make($request->toArray(), [
            'current_password' => ['required', 'string'],
            'password' => ['required', 'string', new Password, 'confirmed', 'regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/'],
        ])->after(function ($validator) use ($user, $request) {
            if (! Hash::check($request['current_password'], $user->password)) {
                $validator->errors()->add(
                    'current_password',
                    'The provided password does not match your current password.'
                );
            }
        });

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }

        $repository->updatePassword($request->toArray());

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function toggleOTP(SettingsRepositoryInterface $repository)
    {
        $repository->toggleOTP();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function toggle2FA(SettingsRepositoryInterface $repository)
    {
        if (User::find(auth()->user()->id)->two_factor_recovery_codes != null) {

            $repository->disableTwoFactorAuthentication();

            return redirect()->back()->with(['status' => 'Operation Complete successful']);
        }

        $repository->enableTwoFactorAuthentication();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function generateRecoveryCodes(SettingsRepositoryInterface $repository)
    {
        $repository->regenerate2FARecoveryCodes();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }


    public function sessionsBrowser(Request $request, StatefulGuard $guard)
    {
        if (! Hash::check($request->confirm_password, $request->user()->password)) {
            throw ValidationException::withMessages([
                'confirm_password' => [__('This password does not match our records.')],
            ]);
        }

        $guard->logoutOtherDevices($request->confirm_password);

        $this->deleteOtherSessionRecords($request);

        return back(303);
    }

    /**
     * Delete the other browser session records from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    protected function deleteOtherSessionRecords(Request $request)
    {
        if (config('session.driver') !== 'database') {
            return;
        }

        DB::table(config('session.table', 'sessions'))
            ->where('user_id', $request->user()->getAuthIdentifier())
            ->where('id', '!=', $request->session()->getId())
            ->delete();
    }


    /**
     * Get the current sessions.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Support\Collection
     */
    public function sessions(Request $request)
    {
        if (config('session.driver') !== 'database') {
            return collect();
        }

        return collect(
            DB::table(config('session.table', 'sessions'))
                ->where('user_id', $request->user()->getAuthIdentifier())
                ->orderBy('last_activity', 'desc')
                ->get()
        )->map(function ($session) use ($request) {
            $agent = $this->createAgent($session);

            return (object) [
                'agent' => [
                    'is_desktop' => $agent->isDesktop(),
                    'platform' => $agent->platform(),
                    'browser' => $agent->browser(),
                ],
                'ip_address' => $session->ip_address,
                'is_current_device' => $session->id === $request->session()->getId(),
                'last_active' => Carbon::createFromTimestamp($session->last_activity)->diffForHumans(),
            ];
        });
    }

    /**
     * Create a new agent instance from the given session.
     *
     * @param  mixed  $session
     * @return \Jenssegers\Agent\Agent
     */
    protected function createAgent($session)
    {
        return tap(new Agent, function ($agent) use ($session) {
            $agent->setUserAgent($session->user_agent);
        });
    }
}
