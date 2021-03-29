import ModalForm from "@/Pages/Utilities/ModalForm";
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import TextAreaInput from "@/Shared/TextAreaInput";




export default function AddCategoryModal({
  modalID,
  initialData,
  operation,
  title,
}) {
  const initialValues = {
    name: "",
    description: "No description",
    status: false,
  };
  const { selectedCategory } = useSelector((state) => state.categoriesStore);
  const [success, setSuccess] = useState(false)


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
            selectedCategory.is_active
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

  function _updateCategory(name, description, status) {
    let category = {
      id: selectedCategory.id,
      name: name,
      description: description,
    };

    // updateServiceCategory({variables: category});
  }

  function renderForm() {
    return (
            <form>
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
                <TextAreaInputInput
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
                            <TextInput
                                name="status"
                                type="text"
                                placeholder="Show category to public"
                                label="Show category to public"
                                errors={errors.status}
                                value={values.status}
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
                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    <LoadingButton
                        type="submit"
                        className="btn btn-primary btn-block"
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
