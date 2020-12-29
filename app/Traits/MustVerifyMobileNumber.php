<?php

namespace App\Traits;

use App\Services\SMSService;



trait MustVerifyMobileNumber
{
    /**
     * Determine if the user has verified their MobileNumber address.
     *
     * @return bool
     */
    public function hasVerifiedMobileNumber()
    {
        return ! is_null($this->mobile_number_verified_at);
    }

    /**
     * Mark the given user's MobileNumber as verified.
     *
     * @return bool
     */
    public function markMobileNumberAsVerified()
    {
        return $this->forceFill([
            'mobile_number_verified_at' => $this->freshTimestamp(),
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
            'verification_code' => rand(100000,999999),
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

     /**
     * Send the MobileNumber verification notification.
     *
     * @return void
     */
    public function sendOtpCodeNotification()
    {
        $this->forceFill([
            'otp_code' => rand(100000,999999),
        ])->save();

        $sms = 'Your OTP Code is '. $this->otp_code;
        
        SMSService::sendSMSToSingeUser($this->getMobileNumberForVerification(), $sms);
    }

    public function getOtpCodeForVerification()
    {
        return $this->otp_code;
    }

}
