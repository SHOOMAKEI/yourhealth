import React, { FC } from 'react';

import Service from '@/Pages/Services/requested/components/service'
import { SERVICE_CATEGORIES_TABLE } from '@/pages/Utilities/Constants'
// import { requestedServiceValues } from "@pages/data/reducers/requestedService";


const ServicesTable = ({services}) => {

    return (
        <table id={SERVICE_CATEGORIES_TABLE} className="table dt-responsive nowrap w-100">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Public Status</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { services.map(service => <Service {...service} />) }
            </tbody>
        </table>
    )
}

export default ServicesTable;
