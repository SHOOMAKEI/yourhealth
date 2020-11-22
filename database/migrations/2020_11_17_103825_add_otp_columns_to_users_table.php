<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOtpColumnsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('otp_code')->nullable();
            $table->boolean('enabled_otp')->default(0);
            $table->timestamp('otp_expire_at')->nullable();
            $table->integer('profile_stage')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('otp_code');
            $table->dropColumn('enabled_otp');
            $table->dropColumn('otp_expire_at');
            $table->dropColumn('profile_stage');
        });
    }
}