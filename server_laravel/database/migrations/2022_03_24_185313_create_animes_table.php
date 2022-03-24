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
            $table->string("url")->nullable();
            $table->longText("images")->nullable();
            $table->longText("trailer")->nullable();
            $table->string("title");
            $table->string("title_english")->nullable();
            $table->string("title_japanese")->nullable();
            $table->longText("title_synonyms")->nullable();
            $table->string("type")->nullable();
            $table->string("source")->nullable();
            $table->integer("episodes")->nullable();
            $table->string("status")->nullable();
            $table->boolean("airing")->nullable();
            $table->string("duration")->nullable();
            $table->string("rating")->nullable();
            $table->float("score")->nullable();
            $table->integer("scored_by")->nullable();
            $table->integer("rank")->nullable();
            $table->integer("popularity")->nullable();
            $table->integer("members")->nullable();
            $table->integer("favorites")->nullable();
            $table->string("synopsis")->nullable();
            $table->string("background")->nullable();
            $table->string("premiered")->nullable();
            $table->longText("broadcast")->nullable();
            $table->json("related")->nullable();
            $table->json("producers")->nullable();
            $table->json("licensors")->nullable();
            $table->json("studios")->nullable();
            $table->json("genres")->nullable();
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
