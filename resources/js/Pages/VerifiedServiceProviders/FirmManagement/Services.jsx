import React, {useEffect, useState} from "react";

import Heading from '@/Pages/ServiceProviderProfileCompletion/components/profile/Heading'
import { REQUEST_SERVICE_MODAL_ID } from '@/Pages/Utilities/Constants'
import RegisteredServices from "@/Pages/ServiceProviderProfileCompletion/components/profile/RegisteredServices";
import RequestServiceModal from '@/Pages/ServiceProviderProfileCompletion/components/profile/RequestServiceModal'
import UnregisteredServices from "@/Pages/ServiceProviderProfileCompletion/components/profile/UnregisteredServices";
import SelectInput from "@/Shared/SelectInput";
import {usePage} from "@inertiajs/inertia-react";
import Layout from "@/Shared/Layout";
import Facility from "@/Pages/VerifiedServiceProviders/FirmManagement/Facility";
import PageTitle from "@/Shared/PageTitle";

const Services = () =>{
    const {errors, status, alertType, auth, facilities, all_services, registeredServices} = usePage().props
    const [services, setServices] = useState([])
    const [values, setValues] = useState({ facility: facilities[0]?.id})

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setValues(values => ({
            ...values,
            [key]: value
        }));
    }

    function searchQualifications() {

    }

    function renderAddSubcategoryModal() {
        return <RequestServiceModal modalID={REQUEST_SERVICE_MODAL_ID} operation="add" />
    }



   useEffect(()=>{
          registeredServices?.map(sev => sev.id == values.facility?setServices(sev.data):null)

   }, [values?.facility])



    return (
        <>
            <PageTitle title="My Facilities Services"/>
            <div className="card card-body"
                 aria-labelledby="v-pills-services-tab">
                {/*{console.log(registeredServices)}*/}
                {

                    ( auth.user.provider_profile.account_category_type === 'company' ||
                        auth.user.provider_profile.account_category_type === 'facility')
                    && (
                        <>
                            <h4>Select Facility</h4>
                            <SelectInput
                                name="facility"
                                type="text"
                                errors={errors.facility}
                                value={values.facility}
                                onChange={handleChange}
                            >
                                {facilities.map((facility)=>(
                                    <option value={facility.id} key={facility.id}>{facility.name}</option>
                                ))}
                            </SelectInput>
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

                            <UnregisteredServices services={all_services}  user={auth.user} facility={values.facility}/>
                        }
                    </div>
                    <div className="col-6">
                        {

                            <RegisteredServices services={
                                (auth.user.provider_profile.account_category_type === 'company' ||
                                    auth.user.provider_profile.account_category_type === 'facility')?services:registeredServices
                            } user={auth.user} facility={values.facility}/>
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

Services.layout = page => <Layout children={page} />;

export default Services;
