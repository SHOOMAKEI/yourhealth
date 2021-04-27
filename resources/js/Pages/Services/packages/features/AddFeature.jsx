import ModalForm from "@/Pages/Utilities/ModalForm";
import React, {useEffect, useState} from "react";
import TextInput from "@/Shared/TextInput";
import TextAreaInput from "@/Shared/TextAreaInput";
import CheckBoxInput from "@/Shared/CheckBoxInput";
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import LoadingButton from "@/Shared/LoadingButton";


export default function AddFeatureModal({modalID, operation, title, initialData}) {
    const {errors, status, alertType} = usePage().props
    const [type, setType] = useState(operation)
    const [values, setValues] = useState(initialData)
    const [success, setSuccess] = useState(false)
    const [sending, setSending] = useState(false)

    function handleChange(e) {
        const key = e.target.name;
        const value =
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setValues(values => ({
            ...values,
            [key]: value
        }));
    }

    useEffect(() => setValues(initialData), [initialData])
    useEffect(() => setType(operation), [operation])

    function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        switch (type) {
            case "add":

                Inertia.post(route('feature_registration.store'), values).then(() => {
                    setSending(false);
                });
                break;

            case "update":
                Inertia.post(route('feature_registration.update', values.id), values).then(() => {
                    setSending(false);
                });
                break;

            default:
                Inertia.post(route('feature_registration.store'), values).then(() => {
                    setSending(false);
                });
                break;
        }
    }


    useEffect(() => {
        $(document).ready(function () {
            window.setTimeout(() => {
                $(".alert").fadeTo(2000, 500).slideUp(500, function () {
                    $(".alert").slideUp(500);
                });
            }, 2500)
        });
    }, [status, errors])

    function renderForm() {

        return (
            <form onSubmit={handleSubmit}>
                {
                    status && (
                        <div
                            className={`alert alert-primary alert-dismissible bg-primary text-white border-0 fade show`}
                            role="alert">
                            <button type="button" className="close" onClick={() => setSuccess(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <strong>Success - </strong> Operation was completed successfully!
                        </div>
                    )
                }

                <TextAreaInput
                    name="name"
                    type="text"
                    placeholder="Feature description"
                    label="Feature description"
                    errors={errors.name}
                    value={values.name}
                    onChange={handleChange}
                />
                <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    <LoadingButton
                        type="submit"
                        className="btn btn-primary btn-sm"
                        loading={sending}
                    >
                        Save Changes
                    </LoadingButton>
                </div>
            </form>

        )
    }

    return (
        <ModalForm
            modalID={modalID}
            title={title ? title : "Add new package feature"}
            renderForm={renderForm}
        />
    )

}
