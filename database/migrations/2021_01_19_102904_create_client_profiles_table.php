<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('username')->nullable();
            $table->string('mobile_number');
            $table->string('alternative_mobile_number')->nullable();
            $table->string('email');
            $table->string('address')->nullable();
            $table->string('physical_address')->nullable();
            $table->string('dob')->nullable();
            $table->string('gender')->nullable();
            $table->text('bio')->nullable();
            $table->boolean('is_active')->default(1);
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
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
        Schema::dropIfExists('client_profiles');
    }
}
