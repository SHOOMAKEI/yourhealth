import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg py-lg-3 navbar-dark">
            <div className="container">

                <a href="index.html" className="navbar-brand mr-lg-5">
                    <img src="assets/images/logo.png" alt="" className="logo-dark" height="18" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">

                    <ul className="navbar-nav mr-auto align-items-center">
                        <li className="nav-item mx-lg-1">
                            <a className="nav-link active" href="">Home</a>
                        </li>
                        <li className="nav-item mx-lg-1">
                            <a className="nav-link" href="">Features</a>
                        </li>
                        <li className="nav-item mx-lg-1">
                            <a className="nav-link" href="">Pricing</a>
                        </li>
                        <li className="nav-item mx-lg-1">
                            <a className="nav-link" href="">FAQs</a>
                        </li>
                        <li className="nav-item mx-lg-1">
                            <a className="nav-link" href="">Clients</a>
                        </li>
                        <li className="nav-item mx-lg-1">
                            <a className="nav-link" href="">Contact</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto align-items-center">
                        <li className="nav-item mr-0">
                            <InertiaLink href={route("register")}>
                                <a className="btn btn-success">Register</a>
                            </InertiaLink>
                        </li>
                        <li className="nav-item mr-0">
                            <InertiaLink href={route("login")}>
                                <a className="btn btn-link text-white">Login</a>
                            </InertiaLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}