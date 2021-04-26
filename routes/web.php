<?php

use App\Http\Controllers\Admin\ProviderProfileAdminController;
use App\Http\Controllers\Admin\VerificationRequestsController;
use App\Http\Controllers\Authentication\AuthenticationController;
use App\Http\Controllers\Authentication\AuthenticationViewsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MedicalInstituteController;
use App\Http\Controllers\PackagesController;
use App\Http\Controllers\Registration\RegistrationController;
use App\Http\Controllers\RequiredVerificationController;
use App\Http\Controllers\ServiceProviderProfileCompletion\EducationQualificationController;
use App\Http\Controllers\ServiceProviderProfileCompletion\PersonalInfoController;
use App\Http\Controllers\ServiceProviderProfileCompletion\PracticeLicenseController;
use App\Http\Controllers\ServiceProviderProfileCompletion\ProviderFacilityController;
use App\Http\Controllers\ServiceProviderProfileCompletion\ProviderServicesController;
use App\Http\Controllers\Services\ServiceCategoryController;
use App\Http\Controllers\Services\ServiceController;
use App\Http\Controllers\Services\ServiceSubCategoryController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\VerifiedServiceProvider\DashboardController;
use App\Http\Controllers\VerifyMobileNumberController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Http\Controllers\EmailVerificationNotificationController;
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
    Route::post('/logout', [AuthenticationController::class, 'logout'])
        ->middleware(['auth'])
        ->name('logout');

    Route::get('/email/verify', [AuthenticationController::class, 'VerifyEmailView'])
        ->middleware(['auth'])
        ->name('verification.notice');


    Route::get('/email/verify/{id}/{hash}', [AuthenticationController::class, 'VerifyEmail'])
        ->middleware(['auth', 'signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware(['auth', 'throttle:6,1'])
        ->name('verification.send');

    Route::get('/reset-password/{token}', [AuthenticationController::class, 'resetPassword'])
        ->middleware(['guest'])
        ->name('password.reset');

    Route::post('/reset-password', [NewPasswordController::class, 'store'])
        ->middleware(['guest'])
        ->name('password.update');

    Route::get('/one-time-password', [AuthenticationController::class, 'otpView'])
        ->middleware(['guest'])
        ->name('otp.notice');

    Route::post('/one-time-password/resend', [AuthenticationController::class, 'resendOtpCode'])
        ->middleware(['guest'])
        ->name('otp.resend');

    Route::post('/one-time-password/verify', [AuthenticationController::class, 'verifyOtpCode'])
        ->middleware(['guest'])
        ->name('otp.verify');


    Route::get('/two-factor-challenge/index', [AuthenticationController::class, 'TwoFactoryAuthView'])
        ->middleware(['guest'])
        ->name('two-factor.login');

    Route::post('/two-factor-challenge', [AuthenticationController::class, 'verify2FACode'])
        ->middleware(array_filter([
            'guest',
            'throttle:6,1',
        ]))->name('two-factor.verify');

    Route::middleware(['auth'])->get('/mobile_number/verify', [VerifyMobileNumberController::class, 'show'])
     ->name('verify.mobile-number');

    Route::post('/mobile_number/verification_code/verify', [VerifyMobileNumberController::class, 'verify'])
     ->middleware(['auth', 'throttle:6,1'])
     ->name('verification_code.verify');

    Route::get('/mobile_number/verification-code/resend', [VerifyMobileNumberController::class, 'resend'])
     ->middleware(['auth', 'throttle:6,1'])
     ->name('verification_code.send');
});

