import React from 'react';
import MainMenuItem from '@/Shared/MainMenuItem';
import MultiLinkMainMenuItem from '@/Shared/MultiLinkMainMenuItem';

export default () => {
  return (
    <ul className="nav aside-nav">
      <MainMenuItem text="Dashboard" link="dashboard" icon="icon-grid" />
      <MainMenuItem text="Store Configuration" link="stores.index" icon="con-equalizer" />
      <MainMenuItem text="Product" link="product.index" icon="icon-bag" />
      {/*   */}
    </ul>
  );
};

