import React from 'react'

export default function Notifications() {
    return (
        <li className="dropdown notification-list">
            <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" id="topbar-notifydrop" role="button" aria-haspopup="true" aria-expanded="false">
                <i className="dripicons-bell noti-icon"></i>
                <span className="noti-icon-badge"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg" aria-labelledby="topbar-notifydrop">

                <div className="dropdown-item noti-title">
                    <h5 className="m-0">
                        <span className="float-right">
                            <a href="#" className="text-dark">
                                <small>Clear All</small>
                            </a>
                        </span>Notification
                    </h5>
                </div>

                <div style={{maxHeight: 230 + 'px'}} data-simplebar>
                    <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon bg-primary">
                            <i className="mdi mdi-comment-account-outline"></i>
                        </div>
                        <p className="notify-details">Caleb Flakelar commented on Admin
                            <small className="text-muted">1 min ago</small>
                        </p>
                    </a>

                    <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon bg-info">
                            <i className="mdi mdi-account-plus"></i>
                        </div>
                        <p className="notify-details">New user registered.
                            <small className="text-muted">5 hours ago</small>
                        </p>
                    </a>

                    <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon">
                            <img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                        <p className="notify-details">Cristina Pride</p>
                        <p className="text-muted mb-0 user-msg">
                            <small>Hi, How are you? What about our next meeting</small>
                        </p>
                    </a>

                    <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon bg-primary">
                            <i className="mdi mdi-comment-account-outline"></i>
                        </div>
                        <p className="notify-details">Caleb Flakelar commented on Admin
                            <small className="text-muted">4 days ago</small>
                        </p>
                    </a>

                    <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon">
                            <img src="assets/images/users/avatar.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                        <p className="notify-details">Karen Robinson</p>
                        <p className="text-muted mb-0 user-msg">
                            <small>Wow ! this admin looks good and awesome design</small>
                        </p>
                    </a>

                    <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon bg-info">
                            <i className="mdi mdi-heart"></i>
                        </div>
                        <p className="notify-details">Carlos Crouch liked
                            <b>Admin</b>
                            <small className="text-muted">13 days ago</small>
                        </p>
                    </a>
                </div>


                <a href="#" className="dropdown-item text-center text-primary notify-item notify-all">
                    View All
                </a>

            </div>
        </li>
    )
}
