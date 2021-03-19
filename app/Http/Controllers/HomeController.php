<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return  Inertia::render('Landing/Index');
    }

    public function register() 
    {
        return Inertia::render('Auth/Register');
    }

    public function login()
    {
        return Inertia::render('Auth/Login');
    }
        
    
}
