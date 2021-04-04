import React from 'react'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
export default function Languages() {

    const {selectable_locale, locale } = usePage().props

    return (
        <li className="dropdown notification-list topbar-dropdown d-none d-lg-block">
            <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" id="topbar-languagedrop" href="#"
               role="button" aria-haspopup="true" aria-expanded="false">
                <img src="assets/images/flags/us.jpg" alt="user-image" className="mr-1" height="12"/> <span
                    className="align-middle">English</span> <i className="mdi mdi-chevron-down align-middle"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu"
                 aria-labelledby="topbar-languagedrop">
                {selectable_locale.map((lang)=>(
                    <InertiaLink href={lang.url} className="dropdown-item notify-item" key={lang.code}>
                        <img src={lang.flag} alt="user-image" className="mr-1"  width={lang.flag_width} height={12} />
                        <span className="align-middle">{lang.name}</span>
                    </InertiaLink>
                ))}
            </div>
        </li>

    )
}
