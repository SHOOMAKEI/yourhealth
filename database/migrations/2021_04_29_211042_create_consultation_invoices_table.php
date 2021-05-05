<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultationInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultation_invoices', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_number');
            $table->timestamp('paid_at')->nullable();
            $table->string('payment_channel')->nullable();
            $table->string('payment_receipt')->nullable();
            $table->string('payment_reference_no')->nullable();
            $table->foreignId('provider_profile_id')->constrained()->restrictOnDelete();
            $table->foreignId('consultation_booking_id')->constrained()->restrictOnDelete();
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
        Schema::dropIfExists('consultation_invoices');
    }
}
