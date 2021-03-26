import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'



export default function CompanyRegister() {
    const { errors, emailSentSuccessfully } = usePage().props;
	const [sending, setSending] = useState(false);
	const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        middle_name: "",
        mobile_number: "",
        name: "",
        password_confirmation: "",
        tin: "",
        vrn: "",
        email: '',
        password: '',
        account_category: "service-provider",
        account_category_type: "company",
	})



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
        Inertia.post(route('account.create'), values).then(() => {
            setSending(false);
        });
    }



    return (
        <div>

            <div className="row mb-2">
                <div className="col">
                    <InertiaLink href={route('register')}>
                        <a className="btn btn-light">
                            <i className=" uil-arrow-left mr-1"></i>
                            Go back
                        </a>
                    </InertiaLink>
                </div>
            </div>

            <form  onSubmit={handleSubmit} >
                <h4 className="text-dark-50 text-left mb-3 font-weight-bold">Personal information</h4>
                <div className="row">
                    <div className="col-6">
                        <TextInput
                            name="first_name"
                            type="text"
                            label="First Name"
                            placeholder="First Name"
                            errors={errors.first_name}
                            value={values.first_name}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="last_name"
                            type="text"
                            label="Last Name"
                            placeholder="Last Name"
                            errors={errors.last_name}
                            value={values.last_name}
                            onChange={handleChange}
                        />
                            <TextInput
                            name="middle_name"
                            type="text"
                            label="Middle Name"
                            placeholder="Middle Name"
                            errors={errors.middle_name}
                            value={values.middle_name}
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
                        <TextInput
                            name="email"
                            type="text"
                            label="Email"
                            placeholder="Email"
                            errors={errors.email}
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-6">
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
                            label="Password"
                            placeholder="Password"
                            errors={errors.password_confirmation}
                            value={values.password_confirmation}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="name"
                            type="text"
                            label="Company Name"
                            placeholder="Company Name"
                            errors={errors.name}
                            value={values.name}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="tin"
                            type="text"
                            label="TIN"
                            placeholder="TIN"
                            errors={errors.tin}
                            value={values.tin}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="vrn"
                            type="text"
                            label="VRN"
                            placeholder="VRN"
                            errors={errors.vrn}
                            value={values.vrn}
                            onChange={handleChange}
                        />
                        <div className="form-group mb-0 text-right">
                            <LoadingButton
                                type="submit"
                                className="btn btn-primary btn-block"
                                loading={sending}
                                >
                                Save Changes
                            </LoadingButton>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

