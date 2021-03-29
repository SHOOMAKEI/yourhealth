import React from 'react'
import Layout from '@/Shared/Layout';


const Dashboard = () => {

    return(
        <div className="card">
            <div className="card-header pdn-20 pdn-sm-x-40">
                <h6>Blank Page</h6>
            </div>
            <div className="card-body pdn-sm-40 pdn-t-20-imp">
                <p className="card-text mb-3 wth-sm-70p">Paragraph title</p>
                <div className="pdn-sm-55 pdn-15 bdr">
                    Page contents go here. Create something awesome!
                </div>
            </div>
        </div>
    )
}

Dashboard.layout = page => <Layout children={page} />;

export default Dashboard;
