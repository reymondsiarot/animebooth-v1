<?php

use App\Models\Anime;
use Illuminate\Filesystem\Cache;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache as FacadesCache;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/haha",function(){
    if(FacadesCache::has("users")) return response()->json(FacadesCache::get("users"));

    $anime = FacadesCache::remember('users', 20, function () {
        return Anime::where("id",2)->first();
    });
    return response()->json($anime);
});
