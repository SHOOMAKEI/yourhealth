import ModalForm from "@/Pages/Utilities/ModalForm";
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import TextAreaInput from "@/Shared/TextAreaInput";
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
        award_description: "No description",
        award_title: "",
        award_year: "",
        award_institution: "",
        award_attachment: ""
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
                        <button type="button" className="close" >
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
                            name="award_institution"
                            type="text"
                            placeholder="Institution"
                            label="Institution"
                            errors={errors.award_institution}
                            value={values.award_institution}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="award_year"
                            type="text"
                            placeholder="Year"
                            label="year"
                            errors={errors.award_year}
                            value={values.award_year}
                            onChange={handleChange}
                        />
                        <TextAreaInput
                            name="award_description"
                            type="text"
                            placeholder="Description"
                            label="Description"
                            rows={4}
                            errors={errors.award_description}
                            value={values.award_description}
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
                            errors={errors.award_attachment}
                            value={values.award_attachment}
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
          title={title ? title : "Add new Qualification"}
          renderForm={renderForm}
          size={'large'}
        />
    );
}

