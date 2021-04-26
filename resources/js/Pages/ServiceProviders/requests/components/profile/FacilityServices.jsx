import React, {useEffect, useState} from "react";
import {initializeDataTable} from "@/Pages/Utilities/Services";
import {usePage} from "@inertiajs/inertia-react";
import SelectInput from "@/Shared/SelectInput";

const FACILITY_SERVICES_DATA_TABLE = 'facility-services-datatable'

export default function FacilityServices({provider}) {
    const { errors } = usePage().props
    const [services, setServices] = useState([])
    const [facilities, setFacilities] = useState([])
    const [values, setValues] = useState({ facility:facilities[0]?.id})

    const[sending, setSending] = useState(false)

    useEffect(() => {
        setSending(true)
        values.facility && axios.get(route('service_provider_profiles.facility_services',values?.facility))
            .then( resp => {
                setServices(resp.data)
                setSending(false)
            })
    }, [values?.facility])

    useEffect(() => {
        setSending(true)
        axios.get(route('service_provider_profiles.facilities',provider.id))
            .then( resp => {
                setFacilities(resp.data)
                setValues(resp.data[0].id)
                setSending(false)
            })
    }, [provider])

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setValues(values => ({
            ...values,
            [key]: value
        }));
    }

    useEffect(() => {
        initializeDataTable(true, true, FACILITY_SERVICES_DATA_TABLE)
    }, [])

    return (
        <div className="tab-pane fade" id="v-pills-facility-services" role="tabpanel"
             aria-labelledby="v-pills-facility-services-tab">
            <div className="col-12">
                <h4>Select Facility</h4>
                <SelectInput
                    name="facility"
                    type="text"
                    errors={errors.facility}
                    value={values.facility}
                    onChange={handleChange}
                >
                    { facilities && facilities.map((facility)=>(
                        <option value={facility.id} key={facility.id}>{facility.name}</option>
                    ))}
                </SelectInput>
            </div>
            <table className="table dt-responsive nowrap w-100">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Price currency</th>
                </tr>
                </thead>
                <tbody>
                {
                    services && services.map(service => (
                        <tr>
                            <td>{service.name}</td>
                            <td>{service.pivot.price}</td>
                            <td>{service.pivot.currency}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}
