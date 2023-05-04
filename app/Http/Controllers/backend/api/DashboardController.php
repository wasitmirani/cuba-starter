<?php

namespace App\Http\Controllers\backend\api;

use App\Models\User;
use App\Models\Country;
use App\Models\AppSetting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

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
      public function getUserSettings(Request $request)
      {
        $user = User::where('id', Auth::user()->id)->first();
        
        return response()->json(['user' => $user], 200);
      }
      public function UpdateUserSettings(Request $request, User $user)
      { 
        $input = $request->all();
        $user->fill($input)->save();

        return response()->json(['message', 'Record Successfully Updated!'], 200);
     
      }
}
