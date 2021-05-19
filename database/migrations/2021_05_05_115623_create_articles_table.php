<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->longText('body');
            $table->boolean('is_active')->default(true);
            $table->boolean('is_published')->default(false);
            $table->boolean('request_publication')->default(false);
            $table->boolean('is_draft')->default(true);
            $table->timestamp('approved_at')->nullable();
            $table->timestamp('published_at')->nullable();
            $table->foreignId('author')->constrained('users')->restrictOnDelete();
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
        Schema::dropIfExists('articles');
    }
}
