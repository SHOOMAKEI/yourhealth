<?php

if (!function_exists('getVerificationCode')) {
    function getVerificationCode():string
    {
        $verification_code = '';

        for ($i = 0; $i < 6; $i++) {
            $number = rand(0, 9);
            $verification_code = $verification_code . $number;
        }

        return $verification_code;
    }
}

if (!function_exists('translations')) {
    function translations($json): array
    {
        if (!file_exists($json)) {
            return [];
        }
        return json_decode(file_get_contents($json), true);
    }
}
