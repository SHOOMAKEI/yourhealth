import * as Yup from "yup";

import { Field, Form, Formik, FormikHelpers } from "formik";
import { REQUEST_SERVICE, UPDATE_SERVICE } from "@pages/utils/Mutations";
import {
  addService,
  updateService,
} from "@pages/data/actions/service";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import FormInputError from "@pages/components/FormInputError";
import ModalForm from "@pages/components/ModalForm";
import {ServicesState} from "@pages/data/reducers/service";
import Spinner from "@pages/auth/components/Spinner";
import { useApi } from "@pages/utils/ApolloClient";
import { useRouter } from "next/router";

interface serviceValues {
  name: String;
  description: String;
}

const ServiceSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required().max(255),
});

interface Props {
  modalID: string;
  initialData?: serviceValues;
  operation?: "add" | "update";
  title?: string;
}

export default function RequestServiceModal({
  modalID,
  operation,
  title,
}: Props) {
  const initialValues: serviceValues = {
    name: "",
    description: "No description",
  };
  const { selectedService } = useSelector<ServicesState, ServicesState>(state => state.servicesStore);
  const dispatch = useDispatch();
  const [addServiceCB, addServiceCBResponse] = useApi({query: REQUEST_SERVICE})
  const [updateServiceCB, updateServiceResponse] = useApi({query: UPDATE_SERVICE})
  const [success, setSuccess] = useState(false)
  const router = useRouter();

  useEffect(() => {
    if (addServiceCBResponse.data) {
       setSuccess(true);
        const timer = setTimeout(() => {
            setSuccess(false);
            clearTimeout(timer)
        }, 5000)
    }
 }, [addServiceCBResponse.data])


  function onSubmit(
    values: serviceValues,
    { setSubmitting }: FormikHelpers<serviceValues>
  ) {
    setTimeout(() => {
      _addService(
        values.name as string,
        values.description as string,
      );

      setSubmitting(false);
    }, 500);
  }

  function _addService(name: string, description: string) {
    let service = {
      name: name,
      description: description,
    };
    addServiceCB({variables: {input: service}})
  }

  function renderForm() {
    return (
      addServiceCBResponse.called && addServiceCBResponse.loading ?
        <Spinner /> :
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
                <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" disabled={updateServiceResponse.loading || addServiceCBResponse.loading}>
                       Request service
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
      title={title ? title : "Request new service"}
      renderForm={renderForm}
    />
  );
}
