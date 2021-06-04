import React, {useEffect, useState} from 'react'
import TextAreaInput from "@/Shared/TextAreaInput";
import LoadingButton from "@/Shared/LoadingButton";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";

export default function Verification({provider}) {
    const { errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        description: "No description",
        provider_id: provider.id
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
        Inertia.post(route('service_provider_profiles.reject'), values).then(() => {
            setSending(false);
        });
    }

    useEffect(()=>{
        $(document).ready(function () {
            window.setTimeout(()=>{
                $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                    $(".alert").slideUp(500);
                });
            },2500)
        });
    },[status, errors])

    return (
        <div className="tab-pane fade" id="v-pills-verification" role="tabpanel"
             aria-labelledby="v-pills-verification-tab">
            {
                status && (
                    <div className="alert alert-success alert-dismissible bg-primary text-white border-0 fade show topnav-logo" role="alert">
                        <strong>{status}</strong>
                    </div>
                )
            }
            {
                provider.is_verified && (
                    <div className=" alert-success alert-dismissible bg-primary text-white border-0 p-2 fade show topnav-logo" role="alert">
                        <strong> This service provider is verified </strong>
                    </div>
                )
            }
            <h5 className="modal-title" id="scrollableModalTitle">
                Verify {`${provider.first_name} ${provider.last_name}`}
            </h5>


                <>
                    <p className="text-muted mt-1">
                        To verify {`${provider.first_name} ${provider.last_name}`} as a verified service provider,
                        click the button below and {provider.gender === 'M' ? 'he' : 'she'} will be notified via an
                        email, if you want to reject the request provide rejection reason below and click reject
                        request.
                    </p>
                    <InertiaLink href={route('service_provider_profiles.verify', provider.id)}
                        className="btn btn-primary btn-sm">
                        Verify
                    </InertiaLink>

                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <TextAreaInput
                            name="reasons"
                            type="text"
                            placeholder="Rejection Reason"
                            label="Rejection Reason"
                            rows={4}
                            errors={errors.reasons}
                            value={values.reasons}
                            onChange={handleChange}
                        />
                        <LoadingButton
                            type="submit"
                            className="btn btn-danger btn-sm"
                            loading={sending}
                        >
                            Reject
                        </LoadingButton>
                    </form>


                </>
                </div>
                )

            }
