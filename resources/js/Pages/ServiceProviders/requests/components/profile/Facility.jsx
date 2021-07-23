import React, {useEffect, useState} from 'react'
import SelectInput from "@/Shared/SelectInput";
import {usePage} from "@inertiajs/inertia-react";

export default function Facility({provider}) {
    const { errors } = usePage().props
    const [facility, setFacility] = useState({})
    const [facilities, setFacilities] = useState([])
    const [values, setValues] = useState({ facility:facilities[0]?.id})
    const[sending, setSending] = useState(false)

    useEffect(() => {
        facilities && facilities.map(facility => {
            facility.id == values.facility? setFacility(facility):null
        })
    }, [values])

    useEffect(() => {
        setSending(true)
        axios.get(route('service_provider_profiles.facilities',provider.id))
            .then( resp => {
                setFacilities(resp.data)
                setFacility(resp.data[0])
                // setValues(resp.data[0].id)
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

    return (
        <div className="tab-pane fade" id="v-pills-facility" role="tabpanel"
             aria-labelledby="v-pills-facility-tab">
            <div className="row">
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
                <div className="col-6">
                    <table className="table table-centered mb-0">
                        <tr>
                            <td><strong>Name</strong></td>
                            <td>{facility?.name}</td>
                        </tr>
                        <tr>
                            <td><strong>Trading name</strong></td>
                            <td>{facility?.trading_name}</td>
                        </tr>
                        <tr>
                            <td><strong>TIN</strong></td>
                            <td>{facility?.tin}</td>
                        </tr>
                        <tr>
                            <td><strong>VRN</strong></td>
                            <td>{facility?.tin}</td>
                        </tr>
                        <tr>
                            <td><strong>Website</strong></td>
                            <td>{facility?.tin}</td>
                        </tr>
                        <tr>
                            <td><strong>Registration number</strong></td>
                            <td>{facility?.registration_number}</td>
                        </tr>
                        <tr>
                            <td><strong>Registration date</strong></td>
                            <td>{facility?.registration_date}</td>
                        </tr>
                    </table>
                </div>
                <div className="col-6">
                    <table className="table table-centered mb-0">
                        <tr>
                            <td><strong>Phone number</strong></td>
                            <td>{facility?.mobile_number}</td>
                        </tr>
                        <tr>
                            <td><strong>Alternate phone number</strong></td>
                            <td>{facility?.alternative_mobile_number}</td>
                        </tr>
                        <tr>
                            <td><strong>Email</strong></td>
                            <td>{facility?.email}</td>
                        </tr>
                        <tr>
                            <td><strong>Address</strong></td>
                            <td>{facility?.address}</td>
                        </tr>
                        <tr>
                            <td><strong>Physical Address</strong></td>
                            <td>{facility?.physical_address}</td>
                        </tr>
                        <tr>
                            <td><strong>Description</strong></td>
                            <td>{facility?.description}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
