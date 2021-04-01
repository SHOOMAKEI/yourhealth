import Languages from './components/languages'
import Notifications from './components/notifications'
import UserMenu from './components/userMenu'

export default function TopNav() {
    

    return (
        <div className="navbar-custom topnav-navbar topnav-navbar-dark">
            <div className="container-fluid">

                <a href="index.html" className="topnav-logo">
                    <span className="topnav-logo-lg">
                        {/* <img src="/images/logo.png" alt="" height="50" /> */}
                    </span>
                    <span className="topnav-logo-sm">
                        {/* <img src="/images/logo.png" alt="" height="50" /> */}
                    </span>
                </a>

                <ul className="list-unstyled topbar-right-menu float-right mb-0">
                    <Languages />
                    <Notifications />
                    <UserMenu />
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
