<?php

namespace App\Repositories;

use App\Interfaces\IAnimeRepository;
use App\Models\Anime;

Class AnimeRepository implements IAnimeRepository{

    public function getAllAnime($page,$pageSize,$search = null){
        //get anime list in anime model
        if($search == null){
            //paginate and count all via offset and limit method
            $animes = Anime::offset($pageSize * ($page - 1))->limit($pageSize)->get();
            $total = Anime::count();
        }else{
            $animes = Anime::search($search)->get();
            $animes = $animes->toQuery()->offset(($page-1)*$pageSize)->limit($pageSize)->get();
            $total = Anime::search($search)->count();
        }
        return [
            'animes' => $animes,
            'total' => $total
        ];
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
    public function createAnime($anime){
        $anime = Anime::create($anime);
        return $anime;
    }
    public function updateAnime($anime){
        $anime = Anime::where("id",$anime['id'])->update($anime);
        return $anime;
    }
    public function watchAnime($anime_link){
        $anime = Anime::where("anime_link",$anime_link)->first();
        return $anime;
    }
}
