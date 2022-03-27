<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Genres extends Model
{

    use HasFactory, Searchable , \Staudenmeir\EloquentJsonRelations\HasJsonRelationships;
    protected $guarded = [];
    public $timestamps = true;
    public function animes(){
        return $this->hasManyJson(Anime::class, 'genres','mal_id');
    }
}
