<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddVerificationColumnToProviderMedicalRegistrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('provider_medical_registrations', function (Blueprint $table) {
            $table->date('verified_at')->nullable();
            $table->date('rejected_at')->nullable();
            $table->boolean('is_verified')->default(false);
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
            $table->dropColumn('verified_at');
            $table->dropColumn('is_verified');
            $table->dropColumn('rejected_at');
        });
    }
}
