import {useEffect} from "react";
import {initializeDataTable} from "@/Pages/Utilities/Services";

const FACILITY_SERVICES_DATA_TABLE = 'facility-services-datatable'

export default function FacilityServices() {
    useEffect(() => {
        initializeDataTable(true, true, FACILITY_SERVICES_DATA_TABLE)
    }, [])

    return (
        <div className="tab-pane fade" id="v-pills-facility-services" role="tabpanel"
             aria-labelledby="v-pills-facility-services-tab">
            <p>facility services</p>
        </div>
    )
}
