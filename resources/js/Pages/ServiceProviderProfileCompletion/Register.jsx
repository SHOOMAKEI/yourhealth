import React from "react";
import {
    Company,
    Facility,
    FacilityServices,
    MedicalRegistrations,
    ProfileInfo,
    Qualifications,
    Services
} from "@/Pages/ServiceProviderProfileCompletion/components/profile";

import RegistrationNav from "@/Pages/ServiceProviderProfileCompletion/components/RegistrationNav";
import TopNav from "@/Pages/ServiceProviderProfileCompletion/components/Topnav";
import {usePage} from "@inertiajs/inertia-react";
import ProfileStatuses from "@/Pages/ServiceProviderProfileCompletion/components/profile/ProfileStatuses";



function Register() {
    const {user,
        provider_sub_levels,
        qualifications,
        company,
        facilities,
        medical_registrations,
        all_services,
        provider_services,
        facility_services,
        services_categories,
        full_profile,
    } = usePage().props
    return (
        <div className="account-pages mt-5 mb-5">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="card">
                            <TopNav user={user} />
                            {
                                user.provider_profile.is_submitted && (
                                    <div className=" alert-success alert-dismissible bg-primary text-white border-0 fade show topnav-logo py-2 px-2" role="alert">
                                        <strong>Your Profile was submitted Please wait while we are verifying your profile. we will notify you via email when its ready! </strong>
                                    </div>
                                )
                            }
                            <div className="card-body p-4">
                                <div className="row">
                                    <RegistrationNav user={user} />

                                    <div className="col-sm-9">
                                        <div className="tab-content" id="v-pills-tabContent">
                                            <ProfileInfo user={user } provider_sub_levels={provider_sub_levels}/>
                                            {user.provider_profile.account_category_type === 'individual'
                                                && <Qualifications qualifications={qualifications} /> }
                                            {user.provider_profile.account_category_type === 'company'
                                                && <Company company={company} /> }
                                             <MedicalRegistrations medical_registrations={medical_registrations} facilities={facilities?facilities:{}}
                                                                   user={user} services={services_categories} />
                                            <Services facilities={facilities?facilities:{}}
                                                      user={user} all_services={all_services}
                                                      registeredServices={user.provider_profile.account_category_type === 'individual'?provider_services:facility_services}/>
                                            <ProfileStatuses profile_status={full_profile} user={user}/>
                                            {(user.provider_profile.account_category_type === 'facility' ||
                                                user.provider_profile.account_category_type === 'company') &&
                                            <Facility facilities={facilities} provider_sub_levels={provider_sub_levels}/> }
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

export default Register;
