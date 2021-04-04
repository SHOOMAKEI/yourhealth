<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPracticeColumnsToProviderMedicalRegistrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('provider_medical_registrations', function (Blueprint $table) {
            $table->date('expired_at');
            $table->foreignId('service_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('provider_medical_registrations', function (Blueprint $table) {
            $table->dropColumn('expired_at');
            $table->dropColumn('service_id');
        });
    }
}
