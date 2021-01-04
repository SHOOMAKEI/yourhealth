<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProviderQualificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('provider_qualifications', function (Blueprint $table) {
            $table->id();
            $table->string('award_title');
            $table->string('institution_name');
            $table->string('description')->nullable();
            $table->boolean('is_active')->default(1);
            $table->foreignId('provider_profile_id')->constrained()->onDelete('cascade');
            $table->string('year');
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
        Schema::dropIfExists('provider_qualifications');
    }
}
