import React, {useEffect, useState} from "react";

import Heading from '@/Pages/ServiceProviderProfileCompletion/components/profile/Heading'
import { REQUEST_SERVICE_MODAL_ID } from '@/pages/Utilities/Constants'
import RegisteredServices from "@/Pages/ServiceProviderProfileCompletion/components/profile/RegisteredServices";
import RequestServiceModal from '@/Pages/ServiceProviderProfileCompletion/components/profile/RequestServiceModal'
import UnregisteredServices from "@/Pages/ServiceProviderProfileCompletion/components/profile/UnregisteredServices";

export default function Services({user, facilities, all_services, registeredServices}) {
    const [services, setServices] = useState([])
    // const [registeredServices, setRegisteredServices] = useState([])
    // const [selectedFacility, setSelectedFacility] = useState( )


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
                              facilities &&  facilities.map(facility =>
                                <option value={facility.id}
                                        // onSelect={() => setSelectedFacility(facility)}
                                >
                                    {facility.name}</option>
                                )
                            }
                        </select>
                    </>
                )
            }

            <Heading
                // title={`Request Service for ${selectedFacility.name}`}
                modalID={REQUEST_SERVICE_MODAL_ID}
                buttonText="Request New Service To Registered"
                search={searchQualifications}
                renderModal={renderAddSubcategoryModal}
                showSearch={false}
            />

            <div className="row">
                <div className="col-6">
                    {

                            <UnregisteredServices services={all_services}  />
                    }
                </div>
                <div className="col-6">
                    {

                            <RegisteredServices services={registeredServices} />
                    }
                </div>
            </div>
        </div>
    )
}
