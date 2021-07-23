<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesHasTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages_has_tags', function (Blueprint $table) {
            $table->foreignId('message_id')->constrained()->restrictOnDelete();
            $table->foreignId('tag_id')->constrained()->restrictOnDelete();
            $table->timestamps();
            $table->unique(['message_id', 'tag_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages_has_tags');
    }
}
