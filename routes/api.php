<?php

// use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Registration\ClientRegistrationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test/{args}', [ClientRegistrationController::class,'subscribeToPackagePlan']);

// Route::post('/login', [AuthController::class, 'login']);
// Route::post('/verify/otp', [AuthController::class, 'verifiyOtpCode']);
// Route::post('/resend/otp', [AuthController::class, 'sendOtpCode']);
