import { FC } from 'react';

import Service from '@pages/services/requested/components/service'
import { SERVICE_CATEGORIES_TABLE } from '@pages/constants'
import { requestedServiceValues } from "@pages/data/reducers/requestedService";

interface TableProps {
    services: Array<requestedServiceValues>;
}

const ServicesTable: FC<TableProps> = ({services}: TableProps) => {

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