<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Contracts\MustVerifyMobileNumber;
use Illuminate\Support\Facades\Validator;
use App\Services\MustVerifyMobileNumber as verifyMobileNumber;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Validator::extend('base64', function ($attribute, $value, $parameters, $validator) {
            if (preg_match('%^[a-zA-Z0-9/+]*={0,2}$%', $value)) {
                return true;
            } else {
                return false;
            }
        });

        Validator::extend('base64image', function ($attribute, $value, $parameters, $validator) {
            $explode = explode(',', $value);
            $allow = ['png', 'jpg', 'svg', 'jpeg'];
            $format = str_replace(
                [
                    'data:image/',
                    ';',
                    'base64',
                ],
                [
                    '', '', '',
                ],
                $explode[0]
            );

            // check file format
            if (!in_array($format, $allow)) {
                return false;
            }

            // check base64 format
            if (!preg_match('%^[a-zA-Z0-9/+]*={0,2}$%', $explode[1])) {
                return false;
            }

            return true;
        });

        Validator::extend('base64pdf', function ($attribute, $value, $parameters, $validator) {
            $explode = explode(',', $value);
            $allow = ['pdf'];
            $format = str_replace(
                [
                    'data:application/',
                    ';',
                    'base64',
                ],
                [
                    '', '', '',
                ],
                $explode[0]
            );

            // check file format
            if (!in_array($format, $allow)) {
                return false;
            }

            // check base64 format
            if (!preg_match('%^[a-zA-Z0-9/+]*={0,2}$%', $explode[1])) {
                return false;
            }

            return true;
        });

    }
}
