<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Laravel\Fortify\Contracts\UpdatesUserPasswords;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Laravel\Fortify\Contracts\UpdatesUserPasswords  $updater
     * @return \Illuminate\Http\Response
     */
    public function update($rootVaule, $args, UpdatesUserPasswords $updater)
    {
        $updater->update(User::where('email', $args['input']['email']), $args);

        return (object)[
            'errors' => null,
            'success' => true
        ];
    }
}
