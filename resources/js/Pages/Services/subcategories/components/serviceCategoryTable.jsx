import React, { FC, useEffect } from 'react';

import Category from './serviceCategory'
import { SERVICE_CATEGORIES_TABLE } from '@/Pages/Utilities/Constants'

const ServiceCategoriesTable  = ({categories, callback}) =>{
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
                { categories.map((category, index )=> <Category category={category} callback={callback} key={index+1} />) }
            </tbody>
        </table>
    )
}

export default ServiceCategoriesTable;
