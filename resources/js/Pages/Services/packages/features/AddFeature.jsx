import ModalForm from "@/Pages/Utilities/ModalForm";
import React, {useEffect, useState} from "react";
import TextInput from "@/Shared/TextInput";
import TextAreaInput from "@/Shared/TextAreaInput";
import CheckBoxInput from "@/Shared/CheckBoxInput";
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import LoadingButton from "@/Shared/LoadingButton";
import SelectInput from "@/Shared/SelectInput";


export default function AddFeatureModal({modalID, operation, title, initialData, services}) {
    const {errors, status, alertType} = usePage().props
    const [type, setType] = useState(operation)
    const [serviceData, setServiceData] = useState({})
    const [values, setValues] = useState(initialData)
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

    useEffect(() => setValues(initialData), [initialData])
    useEffect(() => setType(operation), [operation])
    useEffect(()=> setServiceData(services) ,[services])

    function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        switch (type) {
            case "add":

                Inertia.post(route('feature_registration.store'), values).then(() => {
                    setSending(false);
                });
                break;

            case "update":
                Inertia.put(route('feature_registration.update', values.id), values).then(() => {
                    setSending(false);
                });
                break;

            default:
                Inertia.post(route('feature_registration.store'), values).then(() => {
                    setSending(false);
                });
                break;
        }
    }
    function addService(e){
        e.preventDefault();
        if(values.service_id !== ""){
            setValues(values => ({
                ...values,
                services:[...values.services , serviceData.find(d=> d.id == values.service_id)],
            }));
        }

    }

    function removeService(e,service){
        e.preventDefault();

        setValues(values => ({
            ...values,
            services:[...values.services.filter(fet => fet.id !=  service.id)],

        }));

    }

    useEffect(() => {
        $(document).ready(function () {
            window.setTimeout(() => {
                $(".alert").fadeTo(2000, 500).slideUp(500, function () {
                    $(".alert").slideUp(500);
                });
            }, 2500)
        });
    }, [status, errors])

    function renderForm() {

        return (
            <form onSubmit={handleSubmit}>
                {
                    status && (
                        <div
                            className={`alert alert-primary alert-dismissible bg-primary text-white border-0 fade show`}
                            role="alert">
                            <button type="button" className="close" onClick={() => setSuccess(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <strong>Success - </strong> Operation was completed successfully!
                        </div>
                    )
                }

                <TextAreaInput
                    name="name"
                    type="text"
                    placeholder="Feature description"
                    label="Feature description"
                    errors={errors.name}
                    value={values.name}
                    onChange={handleChange}
                />
                {values.services && values.services.length>0 && (
                    <>
                        <h4>Feature Services</h4>
                        <table className="table table-hover table-centered mb-0">
                            <thead>
                            <tr>
                                <th>
                                    Service
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {values.services && values.services.length>0 && values.services.map((service,index )=>(
                                <tr key={index+1}>
                                    <td>
                                        {service.name}
                                    </td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={(e)=>removeService(e, service)}>
                                            <i className="dripicons-trash"/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </>

                )}
                <div className="row">
                    <div className="col-lg-10">
                        <SelectInput
                            name="service_id"
                            placeholder="Feature Services"
                            label="Feature Services"
                            errors={errors.service_id}
                            value={values.service_id}
                            onChange={handleChange}
                        >
                            {
                                serviceData && serviceData.length>0 && serviceData?.map((service, index)=>(
                                    <option value={service.id} key={index+1}>{service.name}</option>
                                ))
                            }
                        </SelectInput>
                    </div>
                    <div className="col-lg-2 my-auto">
                        <button className="btn btn-primary btn-sm" onClick={addService}>
                            <i className="dripicons-plus"/>
                        </button>
                    </div>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    <LoadingButton
                        type="submit"
                        className="btn btn-primary btn-sm"
                        loading={sending}
                    >
                        Save Changes
                    </LoadingButton>
                </div>
            </form>

        )
    }

    return (
        <ModalForm
            modalID={modalID}
            title={title ? title : "Add new package feature"}
            renderForm={renderForm}
        />
    )

}
