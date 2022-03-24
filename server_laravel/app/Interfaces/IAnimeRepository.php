<?php

namespace App\Interfaces;

interface IAnimeRepository{
    public function getAllAnime($page,$pageSize,$search);
    public function getAnimeById($id);
    public function seachAnime($search);
    public function removeAnimeById($id);
    public function createAnime($anime);
    public function updateAnime($anime);
    public function watchAnime($anime_link);
}
