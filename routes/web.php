<?php

use App\Models\Plan;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PackagesController;
use App\Http\Controllers\MedicalCourseController;
use App\Http\Controllers\SpecializationController;
use App\Http\Controllers\MedicalInstituteController;
use App\Http\Controllers\MedicalProcedureController;
use App\Http\Controllers\VerifyMobileNumberController;
use App\Http\Controllers\RequiredVerificationController;
use App\Http\Controllers\MedicalRegistrationCouncilController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
   $client_packages = Plan::where('category', 'client')->orderBy('sort_order', 'ASC')->get();
   $service_provider_packages = Plan::where('category', 'service-provider')->orderBy('sort_order', 'ASC')->get();
    return view('welcome', ['client_packages' =>  $client_packages, 'service_provider_packages' => $service_provider_packages ]);
});


Route::middleware(['auth:sanctum', 'verified', 'mobile_number_verified', 'complete_profile'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Route::middleware(['auth'])->get('/mobile_number/verify', [VerifyMobileNumberController::class, 'show'])->name('verify.mobile-number');

Route::post('/mobile_number/verification_code/verify', [VerifyMobileNumberController::class, 'verify'])
            ->middleware(['auth', 'throttle:6,1'])
            ->name('verification_code.verify');

Route::post('/mobile_number/verification-code/resend', [VerifyMobileNumberController::class, 'resend'])
    ->middleware(['auth', 'throttle:6,1'])
    ->name('verification_code.send');

Route::middleware(['auth','auth:sanctum', 'verified', 'language', 'role:super-admin'])->group(function(){

    Route::resource('packages', PackagesController::class);
    Route::resource('specializations', SpecializationController::class);
    Route::resource('procedures', MedicalProcedureController::class);
    Route::resource('medical_courses', MedicalCourseController::class);
    Route::resource('medical_institutes', MedicalInstituteController::class);
    Route::resource('medical_councils', MedicalRegistrationCouncilController::class);
    Route::resource('profile_validations', RequiredVerificationController::class);

});