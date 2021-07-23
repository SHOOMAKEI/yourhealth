<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultationBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultation_bookings', function (Blueprint $table) {
            $table->id();
            $table->timestamp('start');
            $table->timestamp('end');
            $table->enum('status', ['completed', 'ongoing', 'canceled', 'day_off', 'rescheduled'])->default('ongoing');
            $table->enum('appointment_mode', ['online', 'physical'])->default('physical');
            $table->string('appointment_category')->nullable();
            $table->foreignId('provider_profile_id')->constrained()->restrictOnDelete();
            $table->foreignId('provider_facility_id')->nullable()->constrained()->restrictOnDelete();
            $table->foreignId('client_profile_id')->nullable()->constrained()->restrictOnDelete();
            $table->foreignId('service_id')->nullable()->constrained()->restrictOnDelete();
            $table->double('price')->nullable();
            $table->string('currency')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('consultation_bookings');
    }
}
