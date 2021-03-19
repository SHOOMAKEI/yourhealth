import React, {useState} from 'react';
import { Inertia } from '@inertiajs/inertia';
import MainMenu from '@/Shared/MainMenu';
import FlashMessages from '@/Shared/FlashMessages';
import TopHeader from '@/Shared/TopHeader';
import BottomHeader from '@/Shared/BottomHeader';
import { InertiaLink, usePage } from '@inertiajs/inertia-react'


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
    <div id="app">
      <header className="topbar">
        <div className="topbar-left">
          <div className="main-logo">
            <a href="index.html" className="madmin-logo-link">
              <img src="assets/images/madmin-logo-icon-white.png" className="logo" alt="Madmin logo"/>
            </a>
            <a href="index.html" className="logo-text">DukaPoa Pro</a>
          </div>
        </div>
        <nav className="navbar-main navbar-full d-flex flex-nowrap flex-row">
          <ul className="navbar-inner nav-left d-flex flex-row pl-0 mb-0 order-1 bdr-l">
            <li className="text-center">
              <a href="#" className="nav-link text-center switch-sidebar-mode">
                <i className="icon-menu"></i>
              </a>
            </li>
          </ul>
          <ul className="navbar-inner d-flex flex-row ml-auto mb-0 m-20 order-2">
            <li className="search-dropin">

              <a href="#" id="searchIcon" className="nav-link search-icon">
                <i className="icon-magnifier"></i>
              </a>
              <div className="search-input-field">
                <input type="search" className="form-control form-field" placeholder="Type to search..."/>
                <button className="btn">
                  <i className="icon-magnifier"></i>
                </button>
                <a id="closeSearchBox" href="#" className="">
                  <i className=" icon-close"></i>
                </a>
              </div>

            </li>
            <li className="dropdown">

              <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link notification-icon">
                <i className="icon-grid"></i>
              </a>
              <div className="dropdown-menu pdn-8" aria-labelledby="dropdownMenuButton">
                <div className="boxed-dropdown">
                  <a className="dropdown-icon-menu pt-3 pb-3 " href="mail-inbox.html">
                    <i className="icon-envelope-open d-block"></i>
                    <span>Mail</span>
                  </a>
                  <a className="dropdown-icon-menu pt-3 pb-3" href="chat.html">
                    <i className="icon-bubbles d-block"></i>
                    <span>Messages</span>
                  </a>
                  <a className="dropdown-icon-menu pt-3 pb-3" href="#">
                    <i className="icon-bag d-block"></i>
                    <span>Orders</span>
                  </a>
                  <a className="dropdown-icon-menu pt-3 pb-3" href="fullcalendar.html">
                    <i className="icon-calendar d-block"></i>
                    <span>Calender</span>
                  </a>
                </div>
              </div>

            </li>
            <li className="dropdown">

              <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link">
                <i className="icon-bell"></i>
                <span className="notify"></span>
                <span className="heartbeat"></span>
              </a>
              <div className="dropdown-menu pdn-8" aria-labelledby="dropdownMenuButton">
                <div className="notification-dropdown list-group-notification list-group list-group-borderless">
                  <div className="notification-wrapper ps">
                    <div className="d-flex flex-row list-group-item">
                      <img src="assets/images/user/thumb/default.png" alt="Notification" className="list-thumbnail  rounded-circle"/>
                      <div className="info">
                        <p className="top">John Snow commented</p>
                        <span className="bottom">02 minutes ago</span>
                      </div>
                      <div className="buttons ml-auto">
                        <a href="#">
                          <div className="icon-wrapper">
                            <i className="icon-trash"/>
                          </div>
                        </a>
                      </div>
                    </div>
                  <div className="ps__rail-x" style={{left: "0px", top: "0px"}}>
                    <div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div></div>
                    <div className="ps__rail-y" style={{top: "0px", right: "0px"}}>
                      <div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "0px"}}></div></div></div>
                  <div className="d-flex flex-row list-group-item list-group-footer">
                    <a href="#">
                      <span className="text-uppercase">View All</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown">

              <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link user-dropdown-icon">
                <img src="assets/images/user/thumb/default.png" alt="Notification" className="list-thumbnail  rounded-circle"/>
              </a>

              <div className="user-dropdown dropdown-menu pdn-15" aria-labelledby="dropdownMenuButton">
                <div className="media">
                  <img src="assets/images/user/thumb/default.png" alt="Notification" className="user-thumb rounded-circle mr-3"/>
                  <div className="media-body">
                    <h5 className="mgn-0">Sirus Holding</h5>
                    krista@example.com
                  </div>
                </div>
                <ul className="list-group list-group-borderless mgn-t-15">
                  <li className="list-group-item pdn-y-5 pdn-x-0">
                    <i className="icon-user"></i>
                    <a href="#">
                      <span className="mgn-l-10">Profile</span>
                    </a>
                  </li>
                  <li className="list-group-item pdn-y-5 pdn-x-0">
                    <i className="icon-key"></i>
                    <a href="#">
                      <span className="mgn-l-10">Change password</span>
                    </a>
                  </li>
                  <li className="list-group-item pdn-y-5 pdn-x-0">
                    <i className="icon-settings"></i>
                    <a href="#">
                      <span className="mgn-l-10">Settings</span>
                    </a>
                  </li>
                  <li className="list-group-item pdn-y-5 pdn-x-0">
                    <i className="icon-logout"></i>

                    <InertiaLink href={route('logout')} method="post">
                          <span className="mgn-l-10">Signout</span>
                    </InertiaLink>

                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <aside className="aside-wrapper">
        <div className="aside-inner ps ps--active-y">
          <div className="aisde-header">
            <img src="assets/images/user/thumb/user-thumb-7.png" alt="User image"/>
            <h6 className="user-name mgn-t-15">Vela Holdooing</h6>
          </div>
          <div className="aside-body">
            <div className="aside-menu">
            <MainMenu/>
             
            </div>
          </div>
        <div className="ps__rail-x" style={{left: '0px', top: '0px'}}>
            <div className="ps__thumb-x" tabIndex="0" style={{left: '0px', width: '0px'}}></div>
        </div>
        <div className="ps__rail-y" style={{top: 'px', height: '512px', right: '0px'}}>
            <div className="ps__thumb-y" tabIndex="0" style={{top: '0px', height: '161px'}}></div>
        </div>
        </div>
      </aside>

      <div className="content-wrapper">

        <div className="container">
          <div className="page-content">
            {children}
          </div>
        </div>


        
        <footer className="footer">
          <div className="left-footer">
            © 2021
            <a href="#">DukaPoa Pro</a>
          </div>
          <div className="right-footer">
            <ul className="d-flex">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>

  );
}
