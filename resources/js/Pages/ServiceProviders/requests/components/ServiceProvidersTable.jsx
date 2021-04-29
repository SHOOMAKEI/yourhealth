import ServiceProvider from "./ServiceProvider";

import {PROVIDER_PROFILE_MODAL_ID} from "@/Pages/Utilities/Constants";
import ProviderProfile from "./ProviderProfile";
import React, {useState} from "react";


export default function ServiceProvidersTable({serviceProviders}) {
    const [selectedProvider, setSelectedProvider] = useState(serviceProviders[0])

    function selectProvider(provider) {
        setSelectedProvider(provider)
    }

    $(document).ready(function() {
        $('#service-provider-verification-request-table').DataTable();
        $('.dataTables_filter input[type="search"]').css(
            {'width':'145px','display':'inline-block'}
        );
    } );

    return (
        <table id="service-provider-verification-request-table" className="table dt-responsive nowrap w-100">
            <thead>
            <tr>
                <th>Title</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Requested At</th>
                <th>Updated At</th>
                <th>Provider Category</th>
                <th>Verification Status</th>
                <th />
            </tr>
            </thead>
            <tbody>
            {
                serviceProviders.map(
                    (serviceProvider, index) =>
                        <ServiceProvider key={index+1} serviceProvider={serviceProvider} selectServiceProvider={selectProvider} />
                )
            }
            {/*{selectedProvider && <ProviderProfile modalId={PROVIDER_PROFILE_MODAL_ID} provider={selectedProvider}/>}*/}
            </tbody>
        </table>
    )
}
