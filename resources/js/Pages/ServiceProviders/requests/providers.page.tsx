import {Heading, ServiceProviderValues, ServiceProvidersTable} from '@pages/service-providers/requests/components'
import {useEffect, useState} from "react";

import Framework from "@pages/framework";
import { QUERY_PROVIDERS } from "@pages/utils/Query";
import Spinner from '@pages/auth/components/Spinner';
import { useApi } from "@pages/utils/ApolloClient";

export default function Provider() {
    const [providers, setProviders] = useState([]);
    const [getProvidersRequests, getProvidersRequestsResponse] = useApi({query: QUERY_PROVIDERS})

    useEffect(() => {
        getProvidersRequests({})
    }, [])

    useEffect(() => {
        let data = getProvidersRequestsResponse.data;

        if (data && data.unverifiedServiceProviderRequests) {
            setProviders(data.unverifiedServiceProviderRequests)
        }
    }, [getProvidersRequestsResponse.data])

    function searchProviders(content: string) {

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