import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'

export default function IndividualRegister() {
    const { errors, emailSentSuccessfully } = usePage().props;
	const [sending, setSending] = useState(false);
	const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        middle_name: "",
        mobile_number: "",
        password_confirmation: "",
        email: '', 
        password: '',
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
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12">
                        <h4 className="text-dark-50 text-left mb-3 font-weight-bold">Personal information</h4>
                    </div>
                </div>
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
                        errors={errors.ind_last_name}
                        value={values.ind_last_name}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="mobile_number"
                        type="text"
                        label="Mobile Number"
                        placeholder="Mobile Number"
                        errors={errors.ind_mobile_number}
                        value={values.ind_mobile_number}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="col-6">
                    <TextInput
                        name="middle_name"
                        type="text"
                        label="Middle Name"
                        placeholder="Middle Name"
                        errors={errors.ind_middle_name}
                        value={values.ind_middle_name}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="email"
                        type="text"
                        label="Email"
                        placeholder="Email"
                        errors={errors.ind_email}
                        value={values.ind_email}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Password"
                        errors={errors.ind_password}
                        value={values.ind_password}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="password_confirmation"
                        type="password"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        errors={errors.ind_password_confirmation}
                        value={values.ind_password_confirmation}
                        onChange={handleChange}
                    />
                    <div className="form-group mb-0 text-right">
                    <LoadingButton 
                        type="submit" 
                        className="btn btn-primary btn-block" 
                        loading={sending}
                        > 
                        Register
                    </LoadingButton>
                    </div>
                    </div>
                </div>
            </form>
              
        </div>
    )
}

