import React, { FC, useEffect } from 'react';

import Category from '@/pages/services/categories/components/serviceCategory'
import { SERVICE_CATEGORIES_TABLE } from '@/pages/Utilities/Constants'

const ServiceCategoriesTable  = ({categories, callback}) => {
    // useEffect(() => {
    //     initializeDataTable(false, false, SERVICE_CATEGORIES_TABLE)
    // }, [])

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
                { categories.map(category => <Category category={category} callback={callback}  />) }
            </tbody>
        </table>
    )
}

export default ServiceCategoriesTable;
