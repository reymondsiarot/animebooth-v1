<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Staudenmeir\EloquentJsonRelations\HasJsonRelationships;
use Laravel\Scout\Searchable;

class Anime extends Model
{
    use HasFactory,HasJsonRelationships,Searchable;
    protected $casts = [
        'genres' => 'json',
    ];
    public function uploaded_by(){
        return $this->belongsTo(User::class, "uploaded_by");
    }
    public function genres(){
        return $this->belongsToJson(Genre::class, "genres");
    }
    public function toSearchableArray() : array
    {
        $array = $this->toArray();

        // Customize the data array...
        $array['hello'] = ['hello'=>"awd"];
        return $array;
    }
}
