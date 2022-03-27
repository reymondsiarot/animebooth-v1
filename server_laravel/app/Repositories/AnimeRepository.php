<?php

namespace App\Repositories;

use App\Interfaces\IAnimeRepository;
use App\Models\Anime;
use App\Models\Genres;
use Exception;

Class AnimeRepository implements IAnimeRepository{

    public function getAllAnime($pageSize,$genre,$search = null){
        if($search == null){
            if($genre != null){
                $genres = Genres::where('name',$genre)->first();
                $animes = Anime::whereJsonContains("genres",$genres->mal_id)->with("genres")->paginate($pageSize);
            }
            else{
                $animes = Anime::with("genres")->paginate($pageSize);
            }
        }else{
            $animes = Anime::search($search)->query(function($builder)use($genre){
                if($genre != null){
                    $genres = Genres::where('name',$genre)->first();
                    $builder->whereJsonContains("genres",$genres->mal_id)->with("genres");
                }else{
                    $builder->with("genres");
                }
            })->paginate($pageSize);
        }
        return $animes;
    }


    public function getAnimeById($id){
        $anime = Anime::where("id",$id)->first();
        return $anime;
    }


    public function seachAnime($search){
        $anime = Anime::where("title","like","%".$search."%")->get();
        return $anime;
    }


    public function removeAnimeById($id){
        $anime = Anime::where("id",$id)->delete();
        return $anime;
    }


    public function createAnime($request){

        $this->createGenres($request->genres);
        $ianime['mal_id'] = $request->mal_id;
        $ianime['anime_link'] = collect( explode(" ",$request->title))->join("_");
        $ianime['url'] = $request->url;
        $ianime['images'] = json_encode($request->images);
        $ianime['trailer'] = json_encode($request->trailer);
        $ianime['title'] = $request->title;
        $ianime['title_english'] = $request->title_english;
        $ianime['title_japanese'] = $request->title_japanese;
        $ianime['title_synonyms'] = json_encode($request->title_synonyms);
        $ianime['type'] = $request->type;
        $ianime['source'] = $request->source;
        $ianime['episodes'] = $request->episodes;
        $ianime['status'] = $request->status;
        $ianime['airing'] = $request->airing;
        $ianime['aired'] = json_encode( $request->aired);
        $ianime['duration'] = $request->duration;
        $ianime['rating'] = $request->rating;
        $ianime['score'] = $request->score;
        $ianime['scored_by'] = $request->scored_by;
        $ianime['rank'] = $request->rank;
        $ianime['popularity'] = $request->popularity;
        $ianime['members'] = $request->members;
        $ianime['favorites'] = $request->favorites;
        $ianime['synopsis'] = $request->synopsis;
        $ianime['background'] = $request->background;
        $ianime['premiered'] = $request->premiered;
        $ianime['broadcast'] = json_encode($request->broadcast);
        $ianime['related'] = json_encode(collect($request->related)->pluck("mal_id"));
        $ianime['producers'] = json_encode(collect($request->producers)->pluck("mal_id"));
        $ianime['licensors'] = json_encode(collect($request->licensors)->pluck("mal_id"));
        $ianime['studios'] = json_encode(collect($request->studios)->pluck("mal_id"));
        $ianime['genres'] = collect($request->genres)->pluck("mal_id")->toArray();

        $anime = Anime::updateOrCreate(
            ['mal_id' => $ianime['mal_id']],
            $ianime
        );
        return $anime;
    }

    public function createGenres($genres){
        try{
        if(!empty($genres))
            Genres::insertOrIgnore(collect($genres)->toArray());
        }catch(Exception $err){}
    }
    public function createStudios($studios){}
    public function createLicensors($licensors){}
    public function createProducers($producers){}


    public function updateAnime($anime){
        $anime = Anime::where("id",$anime['id'])->update($anime);
        return $anime;
    }


    public function watchAnime($anime_link){
        $anime = Anime::where("anime_link",$anime_link)->first();
        return $anime;
    }

    public function getGenres(){
        $genres = Genres::all();
        return $genres;
    }
}
