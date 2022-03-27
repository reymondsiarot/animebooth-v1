<?php

namespace App\Interfaces;

interface IUserRepository{
    public function register($request);
    public function login($request);
    public function logout($request);
}
