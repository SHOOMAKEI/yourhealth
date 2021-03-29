import React, { useEffect, useState } from "react";
import ModalForm from "@/Pages/Utilities/ModalForm";
import TextInput from "@/Shared/TextInput";
import LoadingButton from "@/Shared/LoadingButton";

export default function RequestServiceModal({
  modalID,
  operation,
  title,
}) {
  const initialValues= {
    name: "",
    description: "No description",
  };
  const { selectedService } = useSelector(state => state.servicesStore);
  const [success, setSuccess] = useState(false)

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
    values,
    { setSubmitting }
  ) {
    setTimeout(() => {
      _addService(
        values.name,
        values.description,
      );

      setSubmitting(false);
    }, 500);
  }

  function _addService(name, description) {
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
            <form>
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
                <TextInput
                    name="name"
                    type="text"
                    placeholder="Service Name"
                    label="Service Name"
                    errors={errors.name}
                    value={values.name}
                    onChange={handleChange}
                />
                <TextInput
                    name="description"
                    type="text"
                    placeholder="Service Description"
                    label="Service Description"
                    errors={errors.description}
                    value={values.description}
                    onChange={handleChange}
                />

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
