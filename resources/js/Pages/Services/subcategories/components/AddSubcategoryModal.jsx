import ModalForm from "@/Pages/Utilities/ModalForm";
import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import TextAreaInput from "@/Shared/TextAreaInput";
import CheckBoxInput from "../../../../Shared/CheckBoxInput";




export default function AddSubcategoryModal({
                                             modalID,
                                             initialData,
                                             operation,
                                             title,
                                         }) {
    const {errors, status, alertType} = usePage().props

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

    useEffect(function(){
        setValues(initialData)
    },[initialData])

    function handleSubmit(e) {
        e.preventDefault();
        switch (operation) {
            case "add":
                setSending(true);
                Inertia.post(route('services_sub_categories.store'), values).then(() => {
                    setSending(false);
                });
                break;

            case "update":
                setSending(true);
                Inertia.put(route('services_sub_categories.update',values.id), values).then(() => {
                    setSending(false);
                });
                break;

            default:
                setSending(true);
                Inertia.post(route('services_sub_categories.store'), values).then(() => {
                    setSending(false);
                });
                break;
        }


    }


    function addCategory(name, description, status) {
        let category = {
            name: name,
            description: description,
            is_active: status,
        };

        // addServiceCategoryCB({variables: category});
    }

    function _updateCategory(id, name, description, status) {
        let category = {
            id: id,
            name: name,
            description: description,
        };

        // updateServiceCategory({variables: category});
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
                            <strong>Success - </strong> {status}
                        </div>
                    )
                }
                <TextInput
                    name="name"
                    type="text"
                    placeholder="Category Name"
                    label="Category Name"
                    errors={errors.name}
                    value={values.name}
                    onChange={handleChange}
                />
                <TextAreaInput
                    name="description"
                    type="text"
                    placeholder="Category description"
                    label="Category description"
                    errors={errors.description}
                    value={values.description}
                    onChange={handleChange}
                />
                {
                    operation === "add" && (
                        <div>
                            <CheckBoxInput
                                name="is_active"
                                placeholder="Show category to public"
                                label="Show category to public"
                                errors={errors.status}
                                value={values.status}
                                onChange={handleChange}
                            />
                            <CheckBoxInput
                                name="approved_at"
                                label="Approve Category"
                                errors={errors.approved_at}
                                value={values.approved_at}
                                onChange={handleChange}
                            />
                            <p className="text-muted">
                                If the above option is selected the public will see the category,
                                otherwise the public will not see the category. You can edit it later on from category settings.
                            </p>
                        </div>
                    )
                }
                <div className="modal-footer">
                    <button type="button" className="btn btn-light btn-sm" data-dismiss="modal">Close</button>
                    <LoadingButton
                        type="submit"
                        className="btn btn-primary btn-sm"
                        loading={sending}
                    >
                        Save Changes
                    </LoadingButton>
                </div>
            </form>
        );
    }

    return (
        <ModalForm
            modalID={modalID}
            title={title ? title : "Add new service sub category"}
            renderForm={renderForm}
        />
    );
}
