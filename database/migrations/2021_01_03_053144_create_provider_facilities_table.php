<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProviderFacilitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('provider_facilities', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('name');
            $table->string('trading_name')->nullable();
            $table->string('mobile_number');
            $table->string('alternative_mobile_number')->nullable();
            $table->string('email');
            $table->string('address')->nullable();
            $table->string('physical_address')->nullable();
            $table->string('website')->nullable();
            $table->string('registration_number')->nullable();
            $table->text('description')->nullable();
            $table->string('tin');
            $table->string('vrn');
            $table->boolean('is_active')->default(1);
            $table->foreignId('provider_sub_level_id')->constrained()->onDelete('cascade');
            $table->foreignId('provider_company_id')->constrained()->onDelete('cascade');
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
        Schema::dropIfExists('provider_facilities');
    }
}
