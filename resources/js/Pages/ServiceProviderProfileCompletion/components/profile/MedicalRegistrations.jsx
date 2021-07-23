import React, { useEffect, useState } from 'react';

import { ADD_MEDICAL_REGISTRATION_MODAL_ID } from '@/Pages/Utilities/Constants'
import AddMedicalRegistrationModal from '@/Pages/ServiceProviderProfileCompletion/components/profile/AddMedicalRegistrationModal'
import Heading from '@/Pages/ServiceProviderProfileCompletion/components/profile/Heading'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import SelectInput from "@/Shared/SelectInput";

export default function MedicalRegistrations({user, facilities, medical_registrations, services}) {
    const {errors, status, alertType} = usePage().props
    const [medicalRegistrations,setMedicalRegistrations] = useState(medical_registrations)
    const [medicalRegs,setMedicalRegs] = useState(medical_registrations)
    const [values, setValues] = useState({ facility: facilities[0]?.id})


    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setValues(values => ({
            ...values,
            [key]: value
        }));
    }


        function renderAddSubcategoryModal() {
            return <AddMedicalRegistrationModal
                modalID={ADD_MEDICAL_REGISTRATION_MODAL_ID}
                operation="add"
                callback={addAttachment}
                services={services}
                facility={values.facility}
                initialData={{
                    registration_number: "",
                    certificate_name: "",
                    year: "",
                    attachment: "",
                    certificate_number: "",
                    expired_at:"",
                    service_category_id: services[0].id,
                    provider_facility_id: values.facility
                }}
            />
        }



    useEffect(()=>{
        let data_reg = medicalRegistrations?.filter(registration =>
                registration.provider_facility_id == values.facility
       )
        setMedicalRegs(data_reg)
        } , [values?.facility])

    useEffect(()=>{
            setMedicalRegs(medical_registrations)
            setMedicalRegistrations(medical_registrations)
        }, [medical_registrations])

    function addAttachment() {
        //
    }

    return (
        <div className="tab-pane fade" id="v-pills-medical-registration" role="tabpanel"
             aria-labelledby="v-pills-medical-registration-tab">
            {

                ( user.provider_profile.account_category_type === 'company' ||
                    user.provider_profile.account_category_type === 'facility')
                && (
                    <>
                        <h4>Select Facility</h4>
                        <SelectInput
                            name="facility"
                            type="text"
                            errors={errors.facility}
                            value={values.facility}
                            onChange={handleChange}
                        >
                            {facilities.map((facility)=>(
                                <option value={facility.id} key={facility.id}>{facility.name}</option>
                            ))}
                        </SelectInput>
                    </>
                )
            }

            <Heading
                title="Practice License"
                modalID={ADD_MEDICAL_REGISTRATION_MODAL_ID}
                buttonText="Add Practice License"
                renderModal={renderAddSubcategoryModal}
            />

        <table className="table table-centered table-borderless mb-0">
                <thead>
                    <tr>
                        <th>Certificate Name</th>
                        <th>Certificate Number</th>
                        <th>Authorized Service</th>
                        <th>Expired At</th>
                        <th>Attachment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        medicalRegs &&   medicalRegs.map(medReg => (
                            <tr key={medReg.id}>
                                <td>{medReg.certificate_name}</td>
                                <td>{medReg.certificate_number}</td>
                                <td>{medReg.authorized_service}</td>
                                <td>{medReg.expired_at}</td>
                                <td>
                                    <a href={`${medReg.attachment}`} className="btn btn-light">File <i className="uil-cloud-download ml-1"></i></a>
                                </td>
                                <td>
                                    <InertiaLink href={route('practiceLicense.destroy', medReg.id)} className="action-icon " >
                                        <i className="dripicons-trash"></i>
                                    </InertiaLink>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}
