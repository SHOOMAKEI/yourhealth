import React from 'react';
import MainMenuItem from '@/Shared/MainMenuItem';
import MultiLinkMainMenuItem from '@/Shared/MultiLinkMainMenuItem';
import MultiLinkMenuItem from "@/Shared/MultiLinkMenuItem";

export default () => {
  return (
    <ul className="metismenu side-nav mm-show">
      <li className="side-nav-title side-nav-item">Navigation</li>
      <MainMenuItem text="Home" link="admin.dashboard" icon="uil-home-alt" />
      <li className="side-nav-title side-nav-item">Modules</li>
        <MultiLinkMainMenuItem icon="uil-store" text="Services">
            <MultiLinkMenuItem  text="Manage Services" link="admin.dashboard"/>
            <MultiLinkMenuItem  text="Requested Services" link="admin.dashboard"/>
            <MultiLinkMenuItem  text="Packages" link="admin.dashboard"/>
        </MultiLinkMainMenuItem>
        <MultiLinkMainMenuItem icon="uil-constructor" text="Service Provider">
            <MultiLinkMenuItem  text="Verification Requests" link="admin.dashboard"/>
        </MultiLinkMainMenuItem>
    </ul>

  );
};

