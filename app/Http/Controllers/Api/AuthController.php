<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required',
            'device_name' => 'required',
        ]);

        $field =  $this->username($request);
    
        $user = User::where($field, $request[$field])->first();

        if(! $user || ($user->is_active ==false)) {
            return response()->json([
                    'message' => 'User account has been disabled contact support team for more information.',
                    'status' => 204
                    ]);
        }
    
        if (! $user || ! Hash::check($request->password, $user->password)) {
            response()->json([
                'message' => 'Incorrect Cridentials provided',
                'status' => 204
                ]);
        }

        if(!($user->enabled_otp ==false)) {

            $user->sendOtpCodeNotification();
            return ['user' => new UserResource($user), 'has_otp' =>true];
        }

        if(!is_null($user->two_factor_recovery_codes)) {

            return ['user' => new UserResource($user), 'has_two_factory_auth' =>true];
        }
    
        return ['user' => new UserResource($user),
                'token' => $user->createToken($request->device_name)->plainTextToken, 
                'token_type'=> 'bearer'];
    }

    public function sendOtpCode(Request $request)
    {
        $user = User::where('email', $request['email'])->first();

        $user->sendOtpCodeNotification();
        
        return response()->json(['message' => 'otp code sent', 'status'=> 200]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'user logged out successful', 'status'=> 200]);
    }

    public function verifiyOtpCode(Request $request)
    {
        $user = User::where('email', $request['email'])->first();

        if($user->getOtpCodeForVerification() != $request['opt_code'])
        {
            return response()->json(['message' => 'Incorrect OTP provided', 'status'=> 204]);
        }
        
        $user->forceFill([
            'otp_code' => null,
        ])->save();

        return ['user' => new UserResource($user),
                'token' => $user->createToken($request->device_name)->plainTextToken, 
                'token_type'=> 'bearer'];
    }

    public function username(Request $request)
    {
        $login = $request['username'];

        if (filter_var($login, FILTER_VALIDATE_EMAIL)) {
            $field = 'email';
        } else {
            $field = 'mobile_number';
        }

        $request->merge([$field => $login]);

        return $field;
    }

}
