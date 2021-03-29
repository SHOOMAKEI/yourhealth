import FormInputError from "@/Pages/Utilities/FormInputError";
import ModalForm from "@/Pages/Utilities/ModalForm";
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import FileInput from "@/Shared/FileInput";




function FileUpload(props) {
    const {field, form} = props;

    const handleChange = async (e) => {
      const file  =  e.currentTarget.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      let base64;
      reader.onload = await function(event) {
          base64 = event.target?.result
          form.setFieldValue(field.name, base64);
      }
    };

    return (
      <div>
        <input type={'file'} onChange={(o) => handleChange(o)} className={'form-control'}/>
      </div>
    );
  }

export default function AddQualificationsModal({modalID, initialData, operation, title, callback}) {
    const { errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        registration_number: "",
        certificate_name: "",
        year: "",
        attachment: "",
        certificate_number: ""
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


    function renderForm() {
        return (
        <div>
            {
                status && (
                    <div className={`alert alert-success alert-dismissible bg-success text-white border-0 fade show`} role="alert">
                        <button type="button" className="close" onClick={() => setSuccess(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Success - </strong> Operation was completed successfully!
                    </div>
                )
            }

            <form>
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
                            onChange={handleChange}
                        />

                    </div>
                </div>
                <div className="form-group mb-0 text-right">
                    <button type="button" className="btn btn-light mr-3" data-dismiss="modal">Close</button>
                    <LoadingButton
                        type="submit"
                        className="btn btn-primary btn-block"
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

