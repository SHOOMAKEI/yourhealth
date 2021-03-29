import { ADD_FACILITY_MODAL_ID } from '@/Pages/Utilities/Constants'
import AddFacilityModal from '@/Pages/ServiceProviderProfileCompletion/components/profile/AddFacilityModal'
import Heading from '@/Pages/ServiceProviderProfileCompletion/components/profile/Heading'

export default function Facility() {
    function searchFacilities() {

    }

    function renderAddSubcategoryModal() {
        return <AddFacilityModal modalID={ADD_FACILITY_MODAL_ID} operation="add" />
    }

    return (
        <div className="tab-pane fade" id="v-pills-facility" role="tabpanel"
            aria-labelledby="v-pills-facility-tab">
            <Heading
                title="Facilities"
                modalID={ADD_FACILITY_MODAL_ID}
                buttonText="Add Facility"
                search={searchFacilities}
                renderModal={renderAddSubcategoryModal}
            />

            <table className="table table-centered table-borderless mb-0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>TIN Attachment</th>
                        <th>VRN Attachment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Linda G. Smith Linda G. Smith Linda G. Smith</td>
                        <td>
                            <a href="" className="btn btn-light">281-308-0793 <i className="uil-cloud-download ml-1"></i></a>
                        </td>
                        <td>
                            <a href="" className="btn btn-light">281-308-0793 <i className="uil-cloud-download ml-1"></i></a>
                        </td>
                        <td>
                            <a href="javascript: void(0);" className="action-icon"> <i className="mdi mdi-pencil"></i></a>
                            <a href="javascript: void(0);" className="action-icon"> <i className="dripicons-trash"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
