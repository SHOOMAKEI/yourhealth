<?php

use App\Http\Controllers\Admin\ProviderProfileAdminController;
use App\Http\Controllers\Api\Auth\VerifyEmailController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MedicalCourseController;
use App\Http\Controllers\MedicalInstituteController;
use App\Http\Controllers\MedicalProcedureController;
use App\Http\Controllers\MedicalRegistrationCouncilController;
use App\Http\Controllers\PackagesController;
use App\Http\Controllers\ProviderProfileController;
use App\Http\Controllers\Registration\RegistrationController;
use App\Http\Controllers\RequiredVerificationController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\SpecializationController;
use App\Http\Controllers\VerifyMobileNumberController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/register', [HomeController::class, 'register'])->name('register');
Route::get('/login', [HomeController::class, 'login'])->name('login');
Route::get('/register_individual', [HomeController::class, 'registerIndividualServiceProvider'])->name('register.individual');
Route::get('/register_facility', [HomeController::class, 'registerFacilityServiceProviderServiceProvider'])->name('register.facility');
Route::get('/register_company', [HomeController::class, 'registerCompanyServiceProviderServiceProvider'])->name('register.company');
Route::post('/create_account', [RegistrationController::class, 'createUserAccount'])->name('account.create');



// Route::middleware([ 'auth','auth:sanctum', 'verified', 'verified_sp','language', 'mobile_number_verified'])->group( function () {

//     Route::get('/dashboard', function(){return view('dashboard');})->name('dashboard');
//     Route::get('/settings/enable_otp', [SettingsController::class, 'enableOtp'])->name('otp.enable');
//     Route::get('/settings/disable_otp', [SettingsController::class, 'disableOtp'])->name('otp.disable');

// });

// Route::middleware(['auth'])->get('/mobile_number/verify', [VerifyMobileNumberController::class, 'show'])
//     ->name('verify.mobile-number');

// Route::post('/mobile_number/verification_code/verify', [VerifyMobileNumberController::class, 'verify'])
//     ->middleware(['auth', 'throttle:6,1'])
//     ->name('verification_code.verify');

// Route::post('/mobile_number/verification-code/resend', [VerifyMobileNumberController::class, 'resend'])
//     ->middleware(['auth', 'throttle:6,1'])
//     ->name('verification_code.send');

// Route::middleware(['auth','auth:sanctum', 'verified', 'language', 'role:super-admin'])->group(function(){
//     Route::resource('packages', PackagesController::class);
//     Route::resource('specializations', SpecializationController::class);
//     Route::resource('procedures', MedicalProcedureController::class);
//     Route::resource('medical_courses', MedicalCourseController::class);
//     Route::resource('medical_institutes', MedicalInstituteController::class);
//     Route::resource('medical_councils', MedicalRegistrationCouncilController::class);
//     Route::resource('profile_validations', RequiredVerificationController::class);
//     Route::resource('service_provider_profiles', ProviderProfileAdminController::class);
//     Route::get('service_provider_profiles/provider/{provider}/verify', [ProviderProfileAdminController::class, 'verify'])->name('service_provider_profiles.verify');
//     Route::get('service_provider_profiles/provider/{provider}/unverify', [ProviderProfileAdminController::class, 'unverify'])->name('service_provider_profiles.unverify');

// });

// Route::middleware(['auth','auth:sanctum', 'verified', 'language','mobile_number_verified', 'role:service-provider'])->group(function(){
// //   Route::resource('provider_profiles',ProviderProfileController::class);
//   Route::get('service_provider/profile_info', [ProviderProfileController::class ,'profileInfo'])->name('profile_info.index');
//   Route::get('service_provider/establishments', [ProviderProfileController::class ,'establishments'])->name('establishments.index');
//   Route::get('service_provider/specializations', [ProviderProfileController::class ,'specializations'])->name('provider_specializations.index');
//   Route::get('service_provider/verifications', [ProviderProfileController::class ,'verifications'])->name('verifications.index');
//   Route::get('service_provider/submittion', [ProviderProfileController::class ,'submittion'])->name('submittion.index');
//   Route::get('service_provider/medical_qualification', [ProviderProfileController::class , 'medicalQualification'])->name('medical_qualification.index');
//   Route::post('service_provider/save', [ProviderProfileController::class ,'store'])->name('provider_profiles.store');
//   Route::get('service_provider/submittion/submit', [ProviderProfileController::class ,'submitted'])->name('submittion.store');
// });




Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');
