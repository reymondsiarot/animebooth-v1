<?php

namespace App\Http\Controllers;

use App\Interfaces\IAnimeRepository;
use Illuminate\Http\Request;

class AnimeController extends Controller
{
    private IAnimeRepository $animeRepository;
    public function __construct(IAnimeRepository $animeRepository)
    {
        $this->animeRepository = $animeRepository;
    }
    public function index(Request $request){
        $page = $request->query('page',1);
        $pageSize = $request->query('pageSize',10);
        $search = $request->query('q',null);
        $animes = $this->animeRepository->getAllAnime($page,$pageSize,$search);
        return response()->json($animes);
    }

    public function show($id){
        $anime = $this->animeRepository->getAnimeById($id);
        return response()->json($anime);
    }


}
