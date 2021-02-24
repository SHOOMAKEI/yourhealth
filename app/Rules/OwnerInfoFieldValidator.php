<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class OwnerInfoFieldValidator implements Rule
{
    public $account_category_type;
    public $ownership_type;
    public $column;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->account_category_type = request()->variables['input']['account_category_type'];
        $this->ownership_type = request()->variables['input']['ownership_type'];
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
        $this->column = $attribute;

        if ($this->account_category_type=="facility" && $this->ownership_type=="other") {
            return  isset($value)?true:false;
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
        return 'The '.$this->account_category_type.' '. str_replace('_', ' ', $this->column).' is required.';
    }
}
