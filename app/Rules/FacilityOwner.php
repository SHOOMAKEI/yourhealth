<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class FacilityOwner implements Rule
{
    public $account_category_type;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->account_category_type = request()->variables['input']['account_category_type'];
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
        if($this->account_category_type=='facility' && !in_array($value, ['self', 'other'])) {

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
        return 'Incorrect facility ownership provided.';
    }
}
