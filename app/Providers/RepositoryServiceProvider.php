<?php

namespace App\Providers;

use App\Contracts\Repositories\Registration\RegistrationRepositoryInterface;
use App\Contracts\Repositories\Registration\ServiceProviderRegistrationRepositoryInterface;
use App\Repositories\Registration\RegistrationRepository;
use App\Repositories\Registration\ServiceProviderRegistrationRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(RegistrationRepositoryInterface::class, RegistrationRepository::class);
        $this->app->bind(
            ServiceProviderRegistrationRepositoryInterface::class,
            ServiceProviderRegistrationRepository::class
        );
    }
}
