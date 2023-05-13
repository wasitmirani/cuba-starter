<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{

// ...

/**
 * Redirect the user to the provider authentication page.
 *
 * @return \Illuminate\Http\Response
 */
public function redirectToProvider($driver)
{
    return Socialite::driver($driver)->redirect();
}
public function handleProviderCallback($driver)
{
    try {
        $user = Socialite::driver($driver)->user();
    } catch (\Exception $e) {
        return redirect()->route('login');
    }

    $existingUser = User::where('email', $user->getEmail())->first();

    if ($existingUser) {
        auth()->login($existingUser, true);
    } else {
        $newUser                    = new User;
        $newUser->provider_name     = $driver;
        $newUser->provider_id       = $user->getId();
        $newUser->name              = $user->getName();
        $newUser->bio               = 'N/A';
        $newUser->slug              = $user->getName();
        $newUser->email             = $user->getEmail();
        $newUser->email_verified_at = now();
        $newUser->avatar            = $user->getAvatar();
        $newUser->thumbnail            = $user->getAvatar();
        $newUser->save();

        auth()->login($newUser, true);
    }

    return redirect('/dashboard');
}
}
