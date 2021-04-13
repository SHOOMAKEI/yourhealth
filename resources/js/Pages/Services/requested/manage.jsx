import Heading from './components/Heading'
import InfoSideBar from './components/infosidebar';
import Paginator from './components/paginator'
import ServicesTable from './components/servicesTable';
import React, { useEffect, useState } from 'react';
import Layout from "@/Shared/Layout";
import {usePage} from "@inertiajs/inertia-react";


const SERVICES_BATCH_COUNT = 10;

const ManageServices = () => {

    const {services} = usePage().props;

    const [servicesBatchCount, setServicesBatchCount] = useState(SERVICES_BATCH_COUNT)
    const [shownServices, setShownServices] = useState(services.slice(0, servicesBatchCount))
    const [paginatorSP, setPaginatorSP] = useState(0)
    const[selectedCategory, setSelectedCategory] =  useState(services[0])



    useEffect(() => {
        if(services.length > 0) {
            setShownServices(services.slice(paginatorSP, paginatorSP + servicesBatchCount))
        }
    }, [services])


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


        return (
            <div className="row" style={{paddingTop: 30 + 'px'}}>
                <div className="col-xl-8">
                    <div className="card px-2">
                        <Heading title="Service categories"  search={searchCategories}  />
                        {/*{*/}
                        {/*    errors && errors.map((error) => (*/}
                        {/*        <div className="alert alert-danger bg-danger text-white border-0 mb-0 show mb-4" role="alert">*/}
                        {/*            <strong>Error </strong> {error.message}*/}
                        {/*        </div>*/}
                        {/*    ))*/}

                        {

                            <div>
                                <ServicesTable services={shownServices} callback={setSelectedCategory} />
                                <Paginator batchCount={servicesBatchCount} totalItems={services.length} activePageCallBack={selectPage} />
                            </div>
                        }
                    </div>
                </div>

                <div className="col-xl-4">
                    {
                        selectedCategory && <InfoSideBar service={selectedCategory} />
                    }

                </div>
            </div>
        )


}
ManageServices.layout = page => <Layout children={page} />;
export default ManageServices;
