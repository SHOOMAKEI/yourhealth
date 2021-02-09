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
        ServiceSubCategory::truncate();
        Service::truncate();
        ServiceCategory::firstOrCreate(['name' => 'Laboratory']);
        ServiceCategory::firstOrCreate(['name' => 'Consultations']);
        ServiceCategory::firstOrCreate(['name' => 'Admissions']);
        ServiceCategory::firstOrCreate(['name' => 'Procedures']);
        ServiceCategory::firstOrCreate(['name' => 'Radiology']);
        $radiology = ServiceCategory::where('name', 'Radiology')->first();
            ServiceSubCategory::fristOrCreate(['service_category_id' => $radiology->id,'name' => 'MRI']);
            ServiceSubCategory::fristOrCreate(['service_category_id' => $radiology->id,'name' => 'X-ray']);
            ServiceSubCategory::fristOrCreate(['service_category_id' => $radiology->id,'name' => 'Ultrasound']);
            ServiceSubCategory::fristOrCreate(['service_category_id' => $radiology->id,'name' => 'ECHO']);
            ServiceSubCategory::fristOrCreate(['service_category_id' => $radiology->id,'name' => 'EEG']);
            ServiceSubCategory::fristOrCreate(['service_category_id' => $radiology->id,'name' => 'ECG']);
            ServiceSubCategory::fristOrCreate(['service_category_id' => $radiology->id,'name' => 'CT- Scan']);

        $xray = ServiceSubCategory::where('name', 'X-ray')->first();
            Service::firstOrCreate(['service_sub_category_id'=> $xray->id,'name' => 'Chest X-Ray']);
            Service::firstOrCreate(['service_sub_category_id'=> $xray->id,'name' => 'Skull X-Ray']);
            Service::firstOrCreate(['service_sub_category_id'=> $xray->id,'name' => 'Supine Abdominal X-ray ']);
        
        ServiceCategory::firstOrCreate(['name' => 'Evacuations']);
        ServiceCategory::firstOrCreate(['name' => 'Health Education']);
        $consultation = ServiceCategory::firstOrCreate(['name' => 'Consultation']);
            ServiceSubCategory::firstOrCreate(['service_category_id' => $consultation->id,'name' => 'Specialized Consaltation']);
        

        $specialized_consultation = ServiceSubCategory::where('name', 'Specialized Consaltation')->first();
        
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Allergist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Immunologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Anesthisiologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Dermatologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Emergency Physician']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Internist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Obstetrician and Gynecologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Gynecologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Obstetrician']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Nephrologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Oncologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Pediatrician']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Psychiatrist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Surgeon']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Physical medicine and rehabilitation']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Urologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Family Physician']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Ophthalmologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Otorhinolaryngologist (ENT)']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Doctor of Dental Surgery']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Medical doctor']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'traumatologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Cardiologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Pathologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'General Consultations']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Aviation Medicine']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Orthopedics']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Endocrinologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Gastroenterologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Geriatric physician']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'infectious diseases physician']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Pulmonologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Critical care physician']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Gynaecological Oncologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'infertility specialist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Plastic surgeon']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Pediatric surgeon']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Orthopedic surgeon']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Neurosurgeon']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Thoracic surgeon']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Vascular surgeon']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'urologic oncologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Pediatric dermatologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'General surgeon']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Chest and Pulmonology']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Counselling']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Dietician']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Wellness Centre']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Audiologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Speech Therapist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Rheumatology']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Psychologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Neonatology']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Medical Officer']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Radiologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Internal Medicine']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Paediatrist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Anaesthesist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Neurologist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Orthodontist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Family Medicine']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Intensivist']);
            Service::fristOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Dentist']);

        $medicine = ServiceCategory::firstOrCreate(['name' => 'Medicines']);
        $equipment = ServiceCategory::firstOrCreate(['name' => 'Medical Equipment’s']);
        
	        ServiceSubCategory::firstOrCreate(['service_category_id'=> $medicine->id,'name' => 'Analgesics']);
	        ServiceSubCategory::firstOrCreate(['service_category_id'=> $medicine->id,'name' => 'Anesthetics']);
	        ServiceSubCategory::firstOrCreate(['service_category_id'=> $medicine->id,'name' => 'Antibiotics']);
	        ServiceSubCategory::firstOrCreate(['service_category_id'=> $medicine->id,'name' => 'Anticonvulsants']);
	        ServiceSubCategory::firstOrCreate(['service_category_id'=> $medicine->id,'name' => 'Antidotes and antitoxins']);
	        ServiceSubCategory::firstOrCreate(['service_category_id'=> $medicine->id,'name' => 'Antiemetic']);
	        ServiceSubCategory::firstOrCreate(['service_category_id'=> $medicine->id,'name' => 'Antifungals']);
	        ServiceSubCategory::firstOrCreate(['service_category_id'=> $medicine->id,'name' => 'Anti-inflammatory agents, including corticosteroids and nonsteroidal anti-inflammatory drugs (NSAIDs)']);
	        ServiceSubCategory::firstOrCreate(['service_category_id'=> $medicine->id,'name' => 'Antihypertensive']);
	        ServiceSubCategory::firstOrCreate(['service_category_id'=> $medicine->id,'name' => 'Antipsychotics']);
	        ServiceSubCategory::firstOrCreate(['service_category_id'=> $medicine->id,'name' => 'Antivirals, including HIV Antiretrovirals and direct-acting hepatitis C drugs']);
	        ServiceSubCategory::firstOrCreate(['service_category_id'=> $medicine->id,'name' => 'Anticoagulants']);

       

        $analgesics = ServiceSubCategory::where('name', 'Analgesics')->first();
        $analgesics->services()->delete();
        // $analgesics->services()->saveMany([

        // ]);

    }
}
