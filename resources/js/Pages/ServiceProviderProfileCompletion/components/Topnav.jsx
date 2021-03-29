// import Languages from '@/Pages/constants/components/languages'
import { useEffect } from 'react'


export default function TopNav({user}) {


    return (
        <div className="navbar-custom topnav-navbar topnav-navbar-dark">
            <div className="container-fluid">
                <ul className="list-unstyled topbar-right-menu float-right mb-0">
                    {/*<Languages />*/}
                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" id="topbar-userdrop" href="#" role="button" aria-haspopup="true"
                           aria-expanded="false">
                <span className="account-user-avatar">
                    <img src="/images/avatar.jpg" alt="user-image" className="rounded-circle" />
                </span>
                            <span>
                    <span className="account-user-name">{user.name}</span>
                    <span className="account-position">
                        {user.roles[0].name}
                    </span>
                </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown" aria-labelledby="topbar-userdrop">
                            <div className=" dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-lifebuoy mr-1"></i>
                                <span>Support</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item" onClick={logoutUser}>
                                <i className="mdi mdi-logout mr-1"></i>
                                <span>Logout</span>
                            </a>

                        </div>
                    </li>
                </ul>

                <a className="button-menu-mobile disable-btn">
                    <div className="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>

            </div>
        </div>
    )
}
