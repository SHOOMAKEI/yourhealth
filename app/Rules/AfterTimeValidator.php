<?php

namespace App\Rules;

use Carbon\Carbon;
use Illuminate\Contracts\Validation\Rule;

class AfterTimeValidator implements Rule
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
        $data = [];
        $index = 0;
        foreach (request()->variables['input'] as $session) {
            $time_from = Carbon::parse($session['from']);
            $time_to = Carbon::parse($session['to']);
            $time_from->addMinute(4);

            if (!$time_from->lessThan($time_to)) {
                $data[$index] = false;
            } else {
                $data[$index] = true;
            }

            

            $index++;
        }
        
        dd($data);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The validation error message.';
    }
}
