import { ServiceProviderValues } from ".";

interface Props {
    provider: ServiceProviderValues;
}


export default function ProfileNav({provider}:Props) {
    return (
        <div className="col-sm-2 mb-2 mb-sm-0">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                 aria-orientation="vertical">
                <a className="nav-link active show mb-1" id="v-pills-home-tab" data-toggle="pill"
                   href="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                   aria-selected="true">
                    <i className="mdi mdi-home-variant d-md-none d-block"/>
                    <span className="d-none d-md-block">Profile Information</span>
                </a>
                {
                    provider.account_category_type === 'individual' && (
                        <>
                            <a className="nav-link mb-1" id="v-pills-profile-tab" data-toggle="pill"
                                href="#v-pills-qualifications" role="tab" aria-controls="v-pills-qualifications"
                                aria-selected="false">
                                <i className="mdi mdi-account-circle d-md-none d-block"/>
                                <span className="d-none d-md-block">Education Qualifications</span>
                            </a>
                            <a className="nav-link mb-1" id="v-pills-settings-tab" data-toggle="pill"
                                href="#v-pills-medical-registration" role="tab" aria-controls="v-pills-medical-registration"
                                aria-selected="false">
                                <i className="mdi mdi-settings-outline d-md-none d-block"/>
                                <span className="d-none d-md-block">Medical Registration</span>
                            </a>
                            <a className="nav-link mb-1" id="v-pills-settings-tab" data-toggle="pill"
                            href="#v-pills-services" role="tab" aria-controls="v-pills-services"
                            aria-selected="false">
                                <i className="mdi mdi-settings-outline d-md-none d-block"/>
                                <span className="d-none d-md-block">Services</span>
                            </a>
                        </>
                    )
                }

                {
                    provider.account_category_type === 'company' && (
                        <>
                            <a className="nav-link mb-1" id="v-pills-settings-tab" data-toggle="pill"
                            href="#v-pills-company" role="tab" aria-controls="v-pills-company"
                            aria-selected="false">
                                <i className="mdi mdi-settings-outline d-md-none d-block"/>
                                <span className="d-none d-md-block">Company Information</span>
                            </a>
                            <a className="nav-link mb-1" id="v-pills-settings-tab" data-toggle="pill"
                            href="#v-pills-facility" role="tab" aria-controls="v-pills-facility"
                            aria-selected="false">
                                <i className="mdi mdi-settings-outline d-md-none d-block"/>
                                <span className="d-none d-md-block">Facility Information</span>
                            </a>
                            <a className="nav-link mb-1" id="v-pills-settings-tab" data-toggle="pill"
                            href="#v-pills-facility-services" role="tab" aria-controls="v-pills-facility-services"
                            aria-selected="false">
                                <i className="mdi mdi-settings-outline d-md-none d-block"/>
                                <span className="d-none d-md-block">Facility Services</span>
                            </a>
                        </>
                    )
                }

                {
                    provider.account_category_type === 'company' && (
                        <>
                            <a className="nav-link mb-1" id="v-pills-settings-tab" data-toggle="pill"
                            href="#v-pills-facility" role="tab" aria-controls="v-pills-facility"
                            aria-selected="false">
                                <i className="mdi mdi-settings-outline d-md-none d-block"/>
                                <span className="d-none d-md-block">Facility Information</span>
                            </a>
                            <a className="nav-link mb-1" id="v-pills-settings-tab" data-toggle="pill"
                            href="#v-pills-facility-services" role="tab" aria-controls="v-pills-facility-services"
                            aria-selected="false">
                                <i className="mdi mdi-settings-outline d-md-none d-block"/>
                                <span className="d-none d-md-block">Facility Services</span>
                            </a>
                        </>
                    )
                }
                
                
            </div>
        </div>
    )
}