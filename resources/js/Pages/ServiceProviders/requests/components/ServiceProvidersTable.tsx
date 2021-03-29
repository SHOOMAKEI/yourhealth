import {ServiceProvider, ServiceProviderValues} from "@pages/service-providers/requests/components";

import {PROVIDER_PROFILE_MODAL_ID} from "@pages/constants";
import ProviderProfile from "@pages/service-providers/requests/components/ProviderProfile";
import {useState} from "react";

interface TableProps {
    serviceProviders: Array<ServiceProviderValues>;
}

export default function ServiceProvidersTable({serviceProviders}: TableProps) {
    const [selectedProvider, setSelectedProvider] = useState<ServiceProviderValues>(serviceProviders[0])

    function selectProvider(provider: ServiceProviderValues) {
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
                    serviceProvider => <ServiceProvider serviceProvider={serviceProvider} selectServiceProvider={selectProvider} />
                )
            }
            {/* <ProviderProfile modalId={PROVIDER_PROFILE_MODAL_ID} provider={selectedProvider} /> */}
            </tbody>
        </table>
    )
}