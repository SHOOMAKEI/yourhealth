import React, { useEffect, useState } from "react";
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import LoadingButton from "@/Shared/LoadingButton";


export default function UnregisteredServices({services,shownServices, callback, user, facility}) {
    const { errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [selectedService, setSelectedService] = useState({});
    const [values, setValues] = useState({
        service_id: '',
        price: 0,
        currency: "TZS",
        compare_price: 0,
        provider_facility_id:  null
    });

    useEffect(()=>
        setValues(values => ({
        ...values,
        service_id: selectedService.id
    })),[selectedService])

   useEffect(()=>
       facility && setValues(values => ({
            ...values,
            provider_facility_id: facility
        })),[facility])

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
        if(user.provider_profile.account_category_type === 'individual')
        {
            Inertia.post(route('providerService.store'), values).then(() => {
                setSending(false);
            });
        }else {
            Inertia.post(route('facilityService.store'), values).then(() => {
                setSending(false);
            });
        }

    }
    $(document).ready(function() {
        $('#unregistered-services-table').DataTable();
        $('.dataTables_filter input[type="search"]').css(
            {'width':'145px','display':'inline-block'}
        );
    } );


    useEffect(()=>{
        $(document).ready(function () {
            window.setTimeout(()=>{
                $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                    $(".alert").slideUp(500);
                });
            },2500)
        });
    },[status, errors])

    return (
        <div>
            <div className="page-title-right mb-4">
                <h4> Unregistered Services</h4>
            </div>
            <table id="unregistered-services-table" className="table table-centered table-border mb-0 font-14">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services &&  services.map((service) => (
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
                                        <div className={`alert alert-success alert-dismissible bg-primary text-white border-0 fade show`} role="alert">
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
                                            <button type="button" className="btn btn-light btn-sm mr-3" data-dismiss="modal">Close</button>
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
