<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;



class SMSService 
{

  
    public static function sendSMSToSingeUser(string $number, string $sms)
    {

       $respose =  Http::withHeaders([
            'Authorization' => 'Basic '. env('SMS_API_KEY'),
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
        ])->post(env('SMS_API_SINGLE_SMS_URL'), [
            'from' => env('SMS_API_SENDER_ID'),
            'to' => str_replace('+','',$number),
            'text' => $sms,
         ]);

         return $respose;

    }


}