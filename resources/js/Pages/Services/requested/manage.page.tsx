import {Heading, InfoSideBar, Paginator, ServicesTable} from '@pages/services/requested/components'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';

import Framework from '@pages/framework';
import {NextPage} from 'next';
import { QUERY_REQUESTED_SERVICES } from '@pages/utils/Query';
import {RequestedServicesState} from "@pages/data/reducers/requestedService";
import Spinner from '@pages/auth/components/Spinner';
import { storeRequestedServices } from '@pages/data/actions/requestedService';
import { useApi } from '@pages/utils/ApolloClient';

const SERVICES_BATCH_COUNT = 10;

const ManageServices: NextPage = () => {
    const {services} = useSelector<RequestedServicesState, RequestedServicesState>(state => state.requestedServiceStore);

    const [servicesBatchCount, setServicesBatchCount] = useState(SERVICES_BATCH_COUNT)
    const [shownServices, setShownServices] = useState(services.slice(0, servicesBatchCount))
    const [paginatorSP, setPaginatorSP] = useState(0)
    const [queryServices, {data, called, loading, errors}] = useApi({query: QUERY_REQUESTED_SERVICES})
    const dispatch = useDispatch();

    useEffect(() => {
        queryServices({})
    }, [])

    useEffect(() => {
        if(services.length > 0) {
            setShownServices(services.slice(paginatorSP, paginatorSP + servicesBatchCount))
        }
    }, [services])

    

    useEffect(() => {
        if (data && data.requestedService) {
            dispatch(storeRequestedServices(data.requestedService));
        }
    }, [data])

    function selectPage(page: number) {
        let startingPoint = page === 0 ? 0 : (page * servicesBatchCount);
        let endingPoint = startingPoint + servicesBatchCount
        
        setShownServices(services.slice(startingPoint, endingPoint))
        setPaginatorSP(startingPoint)
        return 0;
    }

    function searchCategories(content: string) {
        if(content.length === 0) {
            setShownServices(services.slice(0, servicesBatchCount))
        } else {
            setShownServices(
                services.filter(category =>  {
                    if(category.name.toLowerCase().includes(content.toLowerCase())) {
                        return category
                    }
                })
            )
        }
    }

    function renderContent() {
        return (
            <div className="row" style={{paddingTop: 30 + 'px'}}>
                <div className="col-xl-8">
                    <div className="card px-2">
                        <Heading title="Service categories"  search={searchCategories}  />
                        {
                            errors && errors.map((error: {message: string;}) => (
                                <div className="alert alert-danger bg-danger text-white border-0 mb-0 show mb-4" role="alert">
                                    <strong>Error </strong> {error.message}
                                </div>
                            ))
                        }
                        {
                            loading ? <Spinner /> : 
                                <div>
                                    <ServicesTable services={shownServices} />
                                    <Paginator batchCount={servicesBatchCount} totalItems={services.length} activePageCallBack={selectPage} />
                                </div>
                        }
                    </div>
                </div>

                <div className="col-xl-4">
                    <InfoSideBar />
                </div>
            </div>
        )
    }
    
    return <Framework renderContent={renderContent}/>
}

export default ManageServices;
