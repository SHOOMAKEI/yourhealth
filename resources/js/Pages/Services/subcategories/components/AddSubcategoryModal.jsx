
// import {
//   addServiceSubcategory,
//   updateSubcategory,
// } from "@/pages/data/actions/serviceSubcategories";
import React, { useEffect, useState } from "react";

import FormInputError from "@/Pages/Utilities/FormInputError";
import ModalForm from "@/Pages/Utilities/ModalForm";

export default function AddSubcategoryModal({
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
  const { selectedSubcategory } = useSelector((state) => state.subcategoriesStore);
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (updateServiceSubcategoryResponse.data) {
       setSuccess(true);
       const timer = setTimeout(() => {
        setSuccess(false);
        clearTimeout(timer)}, 5000)
       dispatch(updateSubcategory(updateServiceSubcategoryResponse.data.updateServiceSubCategory));
    }
 }, [updateServiceSubcategoryResponse.data])

 useEffect(() => {
   if (addServiceSubcategoryResponse.data) {
      setSuccess(true);
      const timer = setTimeout(() => {
        setSuccess(false);
        clearTimeout(timer)}, 5000)
      dispatch(addServiceSubcategory(addServiceSubcategoryResponse.data.createServiceSubCategory));
   }
}, [addServiceSubcategoryResponse.data])

  function onSubmit(
    values,
    { setSubmitting }
  ) {
    setTimeout(() => {
      switch (operation) {
        case "add":
          addSubcategory(
            values.name ,
            values.description,
            values.status
          );
          break;

        case "update":
          _updateSubcategory(
            values.name,
            values.description,
            selectedSubcategory.is_active
          );
          break;

        default:
          addSubcategory(
            values.name,
            values.description,
            values.status
          );
          break;
      }

      setSubmitting(false);
    }, 500);
  }

  function addSubcategory(name, description, status) {
    let subcategory = {
      name: name,
      description: description,
      is_active: status,
      service_category_id: parseInt(category_id )
    };

    addServiceSubcategoryCB({variables: subcategory})
  }

  function _updateSubcategory(name, description, status) {
    let subcategory = {
      id: selectedSubcategory.id,
      name: name,
      description: description,
      service_category_id: parseInt(category_id)
    };

    updateServiceSubcategory({variables: subcategory})
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
                <div className="form-group">
                    <label htmlFor="name">Subcategory name</label>
                    <Field id="name" name="name" placeholder="category name" type="text" className="form-control"/>
                    {errors.name && touched.name ? <FormInputError title="Category name error" message={errors.name} /> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Subcategory description</label>
                    <Field id="description" name="description" placeholder="description" as="textarea" className="form-control" rows={3}/>
                    {errors.description && touched.description ? <FormInputError title="Description error" message={errors.description} /> : null}
                </div>
                {
                    operation === "add" && (
                        <div>
                            <div className="custom-control custom-switch form-group">
                                <Field type="checkbox" className="custom-control-input" id="status" name="status" />
                                <label className="custom-control-label" htmlFor="status">Show subcategory to public</label>
                            </div>
                            <p className="text-muted">
                                If the above option is selected the public will see the category,
                                otherwise the public will not see the category. You can edit it later on from category settings.
                            </p>
                        </div>
                    )
                }
                <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" disabled={updateServiceSubcategoryResponse.loading || addServiceSubcategoryResponse.loading}>
                      {operation === "add" ?
                        (addServiceSubcategoryResponse.loading && addServiceSubcategoryResponse.called) ? "Adding..." : "Add subcategory"
                      : (updateServiceSubcategoryResponse.loading && updateServiceSubcategoryResponse.called) ? "Updating..." : "Update subcategory"}
                    </button>
                </div>
            </form>
    );
  }

  return (
    <ModalForm
      modalID={modalID}
      title={title ? title : "Add new service subcategory"}
      renderForm={renderForm}
    />
  );
}
