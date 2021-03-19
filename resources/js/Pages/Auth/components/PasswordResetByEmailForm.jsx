import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'

export default function PasswordResetByEmailForm() {
    const { errors, emailSentSuccessfully } = usePage().props;
	const [sending, setSending] = useState(false);
	const [values, setValues] = useState({
        email: ''
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
        <>
            {({ errors }) => (
                <form onSubmit={handleSubmit}>
                    {
                        emailSentSuccessfully && (
                            <div className="alert alert-success bg-success text-white border-0 fade show" role="alert">
                                <strong>Success - </strong> Email sent successfully, please visit your email and click the link to reset your password
                            </div>
                        )
                    }
                    <TextInput
                        name="email"
                        type="text"
                        label="Email"
                        placeholder="Email"
                        errors={errors.email}
                        value={values.email}
                        onChange={handleChange}
                    />
                    <div className="form-group mb-0 text-center">
                    <LoadingButton 
                        type="submit" 
                        className="btn btn-primary btn-block" 
                        loading={sending}
                        > 
                        Reset Password
                    </LoadingButton>
                    </div>
                </form>
            )}
        </>
    )
}