import {
    Company,
    Facility,
    FacilityServices,
    MedicalRegistrations,
    ProfileInfo,
    Qualifications,
    Services
} from "@pages/service-providers-registration/components/profile";

import RegistrationNav from "@pages/service-providers-registration/components/RegistrationNav";
import TopNav from "@pages/service-providers-registration/components/Topnav";
import { withAuth } from "@pages/auth/withAuth";

function Register({user}: any) {
    return (
        <div className="account-pages mt-5 mb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="card">
                            <TopNav user={user} />
                            {
                                user.provider_profile.is_submitted && (
                                    <div className="alert alert-success alert-dismissible bg-success text-white border-0 fade show topnav-logo" role="alert">
                                        <strong>Request submitted, please wait for verification. </strong>
                                    </div>
                                )
                            }
                            <div className="card-body p-4">
                                <div className="row">
                                    <RegistrationNav user={user} />

                                    <div className="col-sm-9">
                                        <div className="tab-content" id="v-pills-tabContent">
                                            <ProfileInfo user={user}/>
                                            {user.provider_profile.account_category_type === 'individual' && <Qualifications /> }
                                            {user.provider_profile.account_category_type === 'company' && <Company /> }
                                            {user.provider_profile.account_category_type === 'individual' && <MedicalRegistrations /> }
                                            <Services user={user} />
                                            {user.provider_profile.account_category_type === 'facility' && <Facility /> }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuth(Register);
