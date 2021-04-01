import React, {useEffect} from "react";
import {initializeDataTable} from "@/Pages/Utilities/Services";
import {usePage} from "@inertiajs/inertia-react";

const FACILITY_SERVICES_DATA_TABLE = 'facility-services-datatable'

export default function FacilityServices() {
    const { facility_services } = usePage().props

    useEffect(() => {
        initializeDataTable(true, true, FACILITY_SERVICES_DATA_TABLE)
    }, [])

    return (
        <div className="tab-pane fade" id="v-pills-facility-services" role="tabpanel"
             aria-labelledby="v-pills-facility-services-tab">
            <table id={FACILITY_SERVICES_DATA_TABLE} className="table dt-responsive nowrap w-100">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Price currency</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>$320,800</td>
                    <td>System Architect</td>
                </tr>
                <tr>
                    <td>Garrett Winters</td>
                    <td>$170,750</td>
                    <td>Accountant</td>
                </tr>
                <tr>
                    <td>Garrett Winters</td>
                    <td>$170,750</td>
                    <td>Accountant</td>
                </tr>
                <tr>
                    <td>Garrett Winters</td>
                    <td>$170,750</td>
                    <td>Accountant</td>
                </tr>
                <tr>
                    <td>Garrett Winters</td>
                    <td>$170,750</td>
                    <td>Accountant</td>
                </tr><tr>
                    <td>Garrett Winters</td>
                    <td>$170,750</td>
                    <td>Accountant</td>
                </tr><tr>
                    <td>Garrett Winters</td>
                    <td>$170,750</td>
                    <td>Accountant</td>
                </tr><tr>
                    <td>Garrett Winters</td>
                    <td>$170,750</td>
                    <td>Accountant</td>
                </tr><tr>
                    <td>Garrett Winters</td>
                    <td>$170,750</td>
                    <td>Accountant</td>
                </tr><tr>
                    <td>Garrett Winters</td>
                    <td>$170,750</td>
                    <td>Accountant</td>
                </tr><tr>
                    <td>Garrett Winters</td>
                    <td>$170,750</td>
                    <td>Accountant</td>
                </tr><tr>
                    <td>Garrett Winters</td>
                    <td>$170,750</td>
                    <td>Accountant</td>
                </tr><tr>
                    <td>Garrett Winters</td>
                    <td>$170,750</td>
                    <td>Accountant</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
