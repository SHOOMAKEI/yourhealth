import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'

export default function PasswordResetByPhoneForm() {
	const { errors, codeSentSuccessfully } = usePage().props;
	const [sending, setSending] = useState(false);
	const [values, setValues] = useState({
        mobile_number: '',
        verification_code: ''
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

    function handleSubmitVerificationCode(e) {
        e.preventDefault();
        setSending(true);
        Inertia.post(route('login'), values).then(() => {
            setSending(false);
        });
    }

    return (
        <div>
            {
                codeSentSuccessfully ? (
                    <>
                        {({ errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="alert alert-success bg-success text-white border-0 fade show" role="alert">
                                    <strong>Success - </strong> Code sent successfully, please provide the code sent to your phone number
                                </div>
                                <TextInput
                                    name="verification_code"
                                    type="text"
                                    label="OTP Code"
                                    placeholder="OTP Code"
                                    errors={errors.mobile_number}
                                    value={values.mobile_number}
                                    onChange={handleChange}
                                />
                                <div className="form-group mb-0 text-center">
                                <LoadingButton 
                                    type="submit" 
                                    className="btn btn-primary btn-block" 
                                    loading={sending}
                                    > 
                                    Verify Code
                                </LoadingButton>
                                </div>
                            </form>
                        )}
                    </>
                ) : (
                    <>
                        {({ errors }) => (
                            <form onSubmit={handleSubmitVerificationCode}>
                             <TextInput
                                    name="verification_code"
                                    type="text"
                                    label="OTP Code"
                                    placeholder="OTP Code"
                                    errors={errors.verification_code}
                                    value={values.verification_code}
                                    onChange={handleChange}
                                />
                            <div className="form-group mb-0 text-center">
                                <LoadingButton 
                                    type="submit" 
                                    className="btn btn-primary btn-block" 
                                    loading={sending}
                                    > 
                                    Reset password
                                </LoadingButton>
                            </div>
                        </form>
                        )}
                    </>
                )
            }
        </div>
    )
}