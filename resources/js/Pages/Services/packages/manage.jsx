import Framework from '@/Pages/framework';
import React from 'react';
import Memberships from "@/Pages/Services/packages/Memberships";
import Packages from "@/Pages/Services/packages/Packages";
import Layout from "@/Shared/Layout";
import {usePage} from "@inertiajs/inertia-react";
import PackageFeature from "@/Pages/Services/packages/PackageFeature";
import PackageMemberRange from "@/Pages/Services/packages/PackageMemberRange";

const ManagePackages = () => {
    const {memberships, packages, ranges, features, services} = usePage().props

        return (
            <div className="row" style={{paddingTop: 30 + 'px'}}>
                <div className="col-sm-2 mb-2 mb-sm-0">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                         aria-orientation="vertical">
                        <a className="nav-link active show my-2" id="v-pills-home-tab" data-toggle="pill"
                           href={"#v-pills-memberships"} role="tab" aria-controls="v-pills-memberships"
                           aria-selected="true">
                            <i className="mdi mdi-home-variant d-md-none d-block"/>
                            <span className="d-none d-md-block">Memberships</span>
                        </a>
                        <a className="nav-link" id="v-pills-packages-feature-tab" data-toggle="pill" href={"#v-pills-packages-feature"}
                           role="tab" aria-controls="v-pills-packages-feature"
                           aria-selected="false">
                            <i className="mdi mdi-account-circle d-md-none d-block"/>
                            <span className="d-none d-md-block">Package Features</span>
                        </a>
                        <a className="nav-link" id="v-pills-packages-member-range-tab" data-toggle="pill" href={"#v-pills-packages-member-range"}
                           role="tab" aria-controls="v-pills-packages-member-range"
                           aria-selected="false">
                            <i className="mdi mdi-account-circle d-md-none d-block"/>
                            <span className="d-none d-md-block">Member Range</span>
                        </a>
                        <a className="nav-link" id="v-pills-packages-tab" data-toggle="pill" href={"#v-pills-packages"}
                           role="tab" aria-controls="v-pills-packages"
                           aria-selected="false">
                            <i className="mdi mdi-account-circle d-md-none d-block"/>
                            <span className="d-none d-md-block">Packages</span>
                        </a>
                    </div>
                </div>

                <div className="col-sm-10">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade active show" id="v-pills-memberships" role="tabpanel"
                             aria-labelledby="v-pills-memberships-tab">
                            <Memberships memberships={memberships} />
                        </div>
                        <div className="tab-pane fade" id="v-pills-packages-feature" role="tabpanel"
                             aria-labelledby="v-pills-packages-feature-tab">
                            <PackageFeature packages={features} services={services} />
                        </div>
                        <div className="tab-pane fade" id="v-pills-packages-member-range" role="tabpanel"
                             aria-labelledby="v-pills-packages-member-range-tab">
                            <PackageMemberRange packages={ranges}  />
                        </div>
                        <div className="tab-pane fade" id="v-pills-packages" role="tabpanel"
                             aria-labelledby="v-pills-packages-tab">
                                <Packages packages={packages} memberships={memberships} features={features} ranges={ranges} />
                        </div>
                    </div>
                </div>
            </div>
        )


}
ManagePackages.layout = page => <Layout children={page} />;
export default ManagePackages;
