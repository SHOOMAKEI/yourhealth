import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Icon from '@/Shared/Icon';

export default ({ icon, link, text, children }) => {
  let isActive = route().current(link + '*');

  function handleOnClick(e) {

    e.preventDefault()

    isActive = !isActive

    // console.log(isActive)
  }

  return (
    <li className={`nav-item has-submenu ${isActive? 'drop-down': ''}`} onClick={handleOnClick}>
      <InertiaLink href="#" className="nav-link"  >
        <Icon className={icon} />
        <span >{text}</span>
      </InertiaLink>
      {children}
    </li>
  );
};
