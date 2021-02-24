<?php

namespace App\Http\Controllers;

use App\Models\User;

class SettingsController extends Controller
{
    public function enableOtp()
    {
        $user = User::find(auth()->user()->id);

        $user->forceFill([
            'enabled_otp' => true,
        ])->save();

        return redirect()->back()->with(['status' => 'success','message' => 'OTP settings changes save successfull']);
    }

    public function disableOtp()
    {
        $user = User::find(auth()->user()->id);

        $user->forceFill([
            'enabled_otp' => false,
        ])->save();

        return redirect()->back()->with(['status' => 'success','message' => 'OTP settings changes save successfull']);
    }
}
