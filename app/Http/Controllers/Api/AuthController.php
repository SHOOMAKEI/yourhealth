<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

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
            throw ValidationException::withMessages([
                'username' => ['User account has been disabled contact support team for more information.'],
            ]);
        }
    
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'username' => ['The provided credentials are incorrect.'],
            ]);
        }

        if(!($user->enabled_otp ==false) ) {

            return ['user' => new UserResource($user), 'has_otp' =>true];
        }

        if(!is_null($user->two_factor_recovery_codes)) {

            return ['user' => new UserResource($user), 'has_two_factory_aut' =>true];
        }
    
        return ['user' => new UserResource($user),'token' => $user->createToken($request->device_name)->plainTextToken, 'token_type'=> 'bearer'];
    }

    public function sendOtpCode(Request $request)
    {
        $user = User::where('email', $request['email'])->first();

        $user->sendMobileNumberVerificationNotification();
        
        return new JsonResponse('otp code sent', 202);
    }

    public function logout(Request $request)
    {
        //
    }

    public function verifiyOtpCode(Request $request)
    {
        $user = User::where('email', $request['email'])->first();

        if($user->getOtpCodeForVerification() != $request['opt_code'])
        {
            throw ValidationException::withMessages([
                'otp_code' => ['Your Provided wrong OTP code.'],
            ]);
        }
        
        return new JsonResponse('otp code is correct', 204);
    }

    public function verifiy2faCode(Request $request)
    {
        
    }

    public function verifiy2faRecoverdCode(Request $request)
    {
        
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
