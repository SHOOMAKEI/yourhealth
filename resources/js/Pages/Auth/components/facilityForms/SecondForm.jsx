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
        f_first_name: "",
        f_last_name: "",
        f_middle_name: "",
        f_mobile_number: "",
        f_password_confirmation: "",
        f_email: '', f_password: '',
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
        setSending(true);
        Inertia.post(route('login'), values).then(() => {
            setSending(false);
        });
    }



    return (
        <div>
        <>
            {({ errors, touched }) => (
                <form onSubmit={onSubmit}>
                    <h4 className="text-dark-50 text-left mb-3 font-weight-bold">Personal information</h4>
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
                            name="ind_last_name"
                            type="text"
                            label="Last Name"
                            placeholder="Last Name"
                            errors={errors.ind_last_name}
                            value={values.ind_last_name}
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
                        <TextInput
                            name="ind_email"
                            type="text"
                            label="Email"
                            placeholder="Email"
                            errors={errors.ind_email}
                            value={values.ind_email}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="ind_password"
                            type="password"
                            label="Password"
                            placeholder="Password"
                            errors={errors.ind_password}
                            value={values.ind_password}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="ind_password_confirmation"
                            type="password"
                            label="Password"
                            placeholder="Password"
                            errors={errors.ind_password_confirmation}
                            value={values.ind_password_confirmation}
                            onChange={handleChange}
                        />
                        <SelectInput
                            name="ownership_type"
                            label="Facility type"
                            errors={errors.ownership_type}
                            value={values.ownership_type}
                            onChange={handleChange}
                        >
                            <option value="self" selected>Self ownership</option>
                            <option value="other">Registration for someone</option>
                        </SelectInput>
                           
                            <div className="form-group mb-0 text-right">
                                <a className="btn btn-light mr-2" onClick={() => goBack(1)}> Previous </a>
                                <button className="btn btn-primary" type="submit"> Submit </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </>
        </div>
    )
}

