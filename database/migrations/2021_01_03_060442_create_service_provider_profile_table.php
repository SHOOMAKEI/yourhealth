<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceProviderProfileTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_provider_profile', function (Blueprint $table) {
            $table->id();
            $table->foreignId('provider_profile_id')->constrained();
            $table->foreignId('service_id')->constrained();
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
        Schema::dropIfExists('service_provider_profile');
    }
}
