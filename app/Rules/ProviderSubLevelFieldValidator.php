<?php

namespace App\Rules;

use App\Models\ProviderSubLevel;
use Illuminate\Contracts\Validation\Rule;

class ProviderSubLevelFieldValidator implements Rule
{
    public $account_category_type;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->account_category_type =
            request()->variables['input']['account_category_type']??request()->account_category_type;
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
        if (!is_numeric($value)) {
            return false;
        }

        if ($this->account_category_type=="facility") {
            return (ProviderSubLevel::where('id', $value)->first())->notEmpty();
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
        return 'The '.$this->account_category_type. ' sub level is required.';
    }
}
