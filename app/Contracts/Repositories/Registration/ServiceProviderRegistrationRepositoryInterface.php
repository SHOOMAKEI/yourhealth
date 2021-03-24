<?php


namespace App\Contracts\Repositories\Registration;


use App\Models\ClientProfile;
use App\Models\DaySession;
use App\Models\ProviderCompany;
use App\Models\ProviderFacility;
use App\Models\ProviderMedicalRegistration;
use App\Models\ProviderProfile;
use App\Models\ProviderQualification;
use App\Models\Service;
use App\Models\User;
use App\Rules\FacilityOwner;

interface ServiceProviderRegistrationRepositoryInterface
{
    public function createAccount(array $request):User;

    public function createProviderProfile(array $request):ProviderProfile;

    public function createClientProfile(array $request):ClientProfile;

    public function createOrUpdateProviderCompany(array $request):ProviderCompany;

    public function createProviderFacility(array $request):ProviderFacility;

    public function createFacilityOwner(array $request):FacilityOwner;

    public function updateProviderFacility(array $request):ProviderFacility;

    public function deleteProviderFacility(array $request):ProviderFacility;

    public function createProviderQualification(array $request):ProviderQualification;

    public function updateProviderQualification(array $request):ProviderQualification;

    public function deleteProviderQualification(array $request):ProviderQualification;

    public function createProviderMedicalRegistration(array $request):ProviderMedicalRegistration;

    public function updateProviderMedicalRegistration(array $request):ProviderMedicalRegistration;

    public function deleteProviderMedicalRegistration(array $request):ProviderMedicalRegistration;

    public function createProviderProfileServices(array $request):Service;

    public function deleteProviderProfileServices(array $request):Service;

    public function createProviderFacilityServices(array $request):Service;

    public function deleteProviderFacilityServices(array $request):Service;

    public function createProviderProfileCalendar(array $request):DaySession;

    public function createProviderFacilityCalendar(array $request):DaySession;

    public function updateProviderProfileCalendar(array $request):DaySession;

    public function updateProviderFacilityCalendar(array $request):DaySession;

    public function submitProfileForVerification(array $request):ProviderProfile;
}
