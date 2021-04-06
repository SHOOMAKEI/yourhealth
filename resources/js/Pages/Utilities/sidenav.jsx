import React, { useEffect } from 'react'
import {InertiaLink} from "@inertiajs/inertia-react";

export default function Sidebar() {
    // const [queryAthUser, {loading, errors, data, called}] = useApi({query: QUERY_AUTH_USER})

    // useEffect(() => {
    //     // queryAthUser({})
    // }, [])

    return (
        <div className="left-side-menu left-side-menu-detached">

            <div className="leftbar-user">
                <a href="#">
                    <img src="/images/user.png" alt="user-image" height="42" className="rounded-circle shadow-sm" />
                    <span className="leftbar-user-name">{'Loading...'}</span>
                </a>
            </div>

            <ul className="metismenu side-nav">

                <li className="side-nav-title side-nav-item">Navigation</li>

                <li className="side-nav-item">
                    <a href="#" className="side-nav-link">
                        <i className="uil-home-alt"></i>
                        <span> Home </span>
                    </a>
                </li>

                <li className="side-nav-title side-nav-item">Modules</li>

                <li className="side-nav-item">
                    <a href="#" className="side-nav-link">
                        <i className="uil-store"></i>
                        <span> Services </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <ul className="side-nav-second-level" aria-expanded="false">
                        <li>
                            <InertiaLink href="/services/categories/manage">
                                <a>Manage Services</a>
                            </InertiaLink>
                        </li>
                        <li>
                            <InertiaLink href="/services/requested/manage">
                                <a>New Services requests</a>
                            </InertiaLink>
                        </li>
                        <li>
                            <InertiaLink href="/services/packages/manage">
                                <a>Packages</a>
                            </InertiaLink>
                        </li>
                    </ul>
                </li>
                <li className="side-nav-item">
                    <a href="#" className="side-nav-link">
                        <i className="uil-constructor"></i>
                        <span> Service Providers </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <ul className="side-nav-second-level" aria-expanded="false">
                        <li>
                            <InertiaLink href="/service-providers/requests/providers">
                                <a>Registration Requests</a>
                            </InertiaLink>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="clearfix"></div>

        </div>
    )
}
