<?php

namespace App\Http\Controllers;

use App\Interfaces\IUserRepository;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    private IUserRepository $userRepository;
    public function __construct(IUserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }
    public function login(Request $request){
        //validate
        return $this->userRepository->login($request);
    }

    public function register(Request $request){
        return $this->userRepository->register($request);
    }

    public function logout(Request $request){
        return $this->userRepository->logout($request);
    }
}
