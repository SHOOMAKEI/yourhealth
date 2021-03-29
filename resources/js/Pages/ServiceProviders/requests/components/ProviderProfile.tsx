import {Company, Facility, FacilityServices, MedicalRegistrations, ProfileInfo, Qualifications, Services} from '@pages/service-providers/requests/components/profile'

import {ProfileNav} from "@pages/service-providers/requests/components";
import {ServiceProviderValues} from "@pages/service-providers/requests/components/ServiceProvider";

interface ModalProps {
    modalId: string;
    provider: ServiceProviderValues;
}

export default function ProviderProfile({modalId, provider}:ModalProps) {
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