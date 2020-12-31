<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
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
    public function update($rootVaule, $args)
    {
        $user = auth()->user();
        
        if (! Hash::check($args['input']['current_password'], $user->password)) {
            
            return (object) [
                'errors' => [
                    [
                        'message' => 'The provided password does not match your current password.'
                    ]
                ],
                'success' => false
                ];
            }
      

        $user->forceFill([
            'password' => Hash::make($args['input']['password']),
        ])->save();

        return (object)[
            'errors' => null,
            'success' => true
        ];
    }
}
