<?php

namespace App\Repositories;

use App\Interfaces\IUserRepository;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

Class UserRepository implements IUserRepository{

    public function register($request){
        try{
        //validate request
        $user = $request->all();
        if(!isset($user['name']) || !isset($user['email']) || !isset($user['password'])){
            return response()->json(['success'=>false,"message"=>"Missing parameters"]);
        }
        if(User::where("email",$user['email'])->first()){
            return response()->json(['success'=>false,"message"=>"Email already exists"]);
        }
        $user['password'] = bcrypt($user['password']);
        $user = User::create($user);
        if(!Auth::attempt($request->only(['email','password']))){
            return response()->json(['success'=>false,"message"=>"Invalid credentials"]);
        }
        return response()->json(['success'=>true])->withHeaders(['x-user'=>auth()->user(),'Access-Control-Expose-Headers'=>'x-user']);
        }catch(Exception $er){
            return response()->json(['success'=>false,"message"=>$er->getMessage()]);
        }
    }
    public function login($request){
        // login user
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        $credentials = request(['email', 'password']);
        if(!Auth::attempt($credentials)){
            return response()->json(['success'=>false,"message"=>"Invalid credentials"]);
        }
        return response()->json(['success'=>true])->withHeaders(['x-user'=>auth()->user(),'Access-Control-Expose-Headers'=>'x-user']);

    }

    public function logout($request){
        try{
        Auth::logout();
        return response()->json(['success'=>true])->withCookie(Cookie::forget('_user'));
        }catch(Exception $er){
            return response()->json(['success'=>true])->withCookie(Cookie::forget('_user'));
        }
    }
}
