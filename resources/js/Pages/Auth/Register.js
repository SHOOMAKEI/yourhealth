import React from 'react';
import CompanyRegister from "./components/CompanyRegistration";
import FacilityRegister from "./components/FacilityRegistration";
import IndividualRegister from "./components/IndividualRegistration";

export default function Register() {
    return (
        <div>
            <div className="account-pages mt-5 mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-sm-3 mb-2 mb-sm-0">
                                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                                 aria-orientation="vertical">
                                                <a className="nav-link active show mb-2" id="v-pills-individual-tab"
                                                   data-toggle="pill" href="#v-pills-individual" role="tab"
                                                   aria-controls="v-pills-individual"
                                                   aria-selected="true">
                                                    <i className="mdi mdi-home-variant d-md-none d-block"></i>
                                                    <span className="d-none d-md-block">Individual</span>
                                                </a>
                                                <a className="nav-link mb-2" id="v-pills-facility-tab" data-toggle="pill"
                                                   href="#v-pills-facility" role="tab" aria-controls="v-pills-facility"
                                                   aria-selected="false">
                                                    <i className="mdi mdi-account-circle d-md-none d-block"></i>
                                                    <span className="d-none d-md-block">Facility</span>
                                                </a>
                                                <a className="nav-link mb-2" id="v-pills-company-tab" data-toggle="pill"
                                                   href="#v-pills-company" role="tab" aria-controls="v-pills-company"
                                                   aria-selected="false">
                                                    <i className="mdi mdi-settings-outline d-md-none d-block"></i>
                                                    <span className="d-none d-md-block">Company</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-sm-9">
                                            <div className="tab-content ml-3" id="v-pills-tabContent">
                                                <div className="tab-pane fade active show" id="v-pills-individual"
                                                     role="tabpanel" aria-labelledby="v-pills-individual-tab">
                                                    <IndividualRegister />
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-facility" role="tabpanel"
                                                     aria-labelledby="v-pills-facility-tab">
                                                   {/* <FacilityRegister /> */}
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-company" role="tabpanel"
                                                     aria-labelledby="v-pills-company-tab">
                                                    <CompanyRegister />
                                                </div>
                                            </div>
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

