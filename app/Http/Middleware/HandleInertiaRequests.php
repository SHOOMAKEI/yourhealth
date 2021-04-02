<?php

namespace App\Http\Middleware;

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
        return array_merge(parent::share($request), [
            'app_name' => config('app.name'),
            'auth.user' => $request->user()
                            ? $request->user()->only('id', 'name', 'email')
                            : null,
            'status' => Session::get('status'),
            'alertType' => Session::get('alertType'),
            'locale' => app()->getLocale(),
            'selectable_locale' => function() {
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
            'language' => function(){
                return translations(
                    resource_path('lang/'. app()->getLocale() .'.json'));
            }
        ]);
    }
}
