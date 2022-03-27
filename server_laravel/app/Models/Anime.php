<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Anime extends Model
{

    use HasFactory, Searchable,\Staudenmeir\EloquentJsonRelations\HasJsonRelationships;
    protected $casts = [
        'genres' => 'json',
    ];
    protected $guarded = [];
    public function toSearchableArray()
    {
        $array = $this->toArray();
        return $array;
    }

    public function genres()
    {
        return $this->belongsToJson(Genres::class, 'genres','mal_id');
    }
}
