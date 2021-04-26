import React, {useEffect, useState} from 'react'
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import TextInput from "@/Shared/TextInput";
import LoadingButton from "@/Shared/LoadingButton";
import FileInput from "@/Shared/FileInput";


export  default ({user}) => {
    const { errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({});

    useEffect(()=>{
        setValues({
            email: user.email,
            mobile_number: user.mobile_number,
            photo: null
        })
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
        Inertia.post(route('settings.updateAccountInfo'), values).then(() => {
            setSending(false);
        });
    }

    function handleFileUpload(field, file) {
        setValues(values => ({
            ...values,
            [field]: file
        }));
    }

    return (
        <>
            <div className="col-12">
                <div className="row col-lg-12">
                    <div className="col-lg-5">
                        <h4 className="header-title">Account Information</h4>
                        <small className="text-muted font-14">
                            Update your account's information, email address and mobile number.
                            make sure your provider valid information because we will use them to send security code
                            and other notification.
                        </small>
                    </div>
                    <div className="card col-lg-7">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group text-center pb-3">
                                        <img src={user.profile_photo_path} alt="image"
                                             className="img-fluid img-thumbnail rounded-circle mb-3" width="120"/>
                                    </div>
                                    <div className="text-left">
                                        <form onSubmit={handleSubmit}>
                                            <TextInput
                                                name="email"
                                                type="text"
                                                label="Email"
                                                placeholder="Email"
                                                errors={errors.email}
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <TextInput
                                                name="mobile_number"
                                                type="text"
                                                label="Mobile Number"
                                                placeholder="Mobile Number"
                                                errors={errors.mobile_number}
                                                value={values.mobile_number}
                                                onChange={handleChange}
                                            />
                                            <FileInput
                                                name="photo"
                                                label="Change Photo"
                                                errors={errors.photo}
                                                value={values.photo}
                                                callback={handleFileUpload}
                                            />
                                            <div className="form-group mb-0 text-right">
                                                <LoadingButton
                                                    type="submit"
                                                    className="btn btn-primary btn-md"
                                                    loading={sending}
                                                >
                                                    Save Changes
                                                </LoadingButton>
                                            </div>
                                        </form>
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
