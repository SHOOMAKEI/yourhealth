<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRegistrationNumberColumnToMedicalRegistrationProviderProfileTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('medical_registration_provider_profile', function (Blueprint $table) {
            $table->string('registration_number');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('medical_registration_provider_profile', function (Blueprint $table) {
            $table->dropColumn('registration_number');
        });
    }
}
