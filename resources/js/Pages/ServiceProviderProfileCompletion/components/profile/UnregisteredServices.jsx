import * as Yup from 'yup';

import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useEffect, useState } from "react";

import FormInputError from '@pages/components/FormInputError'
import { REGISTER_SERVICE } from '@pages/utils/Mutations';
import Spinner from '@pages/auth/components/Spinner';
import { serviceValues } from "@pages/data/reducers/service";
import { useApi } from '@pages/utils/ApolloClient';

interface Props {
    services: Array<serviceValues>,
    callback: () => void;
}

export interface ServiceRegistrationValues {
    price: number;
    currency: string;
}

const ServiceRegistrationSchema = Yup.object().shape({
    price: Yup.string().required('Price is required'),
    currency: Yup.string().max(3).required('Currency is required'),
});

export default function UnregisteredServices({services, callback}: Props) {
    const initialValues: ServiceRegistrationValues = {
        price: 0,
        currency: "TZS",
    }

    const [shownServices, setShownServices] = useState([...services]);
    const [selectedService, setSelectedService] = useState({})
    const [success, setSuccess] = useState(false);
    const [registerService, registerServiceResponse] = useApi({query: REGISTER_SERVICE});

    function onSubmit(values: ServiceRegistrationValues, { setSubmitting } : FormikHelpers<ServiceRegistrationValues>) {
        let _registeredService = [{
            service_id: selectedService.id,
            price: values.price,
            currency: values.currency,
            compare_price: 0
        }, ]

        registerService({variables: {input: _registeredService}})
    }

    useEffect(() => {
        let data = registerServiceResponse.data

        if (data && data.createProviderProfileServices) {
            callback()
            setSuccess(true);
            const timer = setTimeout(() => {
                setSuccess(false);
                clearTimeout(timer)
            }, 5000)
        }

    }, [registerServiceResponse.data])

    useEffect(() => {
        setShownServices(services.slice(0, 5))
    }, [])

    function onSearch() {
        $('#search-input-unregistered').on('input',function(e){
            let input = $(this);
            let val: any = input.val();

            if (input.data("lastval") != val) {
                input.data("lastval", val);
                
                let newShownServices = services.filter(service => {
                    if (service.name.toLocaleLowerCase().includes(val)) {
                        return service
                    }
                })

                setShownServices(newShownServices);
            }
        });
    }

    return (
        <div>
            <div className="page-title-right mb-2">
                <div className="app-search">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..." 
                            id="search-input-unregistered" onInput={onSearch}/>
                        </div>
                    </form>
                </div>
            </div>
            <table className="table table-centered table-borderless mb-0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shownServices.slice(0, 4).map((service : {name: string; id: string;}) => (
                            <tr key={service.id}>
                                <td>{service.name}</td>
                                <td>
                                    <button  type="button" className="btn btn-light btn-sm" data-toggle="modal" 
                                     data-target="#bs-example-modal-sm" onClick={() => setSelectedService(service)}>
                                        Add
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="ml-5 mt-2">
                <div className="modal fade" id="bs-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="mySmallModalLabel">Register {selectedService.name}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
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
                                    registerServiceResponse.called && registerServiceResponse.loading ?
                                        <Spinner /> :
                                        (
                                            <Formik
                                                initialValues={initialValues}
                                                onSubmit={onSubmit}
                                                validationSchema={ServiceRegistrationSchema}
                                            >
                                                {({ errors, touched }) => (
                                                    <Form>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="price">Price</label>
                                                                    <Field id="price" name="price" placeholder="John" type="text" className="form-control"/>
                                                                    {errors.price && touched.price ? <FormInputError title="Price error" message={errors.price} /> : null}
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="currency">Currency</label>
                                                                    <Field as="select" name="currency" id="currency" className="form-control">
                                                                        <option value="TZS">TZS</option>
                                                                        <option value="KES">KES</option>
                                                                        <option value="UGS">UGS</option>
                                                                    </Field>
                                                                    {errors.currency && touched.currency ? <FormInputError currency="Currency error" message={errors.currency} /> : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-0 text-right">
                                                            <button type="button" className="btn btn-light mr-3" data-dismiss="modal">Close</button>
                                                            <button className="btn btn-primary" type="submit"> Register </button>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>
                                        )
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <i>
                    {
                        services.length > 0 ? 'Search to see more services...' : 'There are no registered services'
                    }
                </i>
            </div>
        </div>
    )
}