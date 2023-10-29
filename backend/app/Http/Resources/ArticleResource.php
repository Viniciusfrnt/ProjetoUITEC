<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nome' => $this->nome,
            'categoria' => $this->categoria,
            'valor' => $this->valor,
            'data' => $this->data,
            'estoque' => $this->estoque,
            'perecivel' => $this->perecivel,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,

        ];
    }
}
