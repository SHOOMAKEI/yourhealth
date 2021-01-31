<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProviderRejectionReasonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('provider_rejection_reasons', function (Blueprint $table) {
            $table->id();
            $table->text('reasons');
            $table->foreignId('provider_profile_id')->constrained()->onDelete('cascade');
            $table->integer('rejected_round');
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
        Schema::dropIfExists('provider_rejection_reasons');
    }
}
