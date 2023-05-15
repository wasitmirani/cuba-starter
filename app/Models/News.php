<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function getNews($request,$is_paginate=true)
    {
        $query=request('query');
        $news= News::latest();
        if(!empty( $query)){
            $news= $news->where('name', 'like', '%'.$query. '%');
        }

        if($is_paginate){
            $news=$news->paginate($request->per_page ?? (int)env('PER_PAGE'));
        }else {
            $news=$news->get();
        }

      return $news;
    }
}
