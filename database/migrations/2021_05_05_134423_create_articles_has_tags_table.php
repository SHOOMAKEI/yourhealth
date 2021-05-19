<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesHasTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles_has_tags', function (Blueprint $table) {
            $table->foreignId('article_id')->constrained()->restrictOnDelete();
            $table->foreignId('tag_id')->constrained()->restrictOnDelete();
            $table->timestamps();
            $table->unique(['article_id', 'tag_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles_has_tags');
    }
}
