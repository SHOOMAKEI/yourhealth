<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class DumaPaymentOnline
{
    public static function createTransactionToken(string $xmlBody)
    {
        $respose =  Http::withHeaders([
            'Content-Type' => 'application/xml'
        ])->post(env('DPO_PAYMENT_URL'), ['body'=> $xmlBody]);

        return $respose;
    }
}
