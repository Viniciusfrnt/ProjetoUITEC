<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $fillable = [
        'nome', 'categoria', 'valor', 'data', 'estoque', 'perecivel'
    ];

    protected $table = 'articles';
}
