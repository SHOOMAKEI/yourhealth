<?php

use App\Http\Controllers\Admin\ProviderProfileAdminController;
use App\Http\Controllers\Api\Auth\VerifyEmailController;
use App\Http\Controllers\Authentication\AuthenticationController;
use App\Http\Controllers\Authentication\AuthenticationViewsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MedicalCourseController;
use App\Http\Controllers\MedicalInstituteController;
use App\Http\Controllers\MedicalProcedureController;
use App\Http\Controllers\MedicalRegistrationCouncilController;
use App\Http\Controllers\PackagesController;
use App\Http\Controllers\ProviderProfileController;
use App\Http\Controllers\Registration\RegistrationController;
use App\Http\Controllers\RequiredVerificationController;
use App\Http\Controllers\ServiceProviderProfileCompletion\EducationQualificationController;
use App\Http\Controllers\ServiceProviderProfileCompletion\PersonalInfoController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\SpecializationController;
use App\Http\Controllers\VerifyMobileNumberController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Http\Controllers\EmailVerificationNotificationController;
use Laravel\Fortify\Http\Controllers\EmailVerificationPromptController;
use Laravel\Fortify\Http\Controllers\NewPasswordController;
use Laravel\Fortify\Http\Controllers\PasswordController;
use Laravel\Fortify\Http\Controllers\PasswordResetLinkController;
use Laravel\Fortify\Http\Controllers\ProfileInformationController;

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
Route::group(['middleware' => ['web']], function () {
    //Registration Routes
    Route::get('/', [HomeController::class, 'index'])
        ->middleware('guest')->name('home');
    Route::get('/register', [HomeController::class, 'register'])
        ->middleware('guest')->name('register');
    Route::get('/login', [HomeController::class, 'login'])
        ->middleware('guest')->name('login');
    Route::get('/register_individual', [HomeController::class, 'registerIndividualServiceProvider'])
        ->middleware('guest')->name('register.individual');
    Route::get('/register_facility', [HomeController::class, 'registerFacilityServiceProvider'])
        ->middleware('guest')->name('register.facility');
    Route::get('/register_company', [HomeController::class, 'registerCompanyServiceProvider'])
        ->middleware('guest')->name('register.company');
    Route::post('/create_account', [RegistrationController::class, 'createUserAccount'])
        ->middleware('guest')->name('account.create');

    //Authentication Routes
    Route::post('login', [AuthenticationController::class, 'login'])
        ->middleware('guest')->name('login');
    Route::get('/forgot-password-page', [AuthenticationViewsController::class, 'showForgetPasswordForm'])
        ->middleware(['guest']) ->name('password.forgot');
    Route::get('/reset-password/{token}', [AuthenticationViewsController::class, 'showResetPasswordForm'])
        ->middleware(['guest'])->name('password.reset');
    Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
        ->middleware(['guest'])->name('password.email');
    Route::post('/reset-password', [NewPasswordController::class, 'store'])
        ->middleware(['guest'])->name('password.update');
    Route::post('/logout', [EmailVerificationNotificationController::class, 'store'])
        ->middleware(['auth', 'throttle:6,1'])
        ->name('logout');


//    //Email Verification
//    Route::get('/email/verify', [EmailVerificationPromptController::class, '__invoke'])
//        ->middleware(['auth'])
//        ->name('verification.notice');
//
//
//    Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
//        ->middleware(['auth', 'signed', 'throttle:6,1'])
//        ->name('verification.verify');
//
//    Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
//        ->middleware(['auth', 'throttle:6,1'])
//        ->name('verification.send');
//
//
//    // Profile Information...
//    Route::put('/user/profile-information', [ProfileInformationController::class, 'update'])
//        ->middleware(['auth'])
//        ->name('user-profile-information.update');
//
//
//    // Passwords...
//    Route::put('/user/password', [PasswordController::class, 'update'])
//        ->middleware(['auth'])
//        ->name('user-password.update');
//
//
//    // Two Factor Authentication...
//
//    Route::get('/two-factor-challenge', [TwoFactorAuthenticatedSessionController::class, 'create'])
//        ->middleware(['guest'])
//        ->name('two-factor.login');
//
//    Route::post('/two-factor-challenge', [TwoFactorAuthenticatedSessionController::class, 'store'])
//        ->middleware(array_filter([
//            'guest',
//            $twoFactorLimiter ? 'throttle:'.$twoFactorLimiter : null,
//        ]));
//
//    $twoFactorMiddleware =  ['auth'];
//
//    Route::post('/user/two-factor-authentication', [TwoFactorAuthenticationController::class, 'store'])
//        ->middleware($twoFactorMiddleware);
//
//    Route::delete('/user/two-factor-authentication', [TwoFactorAuthenticationController::class, 'destroy'])
//        ->middleware($twoFactorMiddleware);
//
//    Route::get('/user/two-factor-qr-code', [TwoFactorQrCodeController::class, 'show'])
//        ->middleware($twoFactorMiddleware);
//
//    Route::get('/user/two-factor-recovery-codes', [RecoveryCodeController::class, 'index'])
//        ->middleware($twoFactorMiddleware);
//
//    Route::post('/user/two-factor-recovery-codes', [RecoveryCodeController::class, 'store'])
//        ->middleware($twoFactorMiddleware);
    // Route::middleware(['auth'])->get('/mobile_number/verify', [VerifyMobileNumberController::class, 'show'])
//     ->name('verify.mobile-number');

// Route::post('/mobile_number/verification_code/verify', [VerifyMobileNumberController::class, 'verify'])
//     ->middleware(['auth', 'throttle:6,1'])
//     ->name('verification_code.verify');

// Route::post('/mobile_number/verification-code/resend', [VerifyMobileNumberController::class, 'resend'])
//     ->middleware(['auth', 'throttle:6,1'])
//     ->name('verification_code.send');

});

