import React from 'react'
import {InertiaLink} from "@inertiajs/inertia-react";


export default function ActiveLink({refLink, title}) {
    const {asPath} = true;

    return (
        <li className={`${asPath === refLink ? "mm-active" : null}`}>
            <InertiaLink href={refLink}>
                <a className={`${asPath === refLink ? "mm-active" : null}`}>{title}</a>
            </InertiaLink>
        </li>
    )
}
