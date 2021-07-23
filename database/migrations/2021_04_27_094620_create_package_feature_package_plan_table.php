<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackageFeaturePackagePlanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('package_feature_package_plan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('package_plan_id')->constrained()->restrictOnDelete();
            $table->foreignId('package_feature_id')->constrained()->restrictOnDelete();
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
        Schema::dropIfExists('package_feature_package_plan');
    }
}
