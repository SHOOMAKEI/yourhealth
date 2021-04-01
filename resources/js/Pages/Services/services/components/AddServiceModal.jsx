// import * as Yup from "yup";
//
// import { ADD_SERVICE, UPDATE_SERVICE } from "@pages/utils/Mutations";
// import { Field, Form, Formik, FormikHelpers } from "formik";
// import {
//   addService,
//   updateService,
// } from "@pages/data/actions/service";
// import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import FormInputError from "@/pages/Utilities/FormInputError";
import ModalForm from "@/pages/Utilities/ModalForm";
// import {ServicesState} from "@pages/data/reducers/service";
// import {membershipsStateValues} from "@pages/data/reducers/memberships";
// import { useApi } from "@pages/utils/ApolloClient";
// import { useRouter } from "next/router";



export default function AddServiceModal({
  modalID,
  operation,
  title,
}) {
  const initialValues = {
    name: "",
    description: "No description",
    status: false,
  };
  const { selectedService } = useSelector(state => state.servicesStore);
  // const dispatch = useDispatch();
  const [addServiceCB, addServiceCBResponse] = useApi({query: ADD_SERVICE})
  const [updateServiceCB, updateServiceResponse] = useApi({query: UPDATE_SERVICE})
  const [success, setSuccess] = useState(false)
  // const router = useRouter();
  const {subcategory_id} = router.query

  useEffect(() => {
    if (addServiceCBResponse.data) {
       setSuccess(true)
       // dispatch(addService(addServiceCBResponse.data.createService));
    }
 }, [addServiceCBResponse.data])

 useEffect(() => {
   if (updateServiceResponse.data) {
      setSuccess(true)
      // dispatch(updateService(updateServiceResponse.data.updateService));
   }
}, [updateServiceResponse.data])

  function onSubmit(
    values,
    { setSubmitting }
  ) {
    setTimeout(() => {
      switch (operation) {
        case "add":
          _addService(
            values.name,
            values.description ,
            values.status
          );
          break;

        case "update":
          _updateService(
            values.name,
            values.description,
            selectedService.is_active
          );
          break;

        default:
          _addService(
            values.name,
            values.description,
            values.status
          );
          break;
      }

      setSubmitting(false);
    }, 500);
  }

  function _addService(name, description, status) {
    let service = {
      name: name,
      description: description,
      is_active: status,
      service_sub_category_id: parseInt(subcategory_id )
    };
    addServiceCB({variables: service})
  }

  function _updateService(name, description, status) {
    let service = {
      id: selectedService.id,
      name: name,
      description: description,
      is_active: selectedService.is_active,
      service_sub_category_id: parseInt(subcategory_id)
    };
    updateServiceCB({variables: service})
  }

  function renderForm() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ServiceSchema}
        enableReinitialize={true}
      >
        {({ errors, touched, setFieldValue }) => {
          useEffect(() => {
            if (operation === "update") {
              setFieldValue("name", selectedService.name);
              setFieldValue("description", selectedService.description || 'No description');
            }
          }, [selectedService]);

          return (
            <Form>
              {
                  success && (
                    <div className={`alert alert-success alert-dismissible bg-success text-white border-0 fade show`} role="alert">
                        <button type="button" className="close" onClick={() => setSuccess(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Success - </strong> Operation was completed successfully!
                    </div>
                  )
                }
                {
                  updateServiceResponse.errors && updateServiceResponse.errors.map(error => (
                    <div className={`alert alert-danger alert-dismissible bg-danger text-white border-0 fade show`} role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Error - </strong> {error.message}
                    </div>
                  ))
                }
                {
                  addServiceCBResponse.errors && addServiceCBResponse.errors.map(error => (
                    <div className={`alert alert-danger alert-dismissible bg-danger text-white border-0 fade show`} role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Error - </strong> {error.message}
                    </div>
                  ))
                }
                <div className="form-group">
                    <label htmlFor="name">Service name</label>
                    <Field id="name" name="name" placeholder="service name" type="text" className="form-control"/>
                    {errors.name && touched.name ? <FormInputError title="Service name error" message={errors.name} /> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Service description</label>
                    <Field id="description" name="description" placeholder="description" as="textarea" className="form-control" rows={3}/>
                    {errors.description && touched.description ? <FormInputError title="Description error" message={errors.description} /> : null}
                </div>
                {
                    operation === "add" && (
                        <div>
                            <div className="custom-control custom-switch form-group">
                                <Field type="checkbox" className="custom-control-input" id="status" name="status" />
                                <label className="custom-control-label" htmlFor="status">Show service to public</label>
                            </div>
                            <p className="text-muted">
                                If the above option is selected the public will see the service,
                                otherwise the public will not see the service. You can edit it later on from category settings.
                            </p>
                        </div>
                    )
                }
                <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" disabled={updateServiceResponse.loading || addServiceCBResponse.loading}>
                      {operation === "add" ?
                        (addServiceCBResponse.loading && addServiceCBResponse.called) ? "Adding..." : "Add subcategory"
                      : (updateServiceResponse.loading && updateServiceResponse.called) ? "Updating..." : "Update subcategory"}
                    </button>
                </div>
            </Form>
          );
        }}
      </Formik>
    );
  }

  return (
    <ModalForm
      modalID={modalID}
      title={title ? title : "Add new service"}
      renderForm={renderForm}
    />
  );
}
