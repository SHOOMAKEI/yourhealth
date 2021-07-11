<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacilityInvitationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facility_invitations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('provider_facility_id')->constrained()->restrictOnDelete();
            $table->string('email');
            $table->enum('role', ['stuff', 'admin', 'owner']);
            $table->string('token');
            $table->enum('status', ['accepted', 'pending', 'rejected'])->default('pending');
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
        Schema::dropIfExists('facility_invitations');
    }
}
