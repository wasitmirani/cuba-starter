<?php

namespace App\Http\Controllers\backend\api\news;

use App\Models\News;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    private $news;
    public function __construct()
    {
        $this->news = new News();
    }
    public function index(Request $request)
    {
        $news = $this->news->getNews($request);
        return response()->json(['news' => $news]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'max:255']
        ]);
        $news = $this->news->create([
            'uid'=>(string) Str::uuid(),
            'name' => $request->name,
            'slug' => $request->name,
            'color' => $request->color ?? '#7366FF',
            'description' => $request->description,
            'user_id' => Auth::user()->id,

        ]);
        return response()->json(['news' => $news, 'message' => 'News created successfully'], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $news = $this->news->where('uid', $id)->first();
       return response()->json(['news' => $news]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $update_news = $this->news->where('id', $id)->update([
            'name' => $request->name,
            'description' => $request->description,
            'color' => $request->color,
        ]);
        return response()->json(['news' => $update_news, 'message' => 'News updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $news = $this->news->find($id);
       
        $news->delete();

        return response()->json(['news' => $news, 'message' => 'News deleted successfully'], 200);
    }
}
