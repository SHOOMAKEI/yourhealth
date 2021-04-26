import React, {useState, useEffect} from "react";
import {initializeDataTable} from "@/Pages/Utilities/Services";
import {usePage} from "@inertiajs/inertia-react";

const SERVICES_DATA_TABLE = 'provider-services-datatable'

export default function Services({provider}) {
    const [services, setServices] = useState([])
    const[sending, setSending] = useState(false)

    useEffect(() => {
        setSending(true)
        axios.get(route('service_provider_profiles.services',provider.id))
            .then( resp => {
                setServices(resp.data)
                setSending(false)
                console.log(resp.data)
            })
    }, [provider])
    // useEffect(() => {
    //     initializeDataTable(true, true, SERVICES_DATA_TABLE)
    // }, [])

    return (
        <div className="tab-pane fade" id="v-pills-services" role="tabpanel"
             aria-labelledby="v-pills-services-tab">
            <table id={SERVICES_DATA_TABLE} className="table dt-responsive nowrap w-100">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                { services && services.map((service)=>(
                    <tr>
                        <td>{service.name}</td>
                        <td>{service.pivot.price}</td>
                        <td>{service.pivot.currency}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
