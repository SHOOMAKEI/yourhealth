<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicalProcedureProvider extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_procedure_provider', function (Blueprint $table) {
            $table->id();
            $table->double('price');
            $table->string('currency');
            $table->unsignedBigInteger('provider_id');
            $table->foreignId('medical_procedure_id')->constrained()->onDelete('cascade');
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
        Schema::dropIfExists('medical_procedure_provider');
    }
}
