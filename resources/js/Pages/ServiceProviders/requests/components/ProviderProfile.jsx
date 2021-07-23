import React from 'react'
import Company from './profile/Company'
import FacilityServices from './profile/FacilityServices'
import MedicalRegistrations from './profile/MedicalRegistrations'
import ProfileInfo from './profile/ProfileInfo'
import Qualifications from './profile/Qualifications'
import Services from './profile/Services'

import ProfileNav from "./ProfileNav";
import Facility from './profile/Facility'
import Verification from "@/Pages/ServiceProviders/requests/components/profile/Verification";
import {usePage} from "@inertiajs/inertia-react";
import Layout from "@/Shared/Layout";
import ServiceProvider from "@/Pages/ServiceProviders/requests/components/ServiceProvider";
//import {ServiceProviderValues} from "@/pages/serviceProviders/requests/components/ServiceProvider";

 function ProviderProfile() {
    const {provider} = usePage().props

    return (
        <div>
            <div className="col-lg-12 pt-4" >
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title pt-2" id="scrollableModalTitle">{`${provider?.username}'s profile`}</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <ProfileNav provider={provider} />

                            <div className="col-sm-10">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <ProfileInfo provider={provider} />
                                    {
                                        provider.account_category_type === 'individual' && (
                                            <>
                                                <Qualifications provider={provider} />
                                                <MedicalRegistrations  provider={provider}  />
                                                <Services provider={provider}  />
                                            </>
                                        )
                                    }
                                    {
                                        provider.account_category_type === 'company' && (
                                            <>
                                                <Company provider={provider} />
                                                <Facility provider={provider} />
                                                <MedicalRegistrations  provider={provider}  />
                                                <FacilityServices  provider={provider} />
                                            </>
                                        )
                                    }
                                    {
                                        provider.account_category_type === 'facility' && (
                                            <>
                                                <Facility provider={provider} />
                                                <MedicalRegistrations  provider={provider}  />
                                                <FacilityServices provider={provider} />
                                            </>
                                        )
                                    }
                                    <Verification provider={provider}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProviderProfile.layout = page => <Layout children={page} />;

export default ProviderProfile;
