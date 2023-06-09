<?php

namespace App\Http\Controllers\backend\api\link;

use App\Models\ShortLink;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ShortLinkController extends Controller
{
    //

    public function index(Request $request){
        $per_page=!empty(env('PER_PAGE')) ? env('PER_PAGE') : 10;
        $q=!empty(request('query')) ? request('query') : '';
        $links=ShortLink::latest()
        ->where('user_id',$request->user()->id)
        ->where('name', 'like', '%' . $q . '%')
        ->withSum('visitors as total_visitors', 'visitor')
        ->withSum('visitors as total_clicks', 'clicks')
        ->paginate((int)$per_page);
       return response()->json(['success' =>true,'links'=>$links],200);
    }
    public function createShortLink(Request $request){
        $this->validate($request, [
            'short_link' => 'required',
        ]);
        $link=ShortLink::where('short_link',$request->short_link)->first();
        if(!empty($link)){
            return response()->json(['success' =>false,'message'=>'Link already exist'],422);
        }

        $link=ShortLink::create([
            'uid'=>Str::uuid(),
            'user_id'=>$request->user()->id,
            'short_link'=>$request->short_link,
            'slug'=>Str::slug($request->short_link),
            'status'=>0,
            'name'=>$request->short_link,
        ]);
        return response()->json(['success' =>true,'message'=>'Link created successfully','link'=>$link],200);
    }
    public function getLinkProfile(Request $request){
        $link=ShortLink::where('slug',$request->slug)->first();

        if(is_array($link->items)){
            $items=$link->items;
         }
         else {
            $items=json_decode($link->items,true);
         }
         if(is_array($link->appearance)){
            $appearance=$link->appearance;
         }
         else {
            $appearance=json_decode($link->appearance,true);
         }
         if(is_array($link->branding)){
            $branding=$link->branding;
         }
         else {
            $branding=json_decode($link->branding,true);
         }

         return response()->json(['success' =>true,'link'=>$link,'items'=>$items,'branding'=>$branding,'appearance'=>$appearance],200);

     }
}
