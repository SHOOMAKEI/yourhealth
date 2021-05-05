<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultationFeedbackTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultation_feedback', function (Blueprint $table) {
            $table->id();
            $table->text('comment');
            $table->double('ratings');
            $table->foreignId('provider_profile_id')->constrained()->restrictOnDelete();
            $table->foreignId('consultation_booking_id')->constrained()->restrictOnDelete();
            $table->foreignId('provider_facility_id')->nullable()->constrained()->restrictOnDelete();
            $table->foreignId('client_profile_id')->nullable()->constrained()->restrictOnDelete();
            $table->foreignId('service_id')->nullable()->constrained()->restrictOnDelete();
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
        Schema::dropIfExists('consultation_feedback');
    }
}
