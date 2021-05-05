<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacilityServiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facility_service', function (Blueprint $table) {
            $table->id();
            $table->foreignId('provider_facility_id')->constrained()->restrictOnDelete();
            $table->foreignId('service_id')->constrained()->restrictOnDelete();
            $table->double('price');
            $table->double('compare_price')->nullable();
            $table->string('currency');
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
        Schema::dropIfExists('facility_service');
    }
}
