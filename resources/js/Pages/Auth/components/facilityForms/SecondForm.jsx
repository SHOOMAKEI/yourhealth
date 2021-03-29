import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import SelectInput from '@/Shared/SelectInput'
import LoadingButton from '@/Shared/LoadingButton'


// interface formProps {
//     callback: ({}: createInputDataValues) => void;
//     goBack: (step: number) => void;
// }


export default function SecondForm({callback, goBack}) {
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
        ownership_type: 'self'
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
        callback({
            form_number: 2,
            form_two_data: values
        })
    }



    return (
            <form onSubmit={handleSubmit}>
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
                    </div>
                    <div className="col-6">
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
                    <SelectInput
                        name="ownership_type"
                        label="Facility Ownership type"
                        errors={errors.ownership_type}
                        value={values.ownership_type}
                        onChange={handleChange}
                    >
                        <option value="self" > Self ownership</option>
                        <option value="other">Registration for someone</option>
                    </SelectInput>

                        <div className="form-group mb-0 text-right">
                            <a className="btn btn-light mr-2" onClick={() => goBack(1)}> Previous </a>
                            <button className="btn btn-primary" type="submit"> Submit </button>
                        </div>
                    </div>
                </div>
            </form>
    )
}

