<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\api\DashboardController;
use App\Http\Controllers\backend\api\layout\LayoutController;
use App\Http\Controllers\backend\api\layout\SettingsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('config')->group(function () {
    Route::get('/sidebar-menu',[LayoutController::class,'getSideBarMenu']);
    Route::post('update-app-settings',[SettingsController::class,'updateSettings']);
    Route::get('settings',[SettingsController::class,'getSettings']);
});

   //APP SETTINGS ROUTES
   Route::get('/app-settings',[DashboardController::class,'getAppSettings']);
   Route::post('/app-settings',[DashboardController::class,'UpdateAppSettings']);
   Route::get('/user-settings',[DashboardController::class,'getUserSettings']);
   Route::post('/user-settings',[DashboardController::class,'UpdateUserSettings']);
   Route::post('app-thumbnail-upload',[DashboardController::class,'uploadAppThumbnail']);
   
Route::resource('user', UserController::class);
