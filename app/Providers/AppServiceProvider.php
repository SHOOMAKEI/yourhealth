<?php

namespace App\Providers;

use App\Contracts\MustVerifyMobileNumber;
use App\Services\MustVerifyMobileNumber as verifyMobileNumber;
use Illuminate\Support\ServiceProvider;

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
        
    }
}
