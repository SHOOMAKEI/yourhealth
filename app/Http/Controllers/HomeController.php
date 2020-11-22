<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        
        $client_packages = Plan::where('category', 'client')->orderBy('sort_order', 'ASC')->get();
        $service_provider_packages = Plan::where('category', 'service-provider')->orderBy('sort_order', 'ASC')->get();
        
        return view('welcome', ['client_packages' =>  $client_packages, 'service_provider_packages' => $service_provider_packages ]);
         
    }
}
