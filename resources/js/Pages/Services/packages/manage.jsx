import Framework from '@/Pages/framework';
import React from 'react';
import Memberships from "@/Pages/Services/packages/Memberships";
import Packages from "@/Pages/Services/packages/Packages";
import Layout from "@/Shared/Layout";
import {usePage} from "@inertiajs/inertia-react";

const ManagePackages = () => {
    const {memberships} = usePage().props

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
                        <div className="tab-pane fade" id="v-pills-packages" role="tabpanel"
                             aria-labelledby="v-pills-packages-tab">
                            <p className="mb-0">
                                <Packages />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )


}
ManagePackages.layout = page => <Layout children={page} />;
export default ManagePackages;
