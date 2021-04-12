
import    Company      from '@/Pages/ServiceProviders/requests/components/profile/Company'
import  FacilityServices from '@/Pages/ServiceProviders/requests/components/profile/FacilityServices'
import   MedicalRegistrations from '@/Pages/ServiceProviders/requests/components/profile/MedicalRegistrations'
import   ProfileInfo from '@/Pages/ServiceProviders/requests/components/profile/ProfileInfo'
import  Qualifications from '@/Pages/ServiceProviders/requests/components/profile/Qualifications'
import  Services from '@/Pages/ServiceProviders/requests/components/profile/Services'

import ProfileNav from "./ProfileNav";
//import {ServiceProviderValues} from "@/pages/serviceProviders/requests/components/ServiceProvider";

export default function ProviderProfile({modalId, provider}) {
    return (
        <div className="modal fade" id={modalId} data-backdrop="static" tabIndex={-1} role="dialog"
             aria-labelledby="scrollableModalTitle" aria-hidden="true">
            <div className="modal-dialog modal-full-width" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="scrollableModalTitle">{`${provider?.username}'s profile`}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <ProfileNav provider={provider} />

                            <div className="col-sm-10">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <ProfileInfo provider={provider} />
                                    {
                                        provider.account_category_type === 'individual' && (
                                            <>
                                                <Qualifications />
                                                <MedicalRegistrations />
                                                <Services />
                                            </>
                                        )
                                    }
                                    {
                                        provider.account_category_type === 'company' && (
                                            <>
                                                <Company />
                                                <Facility />
                                                <FacilityServices />
                                            </>
                                        )
                                    }
                                    {
                                        provider.account_category_type === 'facility' && (
                                            <>
                                                <Facility />
                                                <FacilityServices />
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
