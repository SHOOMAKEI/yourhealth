<?php

namespace App\Traits;

use App\Services\SMSService;

trait MustCompleteProfileStage
{
    /**
     * Determine if the user has verified their MobileNumber address.
     *
     * @return bool
     */
    public function hasComplitedProfile()
    {
        return $this->profile_stage;
    }

    /**
     * Mark the given user's MobileNumber as verified.
     *
     * @return bool
     */
    public function markProfileAsComplite()
    {
        return $this->forceFill([
            'profile_stage' => 7,
        ])->save();
    }

    /**
     * Send the MobileNumber verification notification.
     *
     * @return void
     */
    public function sendMobileNumberVerificationNotification()
    {
        $this->forceFill([
            'verification_code' => rand(100000, 999999),
        ])->save();

        $sms = 'Your Verification Code is '. $this->verification_code;

        SMSService::sendSMSToSingeUser($this->getMobileNumberForVerification(), $sms);
    }

    /**
     * Get the MobileNumber address that should be used for verification.
     *
     * @return string
     */
    public function getMobileNumberForVerification()
    {
        return $this->mobile_number;
    }

    public function getMobileNumberVerificationCode()
    {
        return $this->verification_code;
    }
}
