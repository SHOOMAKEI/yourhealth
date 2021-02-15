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
            ServiceSubCategory::firstOrCreate(['service_category_id' => $radiology->id,'name' => 'MRI']);
            ServiceSubCategory::firstOrCreate(['service_category_id' => $radiology->id,'name' => 'X-ray']);
            ServiceSubCategory::firstOrCreate(['service_category_id' => $radiology->id,'name' => 'Ultrasound']);
            ServiceSubCategory::firstOrCreate(['service_category_id' => $radiology->id,'name' => 'ECHO']);
            ServiceSubCategory::firstOrCreate(['service_category_id' => $radiology->id,'name' => 'EEG']);
            ServiceSubCategory::firstOrCreate(['service_category_id' => $radiology->id,'name' => 'ECG']);
            ServiceSubCategory::firstOrCreate(['service_category_id' => $radiology->id,'name' => 'CT- Scan']);

        $xray = ServiceSubCategory::where('name', 'X-ray')->first();
            Service::firstOrCreate(['service_sub_category_id'=> $xray->id,'name' => 'Chest X-Ray']);
            Service::firstOrCreate(['service_sub_category_id'=> $xray->id,'name' => 'Skull X-Ray']);
            Service::firstOrCreate(['service_sub_category_id'=> $xray->id,'name' => 'Supine Abdominal X-ray ']);
        
        ServiceCategory::firstOrCreate(['name' => 'Evacuations']);
        ServiceCategory::firstOrCreate(['name' => 'Health Education']);
        $consultation = ServiceCategory::firstOrCreate(['name' => 'Consultation']);
            ServiceSubCategory::firstOrCreate(['service_category_id' => $consultation->id,'name' => 'Specialized Consaltation']);
        

        $specialized_consultation = ServiceSubCategory::where('name', 'Specialized Consaltation')->first();
        
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Allergist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Immunologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Anesthisiologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Dermatologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Emergency Physician']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Internist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Obstetrician and Gynecologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Gynecologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Obstetrician']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Nephrologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Oncologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Pediatrician']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Psychiatrist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Surgeon']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Physical medicine and rehabilitation']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Urologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Family Physician']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Ophthalmologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Otorhinolaryngologist (ENT)']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Doctor of Dental Surgery']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Medical doctor']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'traumatologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Cardiologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Pathologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'General Consultations']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Aviation Medicine']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Orthopedics']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Endocrinologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Gastroenterologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Geriatric physician']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'infectious diseases physician']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Pulmonologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Critical care physician']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Gynaecological Oncologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'infertility specialist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Plastic surgeon']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Pediatric surgeon']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Orthopedic surgeon']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Neurosurgeon']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Thoracic surgeon']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Vascular surgeon']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'urologic oncologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Pediatric dermatologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'General surgeon']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Chest and Pulmonology']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Counselling']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Dietician']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Wellness Centre']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Audiologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Speech Therapist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Rheumatology']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Psychologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Neonatology']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Medical Officer']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Radiologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Internal Medicine']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Paediatrist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Anaesthesist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Neurologist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Orthodontist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Family Medicine']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Intensivist']);
            Service::firstOrCreate(['service_sub_category_id' => $specialized_consultation->id,'name' => 'Dentist']);

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
