<?php

namespace Database\Seeders;

use App\Models\Day;
use FontLib\Table\Type\name;
use App\Models\ProviderLevel;
use Illuminate\Database\Seeder;
use App\Models\ProviderCategory;
use App\Models\ProviderSubLevel;

class ProviderLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ProviderCategory::firstOrCreate(['name' => 'Individual']);
        ProviderCategory::firstOrCreate(['name' => 'Company']);
        ProviderCategory::firstOrCreate(['name' => 'Facility']);

        Day::firstOrCreate(['name' => 'Monday']);
        Day::firstOrCreate(['name' => 'Tuesday']);
        Day::firstOrCreate(['name' => 'Wednesday']);
        Day::firstOrCreate(['name' => 'Thursday']);
        Day::firstOrCreate(['name' => 'Friday']);
        Day::firstOrCreate(['name' => 'Saturday']);
        Day::firstOrCreate(['name' => 'Sunday']);

        ProviderLevel::firstOrCreate(['name' => 'Health Post']);
        ProviderLevel::firstOrCreate(['name' => 'Dispensary']);
        ProviderLevel::firstOrCreate(['name' => 'Specialized Clinic']);
        ProviderLevel::firstOrCreate(['name' => 'Polyclinic']);
        ProviderLevel::firstOrCreate(['name' => 'Specialized Hospital']);
        ProviderLevel::firstOrCreate(['name' => 'Hospital']);
        ProviderLevel::firstOrCreate(['name' => 'Pharmacy']);
        ProviderLevel::firstOrCreate(['name' => 'Laboratory']);
        ProviderLevel::firstOrCreate(['name' => 'Diagnostic Center']);
        ProviderLevel::firstOrCreate(['name' => 'Ground Ambulance']);
        ProviderLevel::firstOrCreate(['name' => 'Air Ambulance']);
        ProviderLevel::firstOrCreate(['name' => 'Physiotherapy']);
        ProviderLevel::firstOrCreate(['name' => 'Allergist']);
        ProviderLevel::firstOrCreate(['name' => 'Immunologist']);
        ProviderLevel::firstOrCreate(['name' => 'Anesthisiologist']);
        ProviderLevel::firstOrCreate(['name' => 'Dermatologist']);
        ProviderLevel::firstOrCreate(['name' => 'Emergency Physician']);
        ProviderLevel::firstOrCreate(['name' => 'Internist']);
        ProviderLevel::firstOrCreate(['name' => 'Obstetrician and Gynecologist']);
        ProviderLevel::firstOrCreate(['name' => 'Gynecologist']);
        ProviderLevel::firstOrCreate(['name' => 'Obstetrician']);
        ProviderLevel::firstOrCreate(['name' => 'Nephrologist']);
        ProviderLevel::firstOrCreate(['name' => 'Oncologist']);
        ProviderLevel::firstOrCreate(['name' => 'Pediatrician']);
        ProviderLevel::firstOrCreate(['name' => 'Psychiatrist']);
        ProviderLevel::firstOrCreate(['name' => 'Surgeon']);
        ProviderLevel::firstOrCreate(['name' => 'Physical medicine and rehabilitation']);
        ProviderLevel::firstOrCreate(['name' => 'Urologist']);
        ProviderLevel::firstOrCreate(['name' => 'Family Physician']);
        ProviderLevel::firstOrCreate(['name' => 'Ophthalmologist']);
        ProviderLevel::firstOrCreate(['name' => 'Otorhinolaryngologist (ENT)']);
        ProviderLevel::firstOrCreate(['name' => 'Doctor of Dental Surgery']);
        ProviderLevel::firstOrCreate(['name' => 'Medical doctor']);
        ProviderLevel::firstOrCreate(['name' => 'traumatologist']);
        ProviderLevel::firstOrCreate(['name' => 'Cardiologist']);
        ProviderLevel::firstOrCreate(['name' => 'Pathologist']);
        ProviderLevel::firstOrCreate(['name' => 'General Consultations']);
        ProviderLevel::firstOrCreate(['name' => 'Aviation Medicine']);
        ProviderLevel::firstOrCreate(['name' => 'Orthopedics']);
        ProviderLevel::firstOrCreate(['name' => 'Endocrinologist']);
        ProviderLevel::firstOrCreate(['name' => 'Gastroenterologist']);
        ProviderLevel::firstOrCreate(['name' => 'Geriatric physician']);
        ProviderLevel::firstOrCreate(['name' => 'infectious diseases physician']);
        ProviderLevel::firstOrCreate(['name' => 'Pulmonologist']);
        ProviderLevel::firstOrCreate(['name' => 'Critical care physician']);
        ProviderLevel::firstOrCreate(['name' => 'Gynaecological Oncologist']);
        ProviderLevel::firstOrCreate(['name' => 'infertility specialist']);
        ProviderLevel::firstOrCreate(['name' => 'Plastic surgeon']);
        ProviderLevel::firstOrCreate(['name' => 'Pediatric surgeon']);
        ProviderLevel::firstOrCreate(['name' => 'Orthopedic surgeon']);
        ProviderLevel::firstOrCreate(['name' => 'Neurosurgeon']);
        ProviderLevel::firstOrCreate(['name' => 'Thoracic surgeon']);
        ProviderLevel::firstOrCreate(['name' => 'Vascular surgeon']);
        ProviderLevel::firstOrCreate(['name' => 'urologic oncologist']);
        ProviderLevel::firstOrCreate(['name' => 'Pediatric dermatologist']);
        ProviderLevel::firstOrCreate(['name' => 'General surgeon']);
        ProviderLevel::firstOrCreate(['name' => 'Chest and Pulmonology']);
        ProviderLevel::firstOrCreate(['name' => 'Counselling']);
        ProviderLevel::firstOrCreate(['name' => 'Dietician']);
        ProviderLevel::firstOrCreate(['name' => 'Wellness Centre']);
        ProviderLevel::firstOrCreate(['name' => 'Audiologist']);
        ProviderLevel::firstOrCreate(['name' => 'Speech Therapist']);
        ProviderLevel::firstOrCreate(['name' => 'Rheumatology']);
        ProviderLevel::firstOrCreate(['name' => 'Psychologist']);
        ProviderLevel::firstOrCreate(['name' => 'Neonatology']);
        ProviderLevel::firstOrCreate(['name' => 'Medical Officer']);
        ProviderLevel::firstOrCreate(['name' => 'Radiologist']);
        ProviderLevel::firstOrCreate(['name' => 'Internal Medicine']);
        ProviderLevel::firstOrCreate(['name' => 'Paediatrist']);
        ProviderLevel::firstOrCreate(['name' => 'Anaesthesist']);
        ProviderLevel::firstOrCreate(['name' => 'Neurologist']);
        ProviderLevel::firstOrCreate(['name' => 'Orthodontist']);
        ProviderLevel::firstOrCreate(['name' => 'Family Medicine']);
        ProviderLevel::firstOrCreate(['name' => 'Intensivist']);
        ProviderLevel::firstOrCreate(['name' => 'Dentist']);

        $sample = ProviderLevel::where('name','Diagnostic Center')->first();
        $sample->provider_sub_levels()->saveMany([
            new ProviderSubLevel(['name' => 'Pathology']),
            new ProviderSubLevel(['name' => 'Radiology']),
            new ProviderSubLevel(['name' => 'Laboratory']),
        ]);

    }
}
