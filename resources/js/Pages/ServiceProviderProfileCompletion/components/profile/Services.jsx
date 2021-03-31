import React, {useEffect, useState} from "react";

import Heading from '@/Pages/ServiceProviderProfileCompletion/components/profile/Heading'
import { REQUEST_SERVICE_MODAL_ID } from '@/pages/Utilities/Constants'
import RegisteredServices from "@/Pages/ServiceProviderProfileCompletion/components/profile/RegisteredServices";
import RequestServiceModal from '@/Pages/ServiceProviderProfileCompletion/components/profile/RequestServiceModal'
import UnregisteredServices from "@/Pages/ServiceProviderProfileCompletion/components/profile/UnregisteredServices";

export default function Services({user}) {
    const [services, setServices] = useState([])
    const [registeredServices, setRegisteredServices] = useState([])
    const [selectedFacility, setSelectedFacility] = useState(facilities[0])


    useEffect(() => {
        let data = queryServicesResponse.data

        if (data && data.services) {
            setServices(data.services)
        }

    }, [queryServicesResponse.data])

    useEffect(() => {
        let data = queryRegisteredServicesResponse.data

        if (data && data.providerProfileServicesInfo) {
            setRegisteredServices(data.providerProfileServicesInfo)
        }

    }, [queryRegisteredServicesResponse.data])

    function submitForVerification() {
        submitRequest({})
    }

    function synchronize() {
        queryRegisteredServices({})
    }

    function searchQualifications() {

    }

    function renderAddSubcategoryModal() {
        return <RequestServiceModal modalID={REQUEST_SERVICE_MODAL_ID} operation="add" />
    }

    return (
        <div className="tab-pane fade" id="v-pills-services" role="tabpanel"
             aria-labelledby="v-pills-services-tab">

            {
                user.provider_profile.account_category_type === 'company' && (
                    <>
                        <h4>Select Facility</h4>
                        <select className="custom-select mb-1">
                            {
                                facilities.map(facility =>
                                <option value={facility.id} onSelect={() => setSelectedFacility(facility)}>
                                    {facility.name}</option>
                                )
                            }
                        </select>
                    </>
                )
            }

            <Heading
                title={`Request Service for ${selectedFacility.name}`}
                modalID={REQUEST_SERVICE_MODAL_ID}
                buttonText="Request"
                search={searchQualifications}
                renderModal={renderAddSubcategoryModal}
                showSearch={false}
            />

            <div className="row">
                <div className="col-6">
                    {
                        queryServicesResponse.called && queryServicesResponse.loading ?
                            <Spinner /> :
                            <UnregisteredServices services={services} callback={synchronize} />
                    }
                </div>
                <div className="col-6">
                    {
                        queryRegisteredServicesResponse.called && queryRegisteredServicesResponse.loading ?
                            <Spinner /> :
                            <RegisteredServices services={registeredServices} callback={synchronize} />
                    }
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 text-right">
                    {
                        submitRequestResponse.called && submitRequestResponse.loading ?
                            <Spinner /> :
                            registeredServices.length > 0 &&
                            <button type="submit" className="btn btn-primary" onClick={submitForVerification}>
                                Submit for verification
                            </button>
                    }
                </div>
            </div>
        </div>
    )
}
