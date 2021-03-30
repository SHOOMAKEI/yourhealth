import {
    AddServiceModal,
    Heading,
    InfoSideBar,
    Paginator,
    ServicesTable
} from '@/Pages/Services/services/components'
import React, { useEffect, useState } from 'react';

import { ADD_CATEGORY_MODAL_ID } from '@/Pages/Utilities/Constants'
import Framework from '@pages/framework';

const SERVICES_BATCH_COUNT = 10;

const ManageServices = () => {
    const {services} = useSelector(state => state.servicesStore);

    const [servicesBatchCount, setServicesBatchCount] = useState(SERVICES_BATCH_COUNT)
    const [shownServices, setShownServices] = useState(services.slice(0, servicesBatchCount))
    const [paginatorSP, setPaginatorSP] = useState(0)
    const [heading, setHeading] = useState('Subcategory')

    useEffect(() => {
        if(services.length > 0) {
            setShownServices(services.slice(paginatorSP, paginatorSP + servicesBatchCount))
        }
    }, [services])

    // useEffect(() => {
    //     queryServices({variables: {id: subcategory_id}});
    // }, []);
    //
    // useEffect(() => {
    //     if(data) {
    //         dispatch(storeService(data.serviceSubCategory.services));
    //         setHeading(data.serviceSubCategory.name)
    //     }
    // }, [data])

    function renderAddServiceModal() {
        return <AddServiceModal modalID={ADD_CATEGORY_MODAL_ID} operation="add"/>
    }

    function selectPage(page) {
        let startingPoint = page === 0 ? 0 : (page * servicesBatchCount);
        let endingPoint = startingPoint + servicesBatchCount

        setShownServices(services.slice(startingPoint, endingPoint))
        setPaginatorSP(startingPoint)
        return 0;
    }

    function searchCategories(content) {
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
                <div className="col-xl-7">
                    <div className="card px-2">
                        <Heading title={`${heading} services`} renderModal={renderAddServiceModal} modalID={ADD_CATEGORY_MODAL_ID} search={searchCategories}  />
                        <ServicesTable services={shownServices} />
                        <Paginator batchCount={servicesBatchCount} totalItems={services.length} activePageCallBack={selectPage} />
                    </div>
                </div>

                <div className="col-xl-5">
                    <InfoSideBar />
                </div>
            </div>
        )
    }

    return <Framework renderContent={renderContent}/>
}

export default ManageServices;
