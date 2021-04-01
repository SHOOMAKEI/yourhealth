import React, { useEffect, useState } from 'react';

import { ADD_MEDICAL_REGISTRATION_MODAL_ID } from '@/Pages/Utilities/Constants'
import AddMedicalRegistrationModal from '@/Pages/ServiceProviderProfileCompletion/components/profile/AddMedicalRegistrationModal'
import Heading from '@/Pages/ServiceProviderProfileCompletion/components/profile/Heading'
import {usePage} from "@inertiajs/inertia-react";

export default function MedicalRegistrations() {
    // const {medicalRegistrations} = usePage().props
    const [medicalRegistrations,setMedicalRegistration] = useState({})



    useEffect(() => {




    }, [])
    //
    // useEffect(() => {
    //     let data = deleteMedRegResponse.data
    //
    //     if (data && data.deleteProviderMedicalRegistration) {
    //         let newMedicalRegistrations = medicalRegistrations.filter(md => {
    //             if (md.id !== data.deleteProviderMedicalRegistration.id) {
    //                 return md
    //             }
    //         })
    //
    //         setMedicalRegistrations(newMedicalRegistrations);
    //     }
    // }, [deleteMedRegResponse.data])



    function deleteMedicalRegistration(id) {
        // deleteMedReg({variables: {attachment_id: id}})
    }

    function searchMedicalRegistrations() {

    }

    function renderAddSubcategoryModal() {
        return <AddMedicalRegistrationModal modalID={ADD_MEDICAL_REGISTRATION_MODAL_ID} operation="add" callback={addAttachment} />
    }

    function addAttachment(attachment) {
        // let newMedicalRegistrations = [...medicalRegistrations];
        // newMedicalRegistrations.push(attachment);
        // setMedicalRegistrations(newMedicalRegistrations)
    }

    return (
        <div className="tab-pane fade" id="v-pills-medical-registration" role="tabpanel"
             aria-labelledby="v-pills-medical-registration-tab">

            <Heading
                title="Medical Registration"
                modalID={ADD_MEDICAL_REGISTRATION_MODAL_ID}
                buttonText="Add"
                search={searchMedicalRegistrations}
                renderModal={renderAddSubcategoryModal}
            />

        <table className="table table-centered table-borderless mb-0">
                <thead>
                    <tr>
                        <th>Certificate Name</th>
                        <th>Certificate Number</th>
                        <th>Registration Number</th>
                        <th>Attachment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        medicalRegistrations.map(medReg => (
                            <tr>
                                <td>{medReg.certificate_name}</td>
                                <td>{medReg.certificate_number}</td>
                                <td>{medReg.registration_number}</td>
                                <td>
                                    <a href={`${medReg.attachment}`} className="btn btn-light">File <i className="uil-cloud-download ml-1"></i></a>
                                </td>
                                <td>
                                    <a href="javascript: void(0);" className="action-icon" onClick={() => deleteMedicalRegistration(medReg.id)}>
                                        <i className="dripicons-trash"></i>
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}
