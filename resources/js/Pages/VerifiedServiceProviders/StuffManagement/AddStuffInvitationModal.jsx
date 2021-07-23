import FormInputError from "@/Pages/Utilities/FormInputError";
import ModalForm from "@/Pages/Utilities/ModalForm";
import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import FileInput from "@/Shared/FileInput";
import SelectInput from "@/Shared/SelectInput";




export default function AddStuffInvitationModal({modalID, initialData, operation, title, callback, facility}) {
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
        Inertia.post(route('provider_profile.stuff.store'), values).then(() => {
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
                    <div className="col-12">
                        <TextInput
                            name="email"
                            type="text"
                            placeholder="Email"
                            label="Email"
                            errors={errors.email}
                            value={values.email}
                            onChange={handleChange}
                        />

                        <SelectInput
                            name="role"
                            placeholder="Role"
                            label="Role"
                            errors={errors.role}
                            value={values.role}
                            onChange={handleChange}
                        >
                            <option value='stuff' key={Math.random()}>Stuff</option>
                            <option value='admin' key={Math.random()}>Admin</option>
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

