import React, { useEffect } from 'react'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import MainMenu from "@/Shared/MainMenu";

export default function Sidebar() {
    const {auth} = usePage().props
    // const [queryAthUser, {loading, errors, data, called}] = useApi({query: QUERY_AUTH_USER})

    // useEffect(() => {
    //     // queryAthUser({})
    // }, [])

    return (
        <div className="left-side-menu left-side-menu-detached">

            <div className="leftbar-user">
                <a href="#">
                    <img src={auth.user.profile_photo_path} alt="user-image" height="42" className="rounded-circle shadow-sm" />
                    <span className="leftbar-user-name">{auth.user.name}</span>
                </a>
            </div>

            <MainMenu/>
            <div className="clearfix"></div>

        </div>
    )
}
