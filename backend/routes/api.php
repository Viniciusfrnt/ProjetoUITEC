<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Article;
use App\Http\Controllers\ArticleController;
use App\Http\Resources\ArticleResource;






Route::get('/articles', function (){
    return ArticleResource::collection(Article::all());
});

Route::get('/article/{id}', function ($id){
    return new ArticleResource(Article::findOrFail($id));
});

Route::post('/articles', [ArticleController::class, 'store']);

Route::put('/article/{id}', [ArticleController::class, 'update']);

Route::delete('/article/{id}', [ArticleController::class, 'destroy']);





Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
