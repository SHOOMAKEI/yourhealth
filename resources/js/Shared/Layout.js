import React, {useEffect, useState} from 'react';
import { Inertia } from '@inertiajs/inertia';
import MainMenu from '@/Shared/MainMenu';
import FlashMessages from '@/Shared/FlashMessages';
import TopHeader from '@/Shared/TopHeader';
import BottomHeader from '@/Shared/BottomHeader';
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import TopNav from "@/Pages/Utilities/topnav";
import SideNav from "@/Pages/Utilities/sidenav";


export default ({ children }) => {

    const { user, status, errors, app_name } = usePage().props
    const [sending, setSending] = useState(false);

  return (
      <React.Fragment>
          <TopNav/>
          <div className="container-fluid">
              <div className="wrapper">
                  <SideNav/>
                  <div className="content-page">
                      <div className="content col-lg-12">
                          { children }

                      </div>
                      <br/>
                      <footer className="footer">
                          <div className="container-fluid">
                              <div className="row">
                                  <div className="col-md-6">
                                      {new  Date().getFullYear()} - {app_name}
                                  </div>
                                  <div className="col-md-6">
                                      <div className="text-md-right footer-links d-none d-md-block">
                                          <a href="#">About</a>
                                          <a href="#">Support</a>
                                          <a href="#">Contact Us</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </footer>
                  </div>
              </div>
          </div>

      </React.Fragment>
  );
}
