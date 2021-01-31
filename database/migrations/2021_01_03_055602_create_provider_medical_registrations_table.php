<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProviderMedicalRegistrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('provider_medical_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('certificate_name');
            $table->string('certificate_number');
            $table->string('registration_number')->nullable();
            $table->foreignId('provider_profile_id')->constrained()->onDelete('cascade');
            $table->string('year');
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
        Schema::dropIfExists('provider_medical_registrations');
    }
}
