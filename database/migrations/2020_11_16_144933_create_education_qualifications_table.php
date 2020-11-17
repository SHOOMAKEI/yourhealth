<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEducationQualificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('education_qualifications', function (Blueprint $table) {
            $table->id();
            $table->string('year_of_complition');
            $table->string('year_of_experience');
            $table->foreignId('provider_profile_id')->constrained()->onDelete('cascade');
            $table->foreignId('medical_course_id')->constrained()->onDelete('cascade');
            $table->foreignId('medical_institute_id')->constrained()->onDelete('cascade');
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
        Schema::dropIfExists('education_qualifications');
    }
}
