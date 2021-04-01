import {ServiceProvider, ServiceProviderValues} from "@/pages/serviceProviders/requests/components";

import {PROVIDER_PROFILE_MODAL_ID} from "@/Pages/Utilities/Constants";
import ProviderProfile from "@/pages/serviceProviders/requests/components/ProviderProfile";
import React, {useState} from "react";


export default function ServiceProvidersTable({serviceProviders}) {
    const [selectedProvider, setSelectedProvider] = useState(serviceProviders[0])

    function selectProvider(provider) {
        setSelectedProvider(provider)
    }

    return (
        <table className="table dt-responsive nowrap w-100">
            <thead>
            <tr>
                <th>Title</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Requested At</th>
                <th>Updated At</th>
                <th>Provider Category</th>
                <th />
            </tr>
            </thead>
            <tbody>
            {
                serviceProviders.map(
                    serviceProvider =>
                        <ServiceProvider serviceProvider={serviceProvider} selectServiceProvider={selectProvider} />
                )
            }
            {/* <ProviderProfile modalId={PROVIDER_PROFILE_MODAL_ID} provider={selectedProvider} /> */}
            </tbody>
        </table>
    )
}
