<?php 

use Illuminate\Http\Request;


// if (!function_exists('activeMenu')) {
//     function activeMenu($uri = '') {
//         $active = '';
//         if (Request::is(Request::segment(1) . '/' . $uri . '/*') || Request::is(Request::segment(1) . '/' . $uri) || Request::is($uri)) {
//             $active = 'nm-active';
//         }
//         return $active;
//     }
// }