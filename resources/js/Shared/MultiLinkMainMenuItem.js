import React, {useState} from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Icon from '@/Shared/Icon';


export default ({ icon, link, text, children }) => {
    const [isActive, setIsActive] = useState(false)
  let activeLink = route().current(link + '*');

  function handleOnClick(e) {

    e.preventDefault()

    setIsActive(!isActive)

    // console.log(isActive)
  }

  return (
    <li className={`side-nav-item`} aria-expanded={isActive? "true": "false"} onClick={handleOnClick}>
      <a href="#" className="side-nav-link" onClick={handleOnClick} >
        <Icon className={icon} />
        <span >{text}</span>
          <span className="menu-arrow" style={isActive ? {transform: `rotate(90deg)`
}:{}}/>
      </a>
        <ul className={`side-nav-second-level mm-collapse ${isActive? "mm-show": ""}`} aria-expanded="false" style={isActive? {}: {height: 0 + 'px'}}>
            {children}
        </ul>
    </li>
  );
};
