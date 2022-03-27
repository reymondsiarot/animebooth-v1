<?php

namespace App\Interfaces;

interface IAnimeRepository{
    public function getAllAnime($pageSize,$genre,$search);
    public function getAnimeById($id);
    public function seachAnime($search);
    public function removeAnimeById($id);
    public function createAnime($anime);

    public function createGenres($genres);
    public function createStudios($anime);
    public function createLicensors($anime);
    public function createProducers($anime);

    public function updateAnime($anime);
    public function watchAnime($anime_link);

    public function getGenres();



}
