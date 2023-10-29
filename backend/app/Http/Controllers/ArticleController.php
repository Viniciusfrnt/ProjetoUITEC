<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Article::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Article::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Article::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
{
    if(Article::where('id', $id)->exists()){
        $article = Article::find($id);
        $article->nome = $request->nome;
        $article->categoria = $request->categoria;
        $article->valor = $request->valor;
        $article->data = $request->data;
        $article->estoque = $request->estoque;
        $article->perecivel = $request->perecivel;

        $article->save();

        return response()->json([
            "message" => "Registro salvo com sucesso."
        ], 200);
    } else {
        return response()->json([
            "message" => "Item não encontrado"
        ], 404);
    }   
    
}


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(Article::where('id', $id)->exists()){
            $article = Article::find($id);
            $article->delete();
            return response()->json([
                "message" => "Item deletado"
            ], 202);
    }else {
        return response()->json([
            "message" => "Item não encontrado"
        ],404);
    }
    }
}