<?php 

if (!function_exists('getInvoiceInterval')) {
    function getInvoiceInterval()
    {
        return [
            ['option'=> 'Day', 'value'=> 'day'],
            ['option'=> 'Month', 'value'=> 'month'],
            ['option'=> 'Year', 'value'=> 'year']
        ];
    }
}

if (!function_exists('getCurreny')) {
    function getCurrency()
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
    function getPackageCategories()
    {
        return [
            ['option'=> 'Service Provider', 'value'=> 'service-provider'],
            ['option'=> 'Client', 'value'=> 'client'],
        ];
    }
}

if (!function_exists('getEstablishmentCategories')) {
    function getEstablishmentCategories()
    {
        return [
            ['option'=> 'Doctor', 'value'=> 'doctor'],
            ['option'=> 'Hospital', 'value'=> 'hospital'],
            ['option'=> 'Pharmacy', 'value'=> 'pharmacy'],
            ['option'=> 'Laboratory', 'value'=> 'laboratory'],
        ];
    }
}