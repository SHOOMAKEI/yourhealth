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
use App\Http\Controllers\ProviderProfileController;
use App\Http\Controllers\Admin\ProviderProfileAdminController;
use App\Services\DumaPaymentOnline;

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
    Route::resource('service_provider_profiles', ProviderProfileAdminController::class);
    Route::get('service_provider_profiles/provider/{provider}/verify', [ProviderProfileAdminController::class, 'verify'])->name('service_provider_profiles.verify');
    Route::get('service_provider_profiles/provider/{provider}/unverify', [ProviderProfileAdminController::class, 'unverify'])->name('service_provider_profiles.unverify');

});

Route::middleware(['auth','auth:sanctum', 'verified', 'language', 'role:service-provider'])->group(function(){

  Route::resource('provider_profiles',ProviderProfileController::class);

});

Route::get('/payment/pay', function(){

$xmlBody = '
<API3G>
<CompanyToken>9F416C11-127B-4DE2-AC7F-D5710E4C5E0A</CompanyToken>
<Request>createToken</Request>
<Transaction>
<PaymentAmount>120000.00</PaymentAmount>
<PaymentCurrency>TZS</PaymentCurrency>
<CompanyRef>49FKEOA</CompanyRef>
<RedirectURL>http://www.domain.com/payurl.php</RedirectURL>
<BackURL>http://www.domain.com/backurl.php </BackURL>
<CompanyRefUnique>0</CompanyRefUnique>
<PTL>5</PTL>
</Transaction>
<Services>
  <Service>
    <ServiceType>5525</ServiceType>
    <ServiceDescription>Subscription fee</ServiceDescription>
    <ServiceDate>2020/11/20 19:00</ServiceDate>
  </Service>
</Services>
</API3G>';

 return DumaPaymentOnline::createTransactionToken($xmlBody);
 
});
