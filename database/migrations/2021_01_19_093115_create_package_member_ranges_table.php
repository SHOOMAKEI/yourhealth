<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackageMemberRangesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('package_member_ranges', function (Blueprint $table) {
            $table->id();
            $table->integer('min')->default(1);
            $table->integer('max')->default(5);
            $table->text('description')->nullable();
            $table->double('price')->default('0.00');
            $table->string('currency', 3)->default('TZS');
            $table->boolean('is_active')->default(1);
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
        Schema::dropIfExists('package_member_ranges');
    }
}
