<?php

namespace App\Actions\Fortify;

use Laravel\Fortify\Rules\Password;

trait PasswordValidationRules
{
    /**
     * Get the validation rules used to validate passwords.
     *
     * @return array
     */
    protected function passwordRules()
    {
        return ['required', 'string', new Password, 'confirmed', 'regex:/^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/'];
    }
    //regex:/^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/
}
