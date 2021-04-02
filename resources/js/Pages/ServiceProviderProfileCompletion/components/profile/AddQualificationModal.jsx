import ModalForm from "@/Pages/Utilities/ModalForm";
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import TextAreaInput from "@/Shared/TextAreaInput";
import FileInput from "@/Shared/FileInput";




export default function AddQualificationsModal({modalID, initialData, operation, title, callback}) {
    const { errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        description: "No description",
        award_title: "",
        year: "",
        institution_name: "",
        attachment: ""
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
        Inertia.post(route('educationQualification.store'), values).then(() => {
            setSending(false);
        });
    }


function handleFileUpload(field, file) {
    setValues(values => ({
        ...values,
        [field]: file
    }));
}


function renderForm() {
        return (
        <div>
            {
                status && (
                    <div className={`alert alert-success alert-dismissible bg-success text-white border-0 fade show`} role="alert">
                        <button type="button" className="close" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Success - </strong> Operation was completed successfully!
                    </div>
                )
            }
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <TextInput
                            name="institution_name"
                            type="text"
                            placeholder="Institution"
                            label="Institution"
                            errors={errors.institution_name}
                            value={values.institution_name}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="year"
                            type="text"
                            placeholder="Year"
                            label="year"
                            errors={errors.year}
                            value={values.year}
                            onChange={handleChange}
                        />
                        <TextAreaInput
                            name="description"
                            type="text"
                            placeholder="Description"
                            label="Description"
                            rows={4}
                            errors={errors.description}
                            value={values.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-6">
                        <TextInput
                            name="award_title"
                            type="text"
                            placeholder="Title"
                            label="Title"
                            errors={errors.award_title}
                            value={values.award_title}
                            onChange={handleChange}
                        />
                        <FileInput
                            name="attachment"
                            type="text"
                            placeholder="Attachment"
                            label="Attachment"
                            errors={errors.attachment}
                            value={values.attachment}
                            callback={handleFileUpload}
                        />
                    </div>
                </div>
                <div className="form-group mb-0 text-right">
                    <button type="button" className="btn btn-light btn-sm mr-3" data-dismiss="modal">Close</button>
                    <LoadingButton
                        type="submit"
                        className="btn btn-primary btn-sm"
                        loading={sending}
                    >
                        Save Changes
                    </LoadingButton>
                </div>
            </form>
        </div>
        )
    }

    return (
        <ModalForm
          modalID={modalID}
          title={title ? title : "Add new Qualification"}
          renderForm={renderForm}
          size={'large'}
        />
    );
}

