import React, { useEffect, useState } from "react";
import ModalForm from "@/Pages/Utilities/ModalForm";
import TextInput from "@/Shared/TextInput";
import LoadingButton from "@/Shared/LoadingButton";
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import TextAreaInput from "@/Shared/TextAreaInput";

export default function RequestServiceModal({
  modalID,
  operation,
  title,
}) {
    const { errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        name: "",
        description: "No description",
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
        Inertia.post(route('requestService.store'), values).then(() => {
            setSending(false);
        });
    }

  function renderForm() {
          return (
            <form onSubmit={handleSubmit}>
              {
                  status && (
                    <div className={`alert alert-success alert-dismissible bg-success text-white border-0 fade show`} role="alert">
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
                    placeholder="Service Name"
                    label="Service Name"
                    errors={errors.name}
                    value={values.name}
                    onChange={handleChange}
                />
                <TextAreaInput
                    name="description"
                    type="text"
                    placeholder="Service Description"
                    label="Service Description"
                    errors={errors.description}
                    value={values.description}
                    onChange={handleChange}
                />

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
      title={title ? title : "Request new service"}
      renderForm={renderForm}
    />
  );
}
