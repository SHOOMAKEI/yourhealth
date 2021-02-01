<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAccountCategoryTypeToProviderProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('provider_profiles', function (Blueprint $table) {
            $table->enum('account_category_type', ['facility', 'company', 'individual'])->default('individual');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('provider_profiles', function (Blueprint $table) {
            $table->dropColumn('account_category_type');
        });
    }
}
