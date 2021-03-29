import {useEffect} from "react";
import {initializeDataTable} from "@pages/components/services";

const SERVICES_DATA_TABLE = 'provider-services-datatable'

export default function Services() {
    useEffect(() => {
        initializeDataTable(true, true, SERVICES_DATA_TABLE)
    }, [])

    return (
        <div className="tab-pane fade" id="v-pills-services" role="tabpanel"
             aria-labelledby="v-pills-services-tab">
            <table id={SERVICES_DATA_TABLE} className="table dt-responsive nowrap w-100">
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