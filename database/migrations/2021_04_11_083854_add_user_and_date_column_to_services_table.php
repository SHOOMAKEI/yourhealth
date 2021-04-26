<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserAndDateColumnToServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('services', function (Blueprint $table) {
            $table->foreignId('created_by')->nullable()->constrained('users')->onDelete('SET NULL');
            $table->timestamp('approved_at')->nullable();
            $table->foreignId('approved_by')->nullable()->constrained('users')->onDelete('SET NULL');
        });

        Schema::table('service_categories', function (Blueprint $table) {
            $table->foreignId('created_by')->nullable()->constrained('users')->onDelete('SET NULL');
            $table->timestamp('approved_at')->nullable();
            $table->foreignId('approved_by')->nullable()->constrained('users')->onDelete('SET NULL');
        });

        Schema::table('service_sub_categories', function (Blueprint $table) {
            $table->foreignId('created_by')->nullable()->constrained('users');
            $table->timestamp('approved_at')->nullable();
            $table->foreignId('approved_by')->nullable()->constrained('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn('created_by');
            $table->dropColumn('approved_at');
            $table->dropColumn('approved_by');
        });

        Schema::table('service_categories', function (Blueprint $table) {
            $table->dropColumn('created_by');
            $table->dropColumn('approved_at');
            $table->dropColumn('approved_by');
        });

        Schema::table('service_sub_categories', function (Blueprint $table) {
            $table->dropColumn('created_by');
            $table->dropColumn('approved_at');
            $table->dropColumn('approved_by');
        });
    }
}
