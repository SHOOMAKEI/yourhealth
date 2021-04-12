import Heading from './components/Heading'
 import   ServiceProvidersTable from './components/ServiceProvidersTable'
import {useEffect, useState} from "react";

import Framework from "@/Pages/framework";

export default function Provider() {
    const [providers, setProviders] = useState([]);
    // const [getProvidersRequests, getProvidersRequestsResponse] = useApi({query: QUERY_PROVIDERS})

    useEffect(() => {
        // getProvidersRequests({})
    }, [])

    useEffect(() => {
        let data = getProvidersRequestsResponse.data;

        if (data && data.unverifiedServiceProviderRequests) {
            setProviders(data.unverifiedServiceProviderRequests)
        }
    }, [getProvidersRequestsResponse.data])

    function searchProviders(content) {

    }

    function renderContent() {
        return (
            <div className="row" style={{paddingTop: 30 + 'px'}}>
                <div className="col">
                    <div className="card px-2">
                        <Heading title={"Service providers registration requests"} search={searchProviders} />
                        {
                            getProvidersRequestsResponse.called && getProvidersRequestsResponse.loading ?
                                <Spinner /> :
                                <ServiceProvidersTable serviceProviders={providers} />
                        }
                    </div>
                </div>
            </div>
        )
    }

    return <Framework renderContent={renderContent}/>
}
