<?php

namespace App\Providers;

use App\Actions\Fortify\CheckAccountStatus;
use App\Actions\Fortify\CheckSubscription;
use App\Actions\Jetstream\DeleteUser;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use Laravel\Fortify\Actions\AttemptToAuthenticate;
use Laravel\Fortify\Actions\EnsureLoginIsNotThrottled;
use Laravel\Fortify\Actions\PrepareAuthenticatedSession;
use Laravel\Fortify\Actions\RedirectIfTwoFactorAuthenticatable;
use Laravel\Fortify\Fortify;
use Laravel\Jetstream\Jetstream;

class JetstreamServiceProvider extends ServiceProvider
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
        $this->configurePermissions();

        Jetstream::deleteUsersUsing(DeleteUser::class);

        // Fortify::authenticateThrough(function (Request $request) {
        //     return array_filter([
        //             config('fortify.limiters.login') ? null : EnsureLoginIsNotThrottled::class,
        //             CheckAccountStatus::class,
        //             RedirectIfTwoFactorAuthenticatable::class,
        //             CheckSubscription::class,
        //             AttemptToAuthenticate::class,
        //             PrepareAuthenticatedSession::class,
        //     ]);
        // });
    }

    /**
     * Configure the permissions that are available within the application.
     *
     * @return void
     */
    protected function configurePermissions()
    {
        Jetstream::defaultApiTokenPermissions(['read']);

        Jetstream::permissions([
            'create',
            'read',
            'update',
            'delete',
        ]);
    }
}
