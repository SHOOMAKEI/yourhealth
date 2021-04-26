import React, {useEffect, useState} from 'react'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import TextInput from "@/Shared/TextInput";
import LoadingButton from "@/Shared/LoadingButton";
import FileInput from "@/Shared/FileInput";


export  default ({user}) => {
    const { errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({});

    useEffect(()=>{
        setValues(user)
    },[user])

    function handleChange(e) {
        const key = e.target.name;
        const value =
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setValues(values => ({
            ...values,
            [key]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        Inertia.post(route('login'), values).then(() => {
            setSending(false);
        });
    }


    return (
        <>
            <div className="col-12">
                <div className="row col-lg-12">
                    <div className="col-lg-5">
                        <h4 className="header-title">One Time Password Authentication</h4>
                        <small className="text-muted font-14">
                            Add additional security to your account using OTP (One Time Password Authentication).
                        </small>
                    </div>
                    <div className="card col-lg-7">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-left">
                                        <small className=" font-14">
                                            When OTP (One Time Password Authentication) is enabled,
                                            you will be prompted for a secure, random code that's sent to your mobile number during authentication.
                                            You may retrieve this code from sms that we sent to you.
                                        </small>

                                        {
                                            user.enabled_otp?
                                                <>
                                                    <br/>
                                                    <br/>
                                                    <small className=" font-14">
                                                        The OTP (One Time Password Authentication) code will be sent to this number <strong>{user.mobile_number}</strong> .
                                                    </small>
                                                </>
                                               : ''
                                        }
                                        {
                                            user.enabled_otp?
                                            <div className="form-group mt-3 text-left">
                                                <InertiaLink
                                                    href={route('settings.toggleOTP')}
                                                    className="btn btn-danger btn-md"
                                                >
                                                    Disable
                                                </InertiaLink>
                                            </div>:
                                            <div className="form-group mt-3 text-left">
                                                <InertiaLink
                                                    href={route('settings.toggleOTP')}
                                                    className="btn btn-primary btn-md"
                                                >
                                                    Enable
                                                </InertiaLink>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
