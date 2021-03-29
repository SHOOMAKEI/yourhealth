<?php

if (!function_exists('getInvoiceInterval')) {
    function getInvoiceInterval(): array
    {
        return [
            ['option'=> 'Day', 'value'=> 'day'],
            ['option'=> 'Month', 'value'=> 'month'],
            ['option'=> 'Year', 'value'=> 'year']
        ];
    }
}

if (!function_exists('getCurrency')) {
    function getCurrency(): array
    {
        return [
            ['option'=> 'USD', 'value'=> 'USD'],
            ['option'=> 'TZS', 'value'=> 'TZS'],
            ['option'=> 'CDF', 'value'=> 'CDF'],
            ['option'=> 'MZN', 'value'=> 'MZN'],
        ];
    }
}

if (!function_exists('getPackageCategories')) {
    function getPackageCategories(): array
    {
        return [
            ['option'=> 'Service Provider', 'value'=> 'service-provider'],
            ['option'=> 'patient', 'value'=> 'patient'],
        ];
    }
}

if (!function_exists('getEstablishmentCategories')) {
    function getEstablishmentCategories(): array
    {
        return [
            ['option'=> 'Hospital', 'value'=> 'hospital'],
            ['option'=> 'Pharmacy', 'value'=> 'pharmacy'],
            ['option'=> 'Clinic', 'value'=> 'clinic'],
            ['option'=> 'Dispensary', 'value'=> 'dispensary'],
            ['option'=> 'Laboratory', 'value'=> 'laboratory'],
            ['option'=> 'Doctor', 'value'=> 'doctor'],
        ];
    }
}
