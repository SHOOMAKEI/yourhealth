import React, {useEffect, useState} from "react";

import Heading from '@/Pages/ServiceProviderProfileCompletion/components/profile/Heading'
import { REQUEST_SERVICE_MODAL_ID } from '@/Pages/Utilities/Constants'
import RegisteredServices from "@/Pages/ServiceProviderProfileCompletion/components/profile/RegisteredServices";
import RequestServiceModal from '@/Pages/ServiceProviderProfileCompletion/components/profile/RequestServiceModal'
import UnregisteredServices from "@/Pages/ServiceProviderProfileCompletion/components/profile/UnregisteredServices";
import SelectInput from "@/Shared/SelectInput";
import {usePage} from "@inertiajs/inertia-react";

export default function Services({user, facilities, all_services, registeredServices}) {
    const {errors, status, alertType} = usePage().props
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


   registeredServices &&
   useEffect(()=>(
        registeredServices && registeredServices.map(service => {
            service.id == values.facility? setServices([...service.data]):null
        })
    ), [values?.facility])



    return (
        <div className="tab-pane fade" id="v-pills-services" role="tabpanel"
             aria-labelledby="v-pills-services-tab">
            {/*{console.log(registeredServices)}*/}
            {

               ( user.provider_profile.account_category_type === 'company' ||
                user.provider_profile.account_category_type === 'facility')
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

                            <UnregisteredServices services={all_services}  user={user} facility={values.facility}/>
                    }
                </div>
                <div className="col-6">
                    {

                            <RegisteredServices services={
                                user.provider_profile.account_category_type === 'company' ||
                                user.provider_profile.account_category_type === 'facility'?services:registeredServices
                            } user={user} facility={values.facility}/>
                    }
                </div>
            </div>
        </div>
    )
}