Route::middleware(['auth','auth:sanctum', 'language','mobile_number_verified', 'role:unverified-service-provider'])
    ->group(function () {
        Route::get('service_provider/personal-info', [PersonalInfoController::class, 'index'])
            ->name('personalInfo.index');
        Route::post('/personal-information/update', [PersonalInfoController::class, 'update'])
            ->name('personalInfo.update');
        Route::post('/personal-information/upload-photo', [PersonalInfoController::class, 'uploadProfilePhoto'])
            ->name('personalInfo.uploadPhoto');
        Route::post('/education-qualification/store', [EducationQualificationController::class, 'store'])
            ->name('educationQualification.store');
        Route::get('/education-qualification/{qualification}/delete', [EducationQualificationController::class, 'destroy'])
            ->name('educationQualification.destroy');
        Route::post('/practice-license/store', [PracticeLicenseController::class, 'store'])
            ->name('practiceLicense.store');
        Route::get('/practice-license/{registration}/delete', [PracticeLicenseController::class, 'destroy'])
            ->name('practiceLicense.destroy');
        Route::post('/provider-service/store', [ProviderServicesController::class, 'store'])
            ->name('providerService.store');
        Route::get('/provider-service/{service}/delete', [ProviderServicesController::class, 'destroy'])
            ->name('providerService.destroy');
        Route::post('/provider-service/store', [ProviderServicesController::class, 'store'])
            ->name('providerService.store');
        Route::get('/provider-service/{service}/delete', [ProviderServicesController::class, 'destroy'])
            ->name('providerService.destroy');
        Route::post('/provider-service/request-service', [ProviderServicesController::class, 'requestServiceStore'])
            ->name('requestService.store');
        Route::post('/facility-service/store', [ProviderServicesController::class, 'facilityStore'])
            ->name('facilityService.store');
        Route::get('/facility-service/{service}/{facility}/delete', [ProviderServicesController::class, 'facilityDestroy'])
            ->name('facilityService.destroy');

        Route::post('/facility-information/store', [ProviderFacilityController::class, 'store'])
            ->name('facilityInfo.store');
        Route::post('/facility-information/{facility}/update', [ProviderFacilityController::class, 'update'])
            ->name('facilityInfo.update');
        Route::get('/facility-information/{facility}/delete', [ProviderFacilityController::class, 'destroy'])
            ->name('facilityInfo.destroy');
        Route::post('/company-information/update', [ProviderFacilityController::class, 'CompanyInfoUpdate'])
            ->name('companyInfo.update');
        Route::get('service_provider/profile-submission', [PersonalInfoController::class, 'profileSubmission'])
            ->name('profileSubmission.submit');
    });


 Route::middleware([ 'auth','auth:sanctum',  'verified_sp','language', 'mobile_number_verified', 'role:verified-service-provider'])
     ->group(function () {
         Route::get('/verified-service-provider-dashboard', DashboardController::class)
             ->name('verified_sp.home');

         Route::get('/settings/enable_otp', [SettingsController::class, 'enableOtp'])->name('otp.enable');
         Route::get('/settings/disable_otp', [SettingsController::class, 'disableOtp'])->name('otp.disable');
     });

