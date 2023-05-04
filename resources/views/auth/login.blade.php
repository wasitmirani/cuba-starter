{{-- <x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" action="{{ route('login') }}">
        @csrf

        <!-- Email Address -->
        <div>
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="current-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Remember Me -->
        <div class="block mt-4">
            <label for="remember_me" class="inline-flex items-center">
                <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500" name="remember">
                <span class="ml-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
            </label>
        </div>

        <div class="flex items-center justify-end mt-4">
            @if (Route::has('password.request'))
                <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('password.request') }}">
                    {{ __('Forgot your password?') }}
                </a>
            @endif

            <x-primary-button class="ml-3">
                {{ __('Log in') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout> --}}
@extends('layouts.backend.authmaster')


@section('content')

<div class="login-card login-dark">
    <div>
      <div>
      <a class="logo text-start" href="{{url('/')}}"><img class="img-fluid for-light" src="/assets/images/logo/logo.png" alt="looginpage"><img class="img-fluid for-dark" src="/assets/images/logo/logo_dark.png" alt="looginpage"></a></div>
      <div class="login-main">
        <form class="theme-form">
          <h4>Sign in to account</h4>
          <p>Enter your email & password to login</p>
          <div class="form-group">
            <label class="col-form-label">Email Address</label>
            <input class="form-control" type="email" required="" placeholder="Test@gmail.com">
          </div>
          <div class="form-group">
            <label class="col-form-label">Password</label>
            <div class="form-input position-relative">
              <input class="form-control" type="password" name="login[password]" required="" placeholder="*********">
              <div class="show-hide"><span class="show">                         </span></div>
            </div>
          </div>
          <div class="form-group mb-0">
            <div class="checkbox p-0">
              <input id="checkbox1" type="checkbox">
              <label class="text-muted" for="checkbox1">Remember password</label>
            </div>
            <button class="btn btn-primary btn-block w-100" type="submit">Sign in</button>
          </div>
          <h6 class="text-muted mt-4 or">Or Sign in with</h6>
          <div class="social mt-4">
            <div class="btn-showcase"><a class="btn btn-light" href="https://www.linkedin.com/login" target="_blank"><i class="txt-linkedin" data-feather="linkedin"></i> LinkedIn </a><a class="btn btn-light" href="https://twitter.com/login?lang=en" target="_blank"><i class="txt-twitter" data-feather="twitter"></i>twitter</a><a class="btn btn-light" href="https://www.facebook.com/" target="_blank"><i class="txt-fb" data-feather="facebook"></i>facebook</a></div>
          </div>
          <p class="mt-4 mb-0 text-center">Don't have account?<a class="ms-2" href="sign-up.html">Create Account</a></p>
        </form>
      </div>
    </div>
  </div>
@endsection
