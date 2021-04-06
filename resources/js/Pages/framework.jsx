import React, { ReactChild, ReactNode } from 'react'

import SideNav from './Utilities/sidenav'
import TopNav from './Utilities/topnav'


function Framework({ children }) {

    return (
        <React.Fragment>
            <TopNav />
            <div className="container-fluid">
                <div className="wrapper">
                    <SideNav />
                    <div className="content-page">
                        <div className="content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Framework;
