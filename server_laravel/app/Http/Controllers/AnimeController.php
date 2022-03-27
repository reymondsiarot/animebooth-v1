<?php

namespace App\Http\Controllers;

use App\Interfaces\IAnimeRepository;
use App\Models\Genres;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class AnimeController extends Controller
{
    private IAnimeRepository $animeRepository;
    public function __construct(IAnimeRepository $animeRepository)
    {
        $this->animeRepository = $animeRepository;
    }
    public function index(Request $request){

        $page = $request->query('page', 1);
        $pageSize = $request->query('pageSize',10);
        $search = $request->query('q',null);
        $genre = $request->query('genre',null);
        $animes = Cache::remember("_Ptoken".$page."_".$pageSize."_".$search."_".$genre,60,function()use($pageSize,$genre,$search){
            return $this->animeRepository->getAllAnime($pageSize,$genre,$search);

        });
        return response()->json(['success'=>true,"data"=>$animes]);
    }

    public function store(Request $request){
        $anime = $this->animeRepository->createAnime($request);
        return response()->json($anime);
    }

    public function show($id){
        $anime = $this->animeRepository->getAnimeById($id);
        return response()->json($anime);
    }

    public function getGenres(){

        $genres = $this->animeRepository->getGenres();
        return response()->json(['success'=>true,"data"=>$genres]);
    }




}
