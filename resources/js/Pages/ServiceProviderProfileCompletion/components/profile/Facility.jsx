import {ADD_FACILITY_MODAL_ID, EDIT_FACILITY_MODAL_ID} from '@/Pages/Utilities/Constants'
import AddFacilityModal from '@/Pages/ServiceProviderProfileCompletion/components/profile/AddFacilityModal'
import Heading from '@/Pages/ServiceProviderProfileCompletion/components/profile/Heading'
import React from 'react'
import {InertiaLink} from "@inertiajs/inertia-react";

export default function Facility({facilities, provider_sub_levels}) {
    function searchFacilities() {

    }

    function renderAddSubcategoryModal() {
        return <AddFacilityModal modalID={ADD_FACILITY_MODAL_ID} operation="add" provider_sub_levels={provider_sub_levels}/>
    }

    function renderEditFacilityModal(data) {
        // e.preventDefault()
        return <AddFacilityModal modalID={EDIT_FACILITY_MODAL_ID} operation="edit" provider_sub_levels={provider_sub_levels} data={data}/>
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
                {
                    facilities.map((facility)=>(

                        <tr key={facility.id}>
                            <td>{facility.name}</td>
                            <td>
                                <a href={facility.vrn_attachment?facility.vrn_attachment:'#'} className="btn btn-light">{facility.vrn_attachment?  facility.vrn:'No file Uploaded ' + '(' + facility.vrn +')'} <i className="uil-cloud-download ml-1"></i></a>
                            </td>
                            <td>
                                <a href={facility.tin_attachment?facility.tin_attachment:'#'} className="btn btn-light">{facility.tin_attachment?  facility.tin:'No file Uploaded ' + '(' +  facility.tin +')'} <i className="uil-cloud-download ml-1"></i></a>
                            </td>
                            <td>
                                <a href="#" className="action-icon" data-toggle="modal" data-target={`#${EDIT_FACILITY_MODAL_ID}`} > <i className="dripicons-pencil"></i></a>
                                <InertiaLink href={route('facilityInfo.destroy', facility.id)} className="action-icon"> <i className="dripicons-trash"></i></InertiaLink>
                            </td>
                            {renderEditFacilityModal(facility)}
                        </tr>

                    ))
                }

                </tbody>
            </table>
        </div>
    )
}
