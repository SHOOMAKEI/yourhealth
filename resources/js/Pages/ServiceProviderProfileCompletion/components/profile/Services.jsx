import { QUERY_REGISTERED_SERVICES, QUERY_SERVICES } from '@pages/utils/Query';
import {useEffect, useState} from "react";

import Heading from '@pages/service-providers-registration/components/profile/Heading'
import { REQUEST_SERVICE_MODAL_ID } from '@pages/constants'
import RegisteredServices from "@pages/service-providers-registration/components/profile/RegisteredServices";
import RequestServiceModal from '@pages/service-providers-registration/components/profile/RequestServiceModal'
import { SUBMIT_FOR_VERIFICATION } from '@pages/utils/Mutations';
import Spinner from "@pages/auth/components/Spinner";
import UnregisteredServices from "@pages/service-providers-registration/components/profile/UnregisteredServices";
import { useApi } from '@pages/utils/ApolloClient';

const facilities = [
    {id: 1, name: 'Facility one'}, 
    {id: 2, name: 'Facility Two'},
    {id: 3, name: 'Facility Three'}
]

interface Props {
    user: any
}

export default function Services({user}: Props) {
    const [queryServices, queryServicesResponse] = useApi({query: QUERY_SERVICES});
    const [queryRegisteredServices, queryRegisteredServicesResponse] = useApi({query: QUERY_REGISTERED_SERVICES});
    const [submitRequest, submitRequestResponse] = useApi({query: SUBMIT_FOR_VERIFICATION});
    const [services, setServices] = useState([])
    const [registeredServices, setRegisteredServices] = useState([])
    const [selectedFacility, setSelectedFacility] = useState(facilities[0])

    useEffect(() => {
        queryServices({})
        queryRegisteredServices({})
    }, [])

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