Route::middleware([ 'auth','auth:sanctum', 'verified', 'verified_sp','language', 'mobile_number_verified', 'role:verified-service-provider|super-admin'])
    ->group(function () {
        Route::get('/settings/index', [SettingsController::class, 'index'])->name('settings.index');
        Route::post('/settings/update-account-information', [SettingsController::class, 'updateAccountInfo'])
            ->name('settings.updateAccountInfo');
        Route::post('/settings/update-password', [SettingsController::class, 'updatePassword'])
            ->name('settings.updatePassword');
        Route::get('/settings/toggle_otp', [SettingsController::class, 'toggleOTP'])
            ->name('settings.toggleOTP');
        Route::get('/settings/toggle_2fa', [SettingsController::class, 'toggle2FA'])
            ->name('settings.toggle2fa');
        Route::get('/settings/generate_recovery_code', [SettingsController::class, 'generateRecoveryCodes'])
            ->name('settings.recovery_code');
        Route::post('/settings/logout_other_sessions_browser', [SettingsController::class, 'sessionsBrowser'])
            ->name('settings.sessions_browser');
    });


 Route::middleware(['auth','auth:sanctum', 'verified', 'language', 'role:super-admin'])->group(function () {
     Route::get('admin/dashboard', function () {
         return Inertia::render('Dashboard');
     })->name('admin.dashboard');

     Route::resource('services_categories', ServiceCategoryController::class);
     Route::get('services_categories/{services_category}/visibility', [ServiceCategoryController::class, 'toggleVisibility'])
            ->name('services_categories.visibility');
     Route::get('services_categories/{services_category}/approval', [ServiceCategoryController::class, 'toggleApproval'])
            ->name('services_categories.approval');
//     Route::resource('services_sub_categories', ServiceSubCategoryController::class);
     Route::get('services_sub_categories/{services_category}', [ServiceSubCategoryController::class, 'index'])
        ->name('services_sub_categories.index');
     Route::get('services_sub_categories/{services_sub_category}/show', [ServiceSubCategoryController::class, 'show'])
        ->name('services_sub_categories.show');
     Route::post('services_sub_categories', [ServiceSubCategoryController::class, 'store'])
         ->name('services_sub_categories.store');
     Route::put('services_sub_categories/{services_sub_category}/update', [ServiceSubCategoryController::class, 'update'])
         ->name('services_sub_categories.update');
     Route::delete('services_sub_categories/{services_sub_category}', [ServiceSubCategoryController::class, 'destroy'])
         ->name('services_sub_categories.destroy');
     Route::get('services_sub_categories/{services_sub_category}/visibility', [ServiceSubCategoryController::class, 'toggleVisibility'])
         ->name('services_sub_categories.visibility');
     Route::get('services_sub_categories/{services_sub_category}/approval', [ServiceSubCategoryController::class, 'toggleApproval'])
         ->name('services_sub_categories.approval');

     Route::get('services/{services_sub_category}/index', [ServiceController::class, 'index'])
         ->name('services.index');
     Route::get('services/{service}/show', [ServiceController::class, 'show'])
         ->name('services.show');
     Route::post('services', [ServiceController::class, 'store'])
         ->name('services.store');
     Route::put('services/{service}/update', [ServiceController::class, 'update'])
         ->name('services.update');
     Route::delete('services/{service}', [ServiceController::class, 'destroy'])
         ->name('services.destroy');
     Route::get('services/{service}/visibility', [ServiceController::class, 'toggleVisibility'])
         ->name('services.visibility');
     Route::get('services/{service}/approval', [ServiceController::class, 'toggleApproval'])
         ->name('services.approval');



//     Route::resource('medical_courses', MedicalCourseController::class);
//     Route::resource('medical_institutes', MedicalInstituteController::class);
     Route::get('requested_services', [ServiceController::class, 'requestedServices'])
        ->name('requested_services.index');
     Route::resource('packages_registration', PackagesController::class);
     Route::get('membership_registration', [PackagesController::class, 'membershipIndex'])
         ->name('membership_registration.index');
     Route::post('membership_registration', [PackagesController::class, 'membershipStore'])
         ->name('membership_registration.store');
     Route::post('membership_registration/{membership}/update', [PackagesController::class, 'membershipUpdate'])
         ->name('membership_registration.update');
     Route::delete('membership_registration/{membership}', [PackagesController::class, 'membershipDestroy'])
         ->name('membership_registration.destroy');

     Route::get('service_provider_profiles', [VerificationRequestsController::class, 'profileInfo'])
        ->name('service_provider_profiles.index');
     Route::get('service_provider_profiles/{provider_profile}', [VerificationRequestsController::class, 'companyInfo'])
         ->name('service_provider_profiles.company');
     Route::get('service_provider_profiles/{provider_profile}/facilities', [VerificationRequestsController::class, 'facilities'])
         ->name('service_provider_profiles.facilities');
     Route::get('service_provider_profiles/{provider_facility}/services/facility', [VerificationRequestsController::class, 'facilityServices'])
         ->name('service_provider_profiles.facility_services');
     Route::get('service_provider_profiles/{provider_profile}/services/individual', [VerificationRequestsController::class, 'IndividualServices'])
         ->name('service_provider_profiles.services');
     Route::get('service_provider_profiles/{provider_profile}/qualifications', [VerificationRequestsController::class, 'qualifications'])
         ->name('service_provider_profiles.qualifications');
     Route::get('service_provider_profiles/{provider_profile}/practice_license', [VerificationRequestsController::class, 'practiceLicense'])
         ->name('service_provider_profiles.practice_license');
     Route::get('service_provider_profiles/{facility}/facility_practice_license', [VerificationRequestsController::class, 'facilityPracticeLicense'])
         ->name('service_provider_profiles.facility_practice_license');
     Route::get('service_provider_profiles/{practice_license}/practice_license_approval', [VerificationRequestsController::class, 'practiceLicenseApproval'])
         ->name('service_provider_profiles.practice_license_approval');
     Route::get('service_provider_profiles/{practice_license}/practice_license_deny', [VerificationRequestsController::class, 'practiceLicenseDeny'])
         ->name('service_provider_profiles.practice_license_deny');
     Route::get('service_provider_profiles/{practice_license}/facility_practice_license_approval', [VerificationRequestsController::class, 'facilityPracticeLicenseApproval'])
         ->name('service_provider_profiles.facility_practice_license_approval');
     Route::get('service_provider_profiles/{practice_license}/facility_practice_license_deny', [VerificationRequestsController::class, 'facilityPracticeLicenseDeny'])
         ->name('service_provider_profiles.facility_practice_license_deny');
     Route::get('service_provider_profiles/provider/{provider_profile}/verify', [VerificationRequestsController::class, 'verify'])
      ->name('service_provider_profiles.verify');
     Route::post('service_provider_profiles/provider/reject', [VerificationRequestsController::class, 'reject'])
         ->name('service_provider_profiles.reject');
     Route::get('service_provider_profiles/{profile}/show', [VerificationRequestsController::class, 'viewProviderProfileInfo'])
         ->name('service_provider_profiles.show');
//
//     Route::resource('profile_validations', RequiredVerificationController::class); viewProviderProfileInfo
//     Route::resource('service_provider_profiles', ProviderProfileAdminController::class);
 });
