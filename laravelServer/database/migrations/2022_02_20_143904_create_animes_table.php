<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('animes', function (Blueprint $table) {
            $table->id();
            $table->integer("mal_id");
            $table->string("anime_link");
            $table->string("url");
            $table->json("images");
            $table->json("trailer");
            $table->string("title");
            $table->string("title_english");
            $table->string("title_japanese");
            $table->json("title_synonyms");
            $table->string("type");
            $table->string("source");
            $table->integer("episodes");
            $table->string("status");
            $table->boolean("airing");
            $table->json("aired");
            $table->string("duration");
            $table->string("rating");
            $table->float("score");
            $table->integer("scored_by");
            $table->integer("rank");
            $table->integer("popularity");
            $table->integer("members");
            $table->integer("favorites");
            $table->longText("synopsis");
            $table->longText("background");
            $table->string("premiered");
            $table->json("broadcast");
            $table->json("related");
            $table->json("producers");
            $table->json("licensors");
            $table->json("studios");
            $table->json("genres");
            $table->string("uploaded_by");
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
        Schema::dropIfExists('animes');
    }
}
