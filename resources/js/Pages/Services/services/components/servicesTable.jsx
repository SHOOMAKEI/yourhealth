import React from 'react';
import { SERVICE_CATEGORIES_TABLE } from '@/Pages/Utilities/Constants'
import Service from '@/Pages/Services/services/components/service'



const ServicesTable = ({services, callback}) => {

    return (
        <table id={SERVICE_CATEGORIES_TABLE} className="table dt-responsive nowrap w-100">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Public Status</th>
                    <th>Approval Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { services.map((service, index )=> <Service service={service} callback={callback} key={index+1}/>) }
            </tbody>
        </table>
    )
}

export default ServicesTable;
