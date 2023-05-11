<?php

namespace App\Http\Controllers\backend\api\user;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //

    private $user;
    public function __construct()
    {
        $this->user = new User();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $users = $this->user->getUsers($request);
        $roles = $this->user->getRoles();
        $permissions = $this->user->getPermissions();
        return response()->json(['users' => $users, 'roles' => $roles, 'permissions' => $permissions]);
    }
    public function mapFirstNameLastSlug($request){

        return Str::slug($request->first_name.$request->last_name, '-');
    }
    public function usersList(Request $request)
    {
        $users = User::latest()->orderBy('name')->withTrashed()->get();
        return response()->json(['users' => $users]);
    }
    public function store(Request $request)
    {
        $request->validate([

            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'phone' => ['required', 'string', 'max:255', 'unique:users'],
            'user_name' => ['string', 'max:255', 'unique:users'],
            // 'roles'=>['required'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);



        $user_name = !empty($request->user_name) ? $request->user_name : strtolower(trim($request->name)) . rand(10, 1000900);


        $user = $this->user->create([
            'name' => $request->name." ".$request->last_name,
            'uid'=>(string) Str::uuid(),
            'email' => $request->email,
            'first_name' => $request->name,
            'last_name' => $request->last_name,
            'slug' => $this->mapFirstNameLastSlug($request),
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'user_name' => $user_name,
            'thumbnail' => isset($request->thumbnail['name']) ? $request->thumbnail['name'] : "default.png",

        ]);
        $role = Role::where('id', $request->roles['id'])->first();
        $user->assignRole($role);

        if($request->deleted_at == 0) {
            $user->update([
                'status' => 0
            ]);
            $user->delete();
        }

        event(new Registered($user));

        return response()->json(['user' => $user, 'message' => 'user created successfully'], 200);
    }

    public function show($id)
    {
       $user = $this->user->with('client','roles','permissions','warehouse')->withTrashed()->findOrFail($id);
       return response()->json(['user' => $user]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([

            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'roles'=>['required'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,id,' . $id],
            'phone' => ['required', 'string', 'max:255', 'unique:users,id,' . $id],
            'status' => ['required'],

        ]);
        if($request->password!=""){
            $request->validate([
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
            ]);
           User::where('id',$id)->update(['password'=>Hash::make($request->password)]);
       }

        if(request()->user()->hasRole('super-admin') && !empty($request->client_id)) {
            $client_id = $request->client_id;
        }
        else {
            $client_id = request()->user()->client_id;
        }

       $update_user = User::where('id', $id)->update([
            'name' => $request->first_name." ".$request->last_name,
            'email' => $request->email,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'client_id' => $client_id,
            'slug' => $this->mapFirstNameLastSlug($request),
            'phone' => $request->phone,
            // 'user_name' => $user_name,
            'thumbnail' => isset($request->thumbnail['name']) ? $request->thumbnail['name'] : "default.png",
        ]);
        $user=User::where('id', $id)->withTrashed()->first();

        if($request->status == 1) {
            $user->restore();
            $user->update([
                'status' => 1
            ]);
        }
        else if($request->status == 0 && !$user->trashed()) {
            $user->update([
                'status' => 0
            ]);
            $user->delete();
        }


        $role = Role::where('id', $request->roles['id'])->first();
        $user->roles()->sync($role);

        return response()->json(['user' => $update_user, 'message' => 'user updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::withTrashed()->find($id);
        $user->update([
            'status' => 0
        ]);
        $user->delete();

        return response()->json(['user' => $user, 'message' => 'user deleted successfully'], 200);
    }
    public function uploadThumbnail(Request $request){
        $file=singleImgUpload($request, 'img/user/');
        return response()->json(['name' => $file], 200);
    }
}
