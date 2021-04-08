import React, {useEffect} from 'react'
import {usePage} from "@inertiajs/inertia-react";

function UserMenu() {
    const {auth} = usePage().props
    // const [queryAthUser, {loading, errors, data, called}] = useApi({query: QUERY_AUTH_USER})
    // const [logout, logoutResponse] = useApi({query: LOGOUT})
    // const router = useRouter();

    // useEffect(() => {
    //     // queryAthUser({})
    // }, [])
    //
    // useEffect(() => {
    //     // if(logoutResponse.data && logoutResponse.data.logoutSession.success) {
    //     //     router.push('/auth/login')
    //     // }
    // }, [logoutResponse.data])
    //
    // useEffect(() => {
    //     if (data && data.me === null) {
    //         // router.push('/auth/login')
    //     }

    //     if (data.me) {
    //         data.me.roles.map(role => {
    //             if (role.name.toLowerCase().includes('unverified')) {
    //                 // router.push('/service-providers-registration/Register');
    //             }
    //         })
    //     }
    // }, [data])

    // function logoutUser() {
    //     // logout({variables: {input: {email: data.me.email}}})
    // }

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
                    <span>My Account</span>
                </a>

                <a href="#" className="dropdown-item notify-item">
                    <i className="mdi mdi-account-edit mr-1"></i>
                    <span>Settings</span>
                </a>

                <a href="#" className="dropdown-item notify-item">
                    <i className="mdi mdi-lifebuoy mr-1"></i>
                    <span>Support</span>
                </a>

                <a href="#" className="dropdown-item notify-item" >
                    <i className="mdi mdi-logout mr-1"></i>
                    <span>Logout</span>
                </a>

            </div>
        </li>
    )
}

export default UserMenu
