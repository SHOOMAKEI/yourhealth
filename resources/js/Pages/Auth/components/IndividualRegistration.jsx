import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'

export default function IndividualRegister() {
    const { errors, emailSentSuccessfully } = usePage().props;
	const [sending, setSending] = useState(false);
	const [values, setValues] = useState({
        ind_first_name: "",
        ind_last_name: "",
        ind_middle_name: "",
        ind_mobile_number: "",
        ind_password_confirmation: "",
        ind_email: '', 
        ind_password: '',
        account_category: "service-provider",
        account_category_type: "individual",
        ownership_type: ''
    
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
        Inertia.post(route('login'), values).then(() => {
            setSending(false);
        });
    }


    return (
        <div>
            <div className="row mb-2">
                <div className="col">
                    <InertiaLink href="/auth/Register">
                        <a className="btn btn-light">
                            <i className=" uil-arrow-left mr-1"></i>
                            Go back
                        </a>
                    </InertiaLink>
                </div>
            </div>
            <>
                {({ errors }) => (
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-12">
                                <h4 className="text-dark-50 text-left mb-3 font-weight-bold">Personal information</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                            <TextInput
                                name="ind_first_name"
                                type="text"
                                label="First Name"
                                placeholder="First Name"
                                errors={errors.ind_first_name}
                                value={values.ind_first_name}
                                onChange={handleChange}
                            />
                            <TextInput
                                name="ind_middle_name"
                                type="text"
                                label="Middle Name"
                                placeholder="Middle Name"
                                errors={errors.ind_middle_name}
                                value={values.ind_middle_name}
                                onChange={handleChange}
                            />
                            <TextInput
                                name="ind_last_name"
                                type="text"
                                label="Last Name"
                                placeholder="Last Name"
                                errors={errors.ind_last_name}
                                value={values.ind_last_name}
                                onChange={handleChange}
                            />
                            <TextInput
                                name="ind_mobile_number"
                                type="text"
                                label="Mobile Number"
                                placeholder="Mobile Number"
                                errors={errors.ind_mobile_number}
                                value={values.ind_mobile_number}
                                onChange={handleChange}
                            />
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="ind_middle_name">Middle name</label>
                                    <Field id="ind_middle_name" name="ind_middle_name" placeholder="well" type="text" className="form-control"/>
                                    {errors.ind_middle_name && touched.ind_middle_name ? <FormInputError title="Middle name error" message={errors.ind_middle_name} /> : null}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ind_email">Email address</label>
                                    <Field id="ind_email" name="ind_email" placeholder="email@example.com" type="text" className="form-control"/>
                                    {errors.ind_email && touched.ind_email ? <FormInputError title="Email error" message={errors.ind_email} /> : null}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ind_password">Password</label>
                                    <div className="input-group input-group-merge">
                                        <Field id="ind_password" name="ind_password" placeholder="password" type="password" className="form-control"/>
                                        <div className="input-group-append" data-password="false">
                                            <div className="input-group-text">
                                                <span className="password-eye"></span>
                                            </div>
                                        </div>
                                    </div>
                                    {errors.ind_password && touched.ind_password ? <FormInputError title="Password Error" message={errors.ind_password} /> : null}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ind_password_confirmation">Confirm password</label>
                                    <div className="input-group input-group-merge">
                                        <Field id="ind_password_confirmation" name="ind_password_confirmation" placeholder="confirm password" type="password" className="form-control"/>
                                        <div className="input-group-append" Q1 data-password="false">
                                            <div className="input-group-text">
                                                <span className="password-eye"></span>
                                            </div>
                                        </div>
                                    </div>
                                    {errors.ind_password_confirmation && touched.ind_password_confirmation ? <FormInputError title="Password Error" message={errors.ind_password_confirmation} /> : null}
                                </div>
                                <div className="form-group mb-0 text-right">
                                    <button className="btn btn-primary" type="submit"> {loading ? 'Register...': 'Register'} </button>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </>
        </div>
    )
}

