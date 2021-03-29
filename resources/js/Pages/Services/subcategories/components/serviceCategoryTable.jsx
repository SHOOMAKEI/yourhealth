import React, { useEffect } from 'react';

import Category from '@/Pages/Services/subcategories/components/serviceSubategory'
import { SERVICE_CATEGORIES_TABLE } from '@/Pages/Utilities/Constants'

const ServiceCategoriesTable= ({categories}) => {
    // useEffect(() => {
    //     initializeDataTable(false, false, SERVICE_CATEGORIES_TABLE)
    // }, [])

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
                { categories.map(category => <Category {...category} />) }
            </tbody>
        </table>
    )
}

export default ServiceCategoriesTable;
