<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('firt_name');
            $table->string('middle_name');
            $table->string('last_name');
            $table->string('mobile_number');
            $table->string('alternative_mobile_number')->nullable();
            $table->string('email');
            $table->string('address')->nullable();
            $table->string('physical_address')->nullable();
            $table->string('dob')->nullable();
            $table->string('gender');
            $table->string('bio')->nullable();
            $table->boolean('is_active');
            $table->string('profile_category');
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
        Schema::dropIfExists('user_profiles');
    }
}
