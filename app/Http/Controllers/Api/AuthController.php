<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:sanctum', ['except' => ['login', 'username', 'resendOtpCode', 'verifyOtpCode']]);
    }
    

    public function login($rootVaule, array $args)
    {
    
        $data =  $this->username($rootVaule, $args);
       
        $user = User::where($data['field'], $args['input']['username'])->first();

        if(! $user || ($user->is_active ==false)) {
            
            return (object)([
                    'message' => 'User account has been disabled contact support team for more information.',
                    'status' => 204,
                    'type' => 'success'
                    ]);
        }
    
        if (! $user || ! Hash::check($args['input']['password'], $user->password)) {
           
            return  (object)([
                'message' => 'Incorrect Cridentials provided',
                'status' => 204,
                'type' => 'error'
                ]);
        }

        if(!($user->enabled_otp ==false)) {

            $user->sendOtpCodeNotification();

            return (object)([
                'user' => new UserResource($user),
                'settings' => [
                    'type' =>'otp',
                    'status' => true
                ], 
                'token' => null, 
                'token_type'=> null
            ]);
        }

        if(!is_null($user->two_factor_recovery_codes)) {

            return (object)([
                'user' => new UserResource($user),
                'settings' => [
                    'type' =>'two_factor_auth',
                    'status' => true
                ], 
                'token' => null, 
                'token_type'=> null
                ]);
        }
        
        return (object)([
            'user' => new UserResource($user),
            'token' => $user->createToken($args['input']['device_name'])->plainTextToken, 
            'token_type'=> 'bearer',
            'user' => new UserResource($user),
                'settings' => [
                    'type' =>null,
                    'status' => true
                ], 
                'token' => null, 
                'token_type'=> null
            ]);
    }

    public function resendOtpCode($rootVaule, array $args)
    {
        $user = User::where('email', $args['input']['email'])->first();

        $user->sendOtpCodeNotification();
        
        return (object)([
        'message' => 'otp code sent', 
        'status'=> 200,
        'type' => 'success'
        ]);
    }

    public function logout($rootVaule, array $args)
    {
        $user = User::where('email', $args['input']['email'])->first();

        $user->tokens()->where('name', $args['input']['device_name'])->delete();

        return (object)([
            'message' => 'user logged out successful', 
            'status'=> 200,
            'type' => 'success'
            ]);
    }

    public function verifyOtpCode($rootVaule, array $args)
    {
        $user = User::where('email', $args['input']['email'])->first();

        if($user->getOtpCodeForVerification() != $args['input']['otp_code'])
        {
            return (object)([
                'user' => null,
                'token' => null, 
                'token_type'=> null,
                'message' => 'Incorrect OTP provided', 
                'status'=> 204,
                'type' => 'error'
                ]);
        }
        
        $user->forceFill([
            'otp_code' => null,
        ])->save();

        return (object)([
            'user' => new UserResource($user),
            'token' => $user->createToken($args['input']['device_name'])->plainTextToken, 
            'token_type'=> 'bearer',
            'message' => 'OTP accepted', 
            'status'=> 200,
            'type' => 'success'
            ]);
    }

    public function username($rootVaule, array $args)
    {
        $login = $args['input']['username'];

        if (filter_var($login, FILTER_VALIDATE_EMAIL)) {
            $field = 'email';
        } else {
            $field = 'mobile_number';
        }
       
       $args =  array_merge([$field => $login], $args);

        return ['field' => $field, 'args' => $args];
    }

}
