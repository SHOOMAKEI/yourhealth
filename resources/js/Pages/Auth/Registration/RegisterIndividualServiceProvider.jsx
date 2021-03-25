import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import IndividualRegister from "../components/IndividualRegistration";

export default function RegisterIndividualServiceProvider() {
    return (
        <div>
            <div className="account-pages mt-5 mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">

                            <div className="card">
                                <div className="card-body p-4">
                                    <IndividualRegister />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

