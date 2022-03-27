<?php

use App\Http\Controllers\AnimeController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/init', function (Request $request) {
    return response()->json()->withHeaders(['x-user'=>auth()->user(),'Access-Control-Expose-Headers'=>'x-user']);
});

Route::get('/animes', [AnimeController::class,"index"]);
Route::get('/animes/{id}', [AnimeController::class,"show"]);
Route::post('/animes', [AnimeController::class,"store"]);
Route::put('/animes/{id}', [AnimeController::class,"update"]);
Route::delete('/animes/{id}', [AnimeController::class,"destroy"]);
Route::get('/animes/{id}/watch', [AnimeController::class,"watch"]);

Route::get("/genres",[AnimeController::class,"getGenres"]);


Route::post("/login",[AuthController::class,"login"]);
Route::post("/logout",[AuthController::class,"logout"]);
Route::post("/register",[AuthController::class,"register"]);

