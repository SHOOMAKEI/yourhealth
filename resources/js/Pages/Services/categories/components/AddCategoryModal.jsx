import ModalForm from "@/Pages/Utilities/ModalForm";
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import TextAreaInput from "@/Shared/TextAreaInput";
import CheckBoxInput from "../../../../Shared/CheckBoxInput";




export default function AddCategoryModal({
  modalID,
  initialData,
  operation,
  title,
}) {
    const {errors, status, alertType} = usePage().props
  const initialValues = {
    name: "",
    description: "No description",
    status: false,
  };
  const [values, setValues] = useState({
      name: "",
      description: "No description",
      status: false,
      approved_at:false,
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
        Inertia.post(route('services_categories.store'), values).then(() => {
            setSending(false);
        });
    }
  function onSubmit(
    values,
    { setSubmitting }
  ) {
    setTimeout(() => {
      switch (operation) {
        case "add":
          addCategory(
            values.name,
            values.description,
            values.status
          );
          break;

        case "update":
          _updateCategory(
            values.name ,
            values.description ,
            values.is_active
          );
          break;

        default:
          addCategory(
            values.name,
            values.description,
            values.status
          );
          break;
      }

      setSubmitting(false);
    }, 500);
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
                    <div className={`alert alert-success alert-dismissible bg-success text-white border-0 fade show`} role="alert">
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
      title={title ? title : "Add new service category"}
      renderForm={renderForm}
    />
  );
}
