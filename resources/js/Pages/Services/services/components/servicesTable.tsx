import { FC } from 'react';
import { SERVICE_CATEGORIES_TABLE } from '@pages/constants'
import Service from '@pages/services/services/components/service'
import { serviceValues } from "@pages/data/reducers/service";

interface TableProps {
    services: Array<serviceValues>;
}

const ServicesTable: FC<TableProps> = ({services}: TableProps) => {

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