import React from 'react'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
export default function Languages() {

    const {selectable_locale, locale } = usePage().props

    return (
        <li className="dropdown notification-list topbar-dropdown d-none d-lg-block">

            <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu" aria-labelledby="topbar-languagedrop">
                {selectable_locale.map((lang)=>(
                    <InertiaLink href={lang.url} className="dropdown-item notify-item">
                        <img src={lang.flag} alt="user-image" className="mr-1"  width={lang.flag_width} /> <span className="align-middle">{lang.name}</span>
                    </InertiaLink>
                ))}

            </div>
        </li>
    )
}
