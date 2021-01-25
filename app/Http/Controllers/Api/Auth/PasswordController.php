<?php

namespace App\Http\Controllers\Api\Auth;

use Carbon\Carbon;
use App\Models\User;
use App\Notifications\PasswordResetNotification;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
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

    public function resetUserPasswordViaEmail($rootVaule, $args)
    {
        $user = User::where('email', $args['input']['email'])->first();
        
        $key = app('config')['app.key'];

        if (Str::startsWith($key, 'base64:')) {
            $key = base64_decode(substr($key, 7));
        }

        
        $email = $user->getEmailForPasswordReset();

        DB::table('password_resets')->where('email', $user->getEmailForPasswordReset())->delete();

        $token = hash_hmac('sha256', Str::random(40), $key);

        DB::table('password_resets')->insert($this->getPayload($email, $token));

        $user->notify(new PasswordResetNotification($token));

        return (object)[
            'errors' => null,
            'success' => true
        ];
    }

    protected function getPayload($email, $token)
    {
        return ['email' => $email, 'token' => app('hash')->make($token), 'created_at' => new Carbon];
    }

    public function resetUserPasswordViaOtp($rootVaule, $args)
    {
        $user = User::where('mobile_number', $args['input']['mobile_number'])->first();
        
        $user->sendMobileNumberResetPasswordNotification();

        return (object)[
            'errors' => null,
            'success' => true
        ];
    }

    public function verifyUserPasswordViaOtp($rootVaule, $args)
    {
        $user = User::where('mobile_number', $args['input']['mobile_number'])->first();
    
        $result = DB::table('password_resets')->where('email', $args['input']['mobile_number'])->where('token', $args['input']['otp_code'])->first();

        if(!isset($result->email)){

            return (object) [
                'errors' => [
                    [
                        'message' => 'Invalid OTP code / token provided.'
                    ]
                ],
                'success' => false
            ];
        }

        DB::table('password_resets')->where('email', $args['input']['mobile_number'])->where('email', $args['input']['otp_code'])->delete();

        $user->forceFill([
            'password' => Hash::make($args['input']['password']),
        ])->save();

        return (object)[
            'errors' => null,
            'success' => true
        ];
    }
}
