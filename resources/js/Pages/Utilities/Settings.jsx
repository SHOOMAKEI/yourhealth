import React from 'react'
import Layout from '@/Shared/Layout';
import AccountInformation from "@/Pages/Utilities/components/AccountInformation";
import {usePage} from "@inertiajs/inertia-react";
import PasswordUpdate from "@/Pages/Utilities/components/PasswordUpdate";
import OneTimePassowrd from "@/Pages/Utilities/components/OneTimePassowrd";
import TwoFactorAuthentication from "@/Pages/Utilities/components/TwoFactorAuthentication";
import BrowserSessions from "@/Pages/Utilities/components/BrowserSessions";


const Settings = () => {
    const { auth, settings, sessions } = usePage().props

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <div className="page-title-left pl-2">
                            <h4 className="page-title">Account Settings</h4>
                        </div>
                    </div>
                </div>
            </div>

               <AccountInformation user={auth.user}/>
                <hr/>
                <PasswordUpdate user={auth.user}/>
                <hr/>
                <OneTimePassowrd user={auth.user}/>
                <hr/>
                <TwoFactorAuthentication user={auth.user} two_factor_data={settings}/>
                <hr/>
                <BrowserSessions user={auth.user} session_data={sessions}/>
            </>
    )
}

Settings.layout = page => <Layout children={page} />;

export default Settings;