Route::middleware(['auth','auth:sanctum', 'verified', 'language','mobile_number_verified', 'role:service-provider'])
    ->group(function(){
        Route::get('service_provider/personal-info', [PersonalInfoController::class, 'index'])
            ->name('personalInfo.index');
        Route::post('/personal-information/update', [PersonalInfoController::class, 'update'])
            ->name('personalInfo.update');
        Route::post('/education-qualification/store', [EducationQualificationController::class, 'store'])
            ->name('educationQualification.store');
        Route::get('/education-qualification/{qualification}/delete', [EducationQualificationController::class, 'destroy'])
            ->name('educationQualification.destroy');

        Route::get('service_provider/profile_info', [ProviderProfileController::class ,'profileInfo'])
            ->name('profile-completion.index');
        Route::get('service_provider/establishments', [ProviderProfileController::class ,'establishments'])
            ->name('establishments.index');
        Route::get('service_provider/specializations', [ProviderProfileController::class ,'specializations'])
            ->name('provider_specializations.index');
        Route::get('service_provider/verifications', [ProviderProfileController::class ,'verifications'])
            ->name('verifications.index');
        Route::get('service_provider/submittion', [ProviderProfileController::class ,'submittion'])
            ->name('submittion.index');
        Route::get('service_provider/medical_qualification', [ProviderProfileController::class , 'medicalQualification'])
            ->name('medical_qualification.index');
        Route::post('service_provider/save', [ProviderProfileController::class ,'store'])
            ->name('provider_profiles.store');
        Route::get('service_provider/submittion/submit', [ProviderProfileController::class ,'submitted'])
            ->name('submittion.store');
    });


 Route::middleware([ 'auth','auth:sanctum', 'verified', 'verified_sp','language', 'mobile_number_verified'])
     ->group( function () {

//     Route::get('/dashboard', [PersonalInfoController::class, 'index'])->name('dashboard');

     Route::get('/settings/enable_otp', [SettingsController::class, 'enableOtp'])->name('otp.enable');
     Route::get('/settings/disable_otp', [SettingsController::class, 'disableOtp'])->name('otp.disable');

 });



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



