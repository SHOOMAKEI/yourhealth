import FormInputError from "@/Pages/Utilities/FormInputError";
import ModalForm from "@/Pages/Utilities/ModalForm";
import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import FileInput from "@/Shared/FileInput";
import SelectInput from "@/Shared/SelectInput";




export default function AddMedicalRegistrationModal({modalID, initialData, operation, title, callback, services, facility}) {
    const { errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [data, setData] = useState({})

    const [values, setValues] = useState(initialData);

   useEffect(()=>{
       setValues(initialData)
   },[facility])



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
        Inertia.post(route('practiceLicense.store'), values).then(() => {
            setSending(false);
        });
    }

    function handleFileUpload(field, file) {
        setValues(values => ({
            ...values,
            [field]: file
        }));
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


    function renderForm() {
        return (
        <div>
            {
                status && (
                    <div className={`alert alert-success alert-dismissible bg-primary text-white border-0 fade show`} role="alert">
                        <button type="button" className="close" onClick={() => setSuccess(false)}>
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
                            name="certificate_number"
                            type="text"
                            placeholder="Certificate Number"
                            label="Certificate Number"
                            errors={errors.certificate_number}
                            value={values.certificate_number}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="registration_number"
                            type="text"
                            placeholder="Registration Number"
                            label="Registration Number"
                            errors={errors.registration_number}
                            value={values.registration_number}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="year"
                            type="text"
                            placeholder="Year"
                            label="Year"
                            errors={errors.year}
                            value={values.year}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="expired_at"
                            type="date"
                            placeholder="Expired Date"
                            label="Expired Date"
                            errors={errors.expired_at}
                            value={values.expired_at}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-6">
                        <TextInput
                            name="certificate_name"
                            type="text"
                            placeholder="Certificate Name"
                            label="Certificate Name"
                            errors={errors.certificate_name}
                            value={values.certificate_name}
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
                        <SelectInput
                            name="service_category_id"
                            type="text"
                            placeholder="Authorize Service"
                            label="Authorize Service"
                            errors={errors.service_category_id}
                            value={values.service_category_id}
                            onChange={handleChange}
                        >
                            {services.map((service)=>(
                                <option value={service.id} key={service.id}>{service.name}</option>
                            ))}
                        </SelectInput>

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
          title={title ? title : "Add Medical Registration"}
          renderForm={renderForm}
          size={'large'}
        />
    );
}

