<?php

namespace App\Rules;

use Carbon\Carbon;
use Illuminate\Contracts\Validation\Rule;

class AfterTimeValidator implements Rule
{
    public $data;
    public $message;
    public $time_from;
    public $time_to;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->data = [];
        $this->message = [];
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
        
        $index = 0;
        foreach (request()->variables['input'] as $session) {
            try{
                $this->time_from = Carbon::parse($session['from']);
                $this->time_to = Carbon::parse($session['to']);
                $this->time_from->addMinute(4);

                if (!$this->time_from->lessThan($this->time_to)) {
                    $this->data[$index] = false;
                } else {
                    $this->data[$index] = true;
                }
    
                $index++;
            }catch(\Exception $e){
                $this->data[$index] = true;
            }
            
           
        }
        
        return $this->data[array_search(false,$this->data)] ;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        
        return 'Invalid time format or the end time is less than start time.';
        
    }
}
