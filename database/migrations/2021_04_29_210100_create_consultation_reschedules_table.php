<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultationReschedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultation_reschedules', function (Blueprint $table) {
            $table->id();
            $table->timestamp('start');
            $table->timestamp('end');
            $table->foreignId('consultation_booking_id')->constrained()->restrictOnDelete();
            $table->enum('status', ['completed', 'ongoing', 'canceled', 'day_off', 'rescheduled'])->default('ongoing');
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
        Schema::dropIfExists('consultation_reschedules');
    }
}
