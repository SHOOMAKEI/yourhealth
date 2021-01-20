<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Input;

class AccountCategoryType implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $account_category = Input::get('account_category'); 

        if($account_category=='service-provider' && !in_array($value, ['company', 'facility', 'individual'])) {

            return false; 
        }

        if($account_category=='patient' && !in_array($value, ['cooperate', 'family', 'individual'])) {

            return false; 
        }


        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Incorrect account category type provided.';
    }
}
