import React, {useEffect, useState} from 'react'
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import TextInput from "@/Shared/TextInput";
import LoadingButton from "@/Shared/LoadingButton";
import FileInput from "@/Shared/FileInput";


export  default ({user}) => {
    const { errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        current_password: "",
        password: "",
        password_confirmation: ""
    });


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
        Inertia.post(route('settings.updatePassword'), values).then(() => {
            setSending(false);
        });
    }


    return (
        <>
            <div className="col-12">
                <div className="row col-lg-12">
                    <div className="col-lg-5">
                        <h4 className="header-title">Update Password</h4>
                        <small className="text-muted font-14">
                            Ensure you account is using long and random password to stay secure.
                        </small>
                    </div>
                    <div className="card col-lg-7">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-left">
                                        <form onSubmit={handleSubmit}>
                                            <TextInput
                                                name="current_password"
                                                type="password"
                                                label="Current Password"
                                                placeholder="Current Password"
                                                errors={errors.current_password}
                                                value={values.current_password}
                                                onChange={handleChange}
                                            />
                                            <TextInput
                                                name="password"
                                                type="password"
                                                label="Password"
                                                placeholder="Password"
                                                errors={errors.password}
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            <TextInput
                                                name="password_confirmation"
                                                type="password"
                                                label="Confirm Password"
                                                placeholder="Confirm Password"
                                                errors={errors.password_confirmation}
                                                value={values.password_confirmation}
                                                onChange={handleChange}
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
