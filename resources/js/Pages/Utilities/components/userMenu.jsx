import React, {useEffect} from 'react'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";

function UserMenu() {
    const {auth} = usePage().props

    return (
        <li className="dropdown notification-list">
            <a className="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" id="topbar-userdrop" href="#" role="button" aria-haspopup="true"
                aria-expanded="false">
                <span className="account-user-avatar">
                    <img src={auth.user.profile_photo_path} alt="user-image" className="rounded-circle" />
                </span>
                <span>
                    <span className="account-user-name">{auth.user.name}</span>
                    <span className="account-position">{ auth.user.roles[0].name}</span>
                </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown" aria-labelledby="topbar-userdrop">
                <div className=" dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome !</h6>
                </div>

                <a href="#" className="dropdown-item notify-item">
                    <i className="mdi mdi-account-circle mr-1"></i>
                    <span>My Profile</span>
                </a>

                <InertiaLink href={route('settings.index')} className="dropdown-item notify-item">
                    <i className="mdi mdi-account-edit mr-1"></i>
                    <span>Settings</span>
                </InertiaLink>

                <a href="#" className="dropdown-item notify-item">
                    <i className="mdi mdi-lifebuoy mr-1"></i>
                    <span>Support</span>
                </a>

                <InertiaLink method="POST" href={route('logout')} className="dropdown-item notify-item" >
                    <i className="mdi mdi-logout mr-1"></i>
                    <span>Logout</span>
                </InertiaLink>

            </div>
        </li>
    )
}

export default UserMenu
