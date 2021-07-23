import  React from 'react'
import {InertiaLink} from "@inertiajs/inertia-react";
import Icon from "@/Shared/Icon";

export default ({link, text }) => {
    const isActive = route().current(link + '*');


    return (
        <li className={` ${ isActive? 'mm-active': ''}`}>
            <InertiaLink href={route(link)} className={` ${ isActive? 'active': ''}`}>
                {text}
            </InertiaLink>
        </li>
    );
};
