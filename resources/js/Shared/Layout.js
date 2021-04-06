import React, {useState} from 'react';
import { Inertia } from '@inertiajs/inertia';
import MainMenu from '@/Shared/MainMenu';
import FlashMessages from '@/Shared/FlashMessages';
import TopHeader from '@/Shared/TopHeader';
import BottomHeader from '@/Shared/BottomHeader';
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import TopNav from "@/Pages/Utilities/topnav";
import SideNav from "@/Pages/Utilities/sidenav";


export default ({ children }) => {

    const { user } = usePage()
    const [sending, setSending] = useState(false);


    // function handleSubmit(e) {
    //   e.preventDefault();
    //   setSending(true);
    //   Inertia.post(route('logout'), values).then(() => {
    //     setSending(false);
    //   });
    // }

  return (
      <React.Fragment>
          <TopNav/>
          <div className="container-fluid">
              <div className="wrapper">
                  <SideNav/>
                  <div className="content-page">
                      <div className="content">
                          { children }
                      </div>
                  </div>
              </div>
          </div>
      </React.Fragment>
  );
}
