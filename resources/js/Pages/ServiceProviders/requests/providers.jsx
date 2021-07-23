import Heading from './components/Heading'
 import   ServiceProvidersTable from './components/ServiceProvidersTable'
import React, {useEffect, useState} from "react";

import Framework from "@/Pages/framework";
import {usePage} from "@inertiajs/inertia-react";
import ManageServices from "@/Pages/Services/services/components/Manage";
import Layout from "@/Shared/Layout";

 function Provider() {
    const { providers } = usePage().props
    // const [providers, setProviders] = useState([]);
    // const [getProvidersRequests, getProvidersRequestsResponse] = useApi({query: QUERY_PROVIDERS})

    useEffect(() => {
        // getProvidersRequests({})
    }, [])


    function searchProviders(content) {

    }


    return (
        <div className="row" style={{paddingTop: 30 + 'px'}}>
            <div className="col">
                <div className="card px-2">
                    <Heading title={"Service providers registration requests"} search={searchProviders} />
                    {
                           providers && <ServiceProvidersTable serviceProviders={providers} />
                    }
                </div>
            </div>
        </div>
    )

}

Provider.layout = page => <Layout children={page} />;

export default Provider;
