import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import CompanyRegister from "../components/CompanyRegistration";

export default function RegisterCompany() {
    return (
        <div>
            <div className="account-pages mt-5 mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card">
                                <div className="card-body p-4">
                                    <CompanyRegister />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
