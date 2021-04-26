<?php

namespace App\Http\Middleware;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        $user = null;
        $request->user()
            ? $user = User::find(auth()->user()->id): null;
        return array_merge(parent::share($request), [
            'app_name' => config('app.name'),
            'auth.user' => isset($user)?function () use ($user) {
                $data['id'] = $user->id;
                $data['name'] = $user->name;
                $data['email'] = $user->email;
                $data['mobile_number'] = $user->mobile_number;
                $data['profile_photo_path'] = $user->profile_photo_path;
                $data['enabled_otp'] = $user->enabled_otp;
                $data['enable_2fa'] = $user->two_factor_recovery_codes != null;
                $data['roles'] = $user->roles;
                $data['permissions'] = $user->permissions;

                return $data;
            }:null,
            'status' => Session::get('status'),
            'alertType' => Session::get('alertType'),
            'locale' => function () {
                $data['url'] = language()->back(app()->getLocale());
                $data['name'] = language()->getName(app()->getLocale());
                $data['flag'] = asset('assets/images/flags/'. language()->country(app()->getLocale()) .'.png');
                $data['flag_width'] = config('language.flags.width');
                $data['code'] = app()->getLocale();
                return $data;
            },
            'selectable_locale' => function () {
                $index=0;
                $data = [];
                foreach (language()->allowed() as $key => $value) {
                    $data[$index]['url'] = language()->back($key);
                    $data[$index]['name'] = $value;
                    $data[$index]['flag'] = asset('assets/images/flags/'. language()->country($key) .'.png');
                    $data[$index]['flag_width'] = config('language.flags.width');
                    $data[$index]['code'] = $key;
                }
                return $data;
            },
            'language' => function () {
                return translations(
                    resource_path('lang/'. app()->getLocale() .'.json')
                );
            },
            'roles' => function (Request $request) {
                return $request->user()
                    ? User::find(auth()->user()->id)->roles->only('id', 'name')
                    : null;
            }
        ]);
    }
}
