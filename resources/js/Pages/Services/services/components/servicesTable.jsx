import React from 'react';
import { SERVICE_CATEGORIES_TABLE } from '@/Pages/Utilities/Constants'
import Service from '@/Pages/Services/services/components/service'



const ServicesTable = ({services}) => {

    return (
        <table id={SERVICE_CATEGORIES_TABLE} className="table dt-responsive nowrap w-100">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Public Status</th>
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
