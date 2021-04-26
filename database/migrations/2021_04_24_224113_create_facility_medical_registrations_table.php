<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacilityMedicalRegistrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facility_medical_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('certificate_name');
            $table->string('certificate_number');
            $table->string('registration_number')->nullable();
            $table->foreignId('provider_facility_id')->constrained()->onDelete('cascade');
            $table->string('year');
            $table->date('expired_at');
            $table->foreignId('service_category_id')->constrained()->onDelete('RESTRICT');
            $table->date('verified_at')->nullable();
            $table->date('rejected_at')->nullable();
            $table->boolean('is_verified')->default(false);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('facility_medical_registrations');
    }
}
