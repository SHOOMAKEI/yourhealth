import React from 'react'

export default function ActiveMainLink({title, iconName, compString}) {
    const {asPath} = true;

    return (
        <a href="javascript: void(0);" className={`side-nav-link ${asPath.includes(compString) && 'active'}`}>
            <i className={iconName} />
            <span> {title} </span>
            <span className="menu-arrow" />
        </a>
    )
}
