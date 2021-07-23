<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberRangePackagePlanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member_range_package_plan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('package_plan_id')->constrained()->restrictOnDelete();
            $table->foreignId('package_member_range_id')->constrained()->restrictOnDelete();
            $table->double('price')->default('0.00');
            $table->string('currency', 3)->default('TZS');
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
        Schema::dropIfExists('member_range_package_plan');
    }
}
