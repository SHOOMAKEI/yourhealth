import ModalForm from "@/Pages/Utilities/ModalForm";
import React, {useEffect, useState} from "react";
import TextInput from "@/Shared/TextInput";
import TextAreaInput from "@/Shared/TextAreaInput";
import CheckBoxInput from "@/Shared/CheckBoxInput";
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import LoadingButton from "@/Shared/LoadingButton";


export default function AddMembershipModal({modalID, operation, title,}) {
    const {errors, status, alertType} = usePage().props
    const [values, setValues] = useState({
        name: "",
        description: "No description",
        status: false,
    })
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

    function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        Inertia.post(route('membership_registration.store'), values).then(() => {
            setSending(false);
        });
    }

        function onSubmit(values, {setSubmitting}) {
            setTimeout(() => {
                switch (operation) {
                    case "add":
                        _addMembership(values.name, values.description, values.is_active);
                        break;

                    case "update":
                        // _updateMembership(values.name, values.description, selectedMembership.is_active);
                        break;

                    default:
                        _addMembership(values.name, values.description, values.is_active);
                        break;
                }

                setSubmitting(false);
            }, 500);
        }

        function _addMembership(name, description, status) {
            let membership = {
                name: name,
                description: description,
                is_active: status,
            };

        }

        function _updateMembership(name, description, status) {
            // let membership = {
            //     id: selectedMembership.id,
            //     name: name,
            //     description: description,
            //     is_active: status
            // };

        }

        function renderForm() {

            return (
                <form onSubmit={handleSubmit}>
                    {
                        status && (
                            <div className={`alert alert-primary alert-dismissible bg-success text-white border-0 fade show`} role="alert">
                                <button type="button" className="close" onClick={() => setSuccess(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Success - </strong> Operation was completed successfully!
                            </div>
                        )
                    }
                    <TextInput
                        name="name"
                        type="text"
                        placeholder="Membership Name"
                        label="Membership Name"
                        errors={errors.name}
                        value={values.name}
                        onChange={handleChange}
                    />
                    <TextAreaInput
                        name="description"
                        type="text"
                        placeholder="Membership description"
                        label="Membership description"
                        errors={errors.description}
                        value={values.description}
                        onChange={handleChange}
                    />
                    {
                        operation === "add" && (
                            <div>
                                <div className="custom-control custom-switch form-group">
                                    <CheckBoxInput
                                        name="is_active"
                                        placeholder="Show membership to public"
                                        label="Show membership to public"
                                        errors={errors.status}
                                        value={values.status}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className="text-muted">
                                    If the above option is selected the public will see the membership,
                                    otherwise the public will not see the membership. You can edit it
                                    later on from category settings.
                                </p>
                            </div>
                        )
                    }
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
                title={title ? title : "Add new membership"}
                renderForm={renderForm}
            />
        )

}
