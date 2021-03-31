export default function Languages() {
    return (
        <li className="dropdown notification-list topbar-dropdown d-none d-lg-block">
            <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" id="topbar-languagedrop" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <img src="/images/flags/us.jpg" alt="flag" className="mr-1" height="12" /> <span className="align-middle">English</span> <i className="mdi mdi-chevron-down"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu" aria-labelledby="topbar-languagedrop">
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <img src="/images/flags/germany.jpg" alt="user-image" className="mr-1" height="12" /> <span className="align-middle">German</span>
                </a>
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <img src="/images/flags/italy.jpg" alt="user-image" className="mr-1" height="12" /> <span className="align-middle">Italian</span>
                </a>
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <img src="/images/flags/spain.jpg" alt="user-image" className="mr-1" height="12" /> <span className="align-middle">Spanish</span>
                </a>
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <img src="/images/flags/russia.jpg" alt="user-image" className="mr-1" height="12" /> <span className="align-middle">Russian</span>
                </a>
            </div>
        </li>
    )
}