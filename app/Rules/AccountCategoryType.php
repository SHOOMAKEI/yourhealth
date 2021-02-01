<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Input;

class AccountCategoryType implements Rule
{
    public $account_category;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->account_category = $arg['input']['account_category'];
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
        
        $account_category = request()->variables['input']['account_category']; 

        if($account_category=='service-provider' && in_array($value, ['company', 'facility', 'individual'])) {
            
            return true; 
        }

        if($account_category=='patient' && in_array($value, ['cooperate', 'family', 'individual'])) {
            
            return true; 
        }


        return false;
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
