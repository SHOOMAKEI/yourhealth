import React, { useEffect, useState } from "react";
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import LoadingButton from "@/Shared/LoadingButton";


export default function UnregisteredServices({services,shownServices, callback}) {
    const { errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [selectedService, setSelectedService] = useState({});
    const [values, setValues] = useState({
        service_id: '',
        price: 0,
        currency: "TZS",
        compare_price: 0
    });

    useEffect(()=>
        setValues(values => ({
        ...values,
        service_id: selectedService.id
    })),[selectedService])

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
        Inertia.post(route('providerService.store'), values).then(() => {
            setSending(false);
        });
    }


    function onSearch() {
        $('#search-input-unregistered').on('input',function(e){
            let input = $(this);
            let val = input.val();

            if (input.data("lastval") != val) {
                input.data("lastval", val);

                let newShownServices = services.filter(service => {
                    if (service.name.toLocaleLowerCase().includes(val)) {
                        return service
                    }
                })

                // setShownServices(newShownServices);
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
                        services &&  services.slice(0, 4).map((service) => (
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
                                    status && (
                                        <div className={`alert alert-success alert-dismissible bg-success text-white border-0 fade show`} role="alert">
                                            <button type="button" className="close" >
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            <strong>Success - </strong> {status}
                                        </div>
                                    )
                                }

                                {

                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-6">
                                                <TextInput
                                                    name="price"
                                                    type="text"
                                                    placeholder="Price"
                                                    label="Price"
                                                    errors={errors.price}
                                                    value={values.price}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-6">
                                                <SelectInput
                                                    name="currency"
                                                    type="text"
                                                    placeholder="Currency"
                                                    label="Currency"
                                                    errors={errors.currency}
                                                    value={values.currency}
                                                    onChange={handleChange}
                                                >
                                                    <option value="TZS">TZS</option>
                                                    <option value="KES">KES</option>
                                                    <option value="UGS">UGS</option>
                                                </SelectInput>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="button" className="btn btn-light mr-3" data-dismiss="modal">Close</button>
                                            <LoadingButton
                                                type="submit"
                                                className="btn btn-primary btn-sm"
                                                loading={sending}
                                            >
                                                Save Changes
                                            </LoadingButton>
                                        </div>
                                    </form>

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
