<?php

namespace App\Http\Controllers\backend\api;

use App\Models\Country;
use App\Models\AppSetting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function uploadAppThumbnail(Request $request){

        $file = singleImgUpload($request, 'img/app/');
        
        return response()->json(['name' => $file], 200);
      }
      
      public function getAppSettings(Request $request)
      {
        $app_settings = AppSetting::where('id', 1)->first();
        $countries = Country::all();
        
        return response()->json(['app_settings' => json_decode($app_settings->app_data, true) ,'countries' => $countries], 200);
      }
      public function UpdateAppSettings(Request $request)
      { 
        return AppSetting::where('id', 1)->update([ 'app_data' => json_encode($request->all())]);
     
      }
}
