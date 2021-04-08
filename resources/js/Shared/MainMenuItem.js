import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Icon from '@/Shared/Icon';

export default ({ icon, link, text }) => {
  const isActive = route().current(link + '*');


  return (
    <li className={`side-nav-item ${ isActive? 'mm-active': ''}`}>
      <InertiaLink href={route(link)} className={`side-nav-link ${ isActive? 'active': ''}`}>
        <Icon className={icon} />
        <span >{text}</span>
      </InertiaLink>
    </li>
  );
};
