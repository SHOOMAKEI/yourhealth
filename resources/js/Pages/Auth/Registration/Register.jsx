import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';


export default function Register() {
    return (
        <div>
            <div className="account-pages mt-5 mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">

                            <div className="text-center">
                                <h3 className="mb-2">Our Registration Categories</h3>
                                <p className="text-muted w-50 m-auto">
                                    We have plans and prices that fit your business perfectly. Make your client site a success with our products.
                                </p>
                            </div>

                            <div className="row mt-sm-5 mt-3 mb-3">
                                <div className="col-md-4">
                                    <div className="card card-pricing">
                                        <div className="card-body text-center">
                                            <p className="card-pricing-plan-name font-weight-bold text-uppercase">Individual Category</p>
                                            <i className="card-pricing-icon dripicons-user text-primary"></i>
                                            <ul className="card-pricing-features">
                                                <li>
                                                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
                                                    and typesetting industry Lorem Ipsum has been the industry's standard dummy
                                                    text ever since the 1500s.
                                                </li>
                                            </ul>
                                            <InertiaLink href={route('register.individual')}>
                                                <a className="btn btn-primary mt-4 mb-2">Choose Category</a>
                                            </InertiaLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card card-pricing card-pricing-recommended">
                                        <div className="card-body text-center">
                                            <p className="card-pricing-plan-name font-weight-bold text-uppercase">Facility Category</p>
                                            <i className="card-pricing-icon dripicons-briefcase text-primary"></i>
                                            <ul className="card-pricing-features">
                                                <li>
                                                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
                                                    and typesetting industry Lorem Ipsum has been the industry's standard dummy
                                                    text ever since the 1500s.
                                                </li>
                                            </ul>
                                            <InertiaLink href={route('register.facility')}>
                                                <a className="btn btn-primary mt-4 mb-2">Choose Category</a>
                                            </InertiaLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card card-pricing">
                                        <div className="card-body text-center">
                                            <p className="card-pricing-plan-name font-weight-bold text-uppercase">Company category</p>
                                            <i className="card-pricing-icon dripicons-store text-primary"></i>
                                            <ul className="card-pricing-features">
                                                <li>
                                                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
                                                    and typesetting industry Lorem Ipsum has been the industry's standard dummy
                                                    text ever since the 1500s.
                                                </li>
                                            </ul>
                                            <InertiaLink href={route('register.company')}>
                                                <a className="btn btn-primary mt-4 mb-2">Choose Category</a>
                                            </InertiaLink>
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
