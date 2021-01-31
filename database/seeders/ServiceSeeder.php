<?php

namespace Database\Seeders;

use App\Models\Service;
use App\Models\ServiceCategory;
use Illuminate\Database\Seeder;
use App\Models\ServiceSubCategory;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ServiceCategory::firstOrCreate(['name' => 'Laboratory']);
        ServiceCategory::firstOrCreate(['name' => 'Consultations']);
        ServiceCategory::firstOrCreate(['name' => 'Admissions']);
        ServiceCategory::firstOrCreate(['name' => 'Procedures']);
        ServiceCategory::firstOrCreate(['name' => 'Radiology']);
        $radiology = ServiceCategory::where('name', 'Radiology')->first();
        $radiology->service_sub_categories()->delete();
        $radiology->service_sub_categories()->saveMany([
            new ServiceSubCategory(['name' => 'MRI']),
            new ServiceSubCategory(['name' => 'X-ray']),
            new ServiceSubCategory(['name' => 'Ultrasound']),
            new ServiceSubCategory(['name' => 'ECHO']),
            new ServiceSubCategory(['name' => 'EEG']),
            new ServiceSubCategory(['name' => 'ECG']),
            new ServiceSubCategory(['name' => 'CT- Scan'])
            
        ]);
        $xray = ServiceSubCategory::where('name', 'X-ray')->first();
        $xray->services()->delete();
        $xray->services()->saveMany([
            new Service(['name' => 'Chest X-Ray']),
            new Service(['name' => 'Skull X-Ray']),
            new Service(['name' => 'Supine Abdominal X-ray ']),
        ]);
        ServiceCategory::firstOrCreate(['name' => 'Evacuations']);
        ServiceCategory::firstOrCreate(['name' => 'Health Education']);
        $consultation = ServiceCategory::firstOrCreate(['name' => 'Consultation']);
        $consultation->service_sub_categories()->delete();
        $consultation->service_sub_categories()->save(
            new ServiceSubCategory(['name' => 'Specialized Consaltation'])
        );

        $specialized_consultation = ServiceSubCategory::where('name', 'Specialized Consaltation')->first();
        $specialized_consultation->services()->delete();
        $specialized_consultation->services()->saveMany([
            new Service(['name' => 'Allergist']),
            new Service(['name' => 'Immunologist']),
            new Service(['name' => 'Anesthisiologist']),
            new Service(['name' => 'Dermatologist']),
            new Service(['name' => 'Emergency Physician']),
            new Service(['name' => 'Internist']),
            new Service(['name' => 'Obstetrician and Gynecologist']),
            new Service(['name' => 'Gynecologist']),
            new Service(['name' => 'Obstetrician']),
            new Service(['name' => 'Nephrologist']),
            new Service(['name' => 'Oncologist']),
            new Service(['name' => 'Pediatrician']),
            new Service(['name' => 'Psychiatrist']),
            new Service(['name' => 'Surgeon']),
            new Service(['name' => 'Physical medicine and rehabilitation']),
            new Service(['name' => 'Urologist']),
            new Service(['name' => 'Family Physician']),
            new Service(['name' => 'Ophthalmologist']),
            new Service(['name' => 'Otorhinolaryngologist (ENT)']),
            new Service(['name' => 'Doctor of Dental Surgery']),
            new Service(['name' => 'Medical doctor']),
            new Service(['name' => 'traumatologist']),
            new Service(['name' => 'Cardiologist']),
            new Service(['name' => 'Pathologist']),
            new Service(['name' => 'General Consultations']),
            new Service(['name' => 'Aviation Medicine']),
            new Service(['name' => 'Orthopedics']),
            new Service(['name' => 'Endocrinologist']),
            new Service(['name' => 'Gastroenterologist']),
            new Service(['name' => 'Geriatric physician']),
            new Service(['name' => 'infectious diseases physician']),
            new Service(['name' => 'Pulmonologist']),
            new Service(['name' => 'Critical care physician']),
            new Service(['name' => 'Gynaecological Oncologist']),
            new Service(['name' => 'infertility specialist']),
            new Service(['name' => 'Plastic surgeon']),
            new Service(['name' => 'Pediatric surgeon']),
            new Service(['name' => 'Orthopedic surgeon']),
            new Service(['name' => 'Neurosurgeon']),
            new Service(['name' => 'Thoracic surgeon']),
            new Service(['name' => 'Vascular surgeon']),
            new Service(['name' => 'urologic oncologist']),
            new Service(['name' => 'Pediatric dermatologist']),
            new Service(['name' => 'General surgeon']),
            new Service(['name' => 'Chest and Pulmonology']),
            new Service(['name' => 'Counselling']),
            new Service(['name' => 'Dietician']),
            new Service(['name' => 'Wellness Centre']),
            new Service(['name' => 'Audiologist']),
            new Service(['name' => 'Speech Therapist']),
            new Service(['name' => 'Rheumatology']),
            new Service(['name' => 'Psychologist']),
            new Service(['name' => 'Neonatology']),
            new Service(['name' => 'Medical Officer']),
            new Service(['name' => 'Radiologist']),
            new Service(['name' => 'Internal Medicine']),
            new Service(['name' => 'Paediatrist']),
            new Service(['name' => 'Anaesthesist']),
            new Service(['name' => 'Neurologist']),
            new Service(['name' => 'Orthodontist']),
            new Service(['name' => 'Family Medicine']),
            new Service(['name' => 'Intensivist']),
            new Service(['name' => 'Dentist']),
        ]);

        $medicine = ServiceCategory::firstOrCreate(['name' => 'Medicines']);
        $equipment = ServiceCategory::firstOrCreate(['name' => 'Medical Equipment’s']);
        $medicine->service_sub_categories()->delete();
        $medicine->service_sub_categories()->saveMany([
	        new ServiceSubCategory(['name' => 'Analgesics']),
	        new ServiceSubCategory(['name' => 'Anesthetics']),
	        new ServiceSubCategory(['name' => 'Antibiotics']),
	        new ServiceSubCategory(['name' => 'Anticonvulsants']),
	        new ServiceSubCategory(['name' => 'Antidotes and antitoxins']),
	        new ServiceSubCategory(['name' => 'Antiemetic']),
	        new ServiceSubCategory(['name' => 'Antifungals']),
	        new ServiceSubCategory(['name' => 'Anti-inflammatory agents, including corticosteroids and nonsteroidal anti-inflammatory drugs (NSAIDs)']),
	        new ServiceSubCategory(['name' => 'Antihypertensive']),
	        new ServiceSubCategory(['name' => 'Antipsychotics']),
	        new ServiceSubCategory(['name' => 'Antivirals, including HIV Antiretrovirals and direct-acting hepatitis C drugs']),
	        new ServiceSubCategory(['name' => 'Anticoagulants']),

        ]);

        $analgesics = ServiceSubCategory::where('name', 'Analgesics')->first();
        $analgesics->services()->delete();
        // $analgesics->services()->saveMany([

        // ]);

    }
}
