import React, { useEffect, useState } from 'react';

import {ADD_MEDICAL_REGISTRATION_MODAL_ID, ADD_STUFF_INVITATION_MODAL_ID} from '@/Pages/Utilities/Constants'
import AddMedicalRegistrationModal from '@/Pages/ServiceProviderProfileCompletion/components/profile/AddMedicalRegistrationModal'
import Heading from '@/Pages/ServiceProviderProfileCompletion/components/profile/Heading'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import SelectInput from "@/Shared/SelectInput";
import Layout from "@/Shared/Layout";
import Services from "@/Pages/VerifiedServiceProviders/FirmManagement/Services";
import PageTitle from "@/Shared/PageTitle";
import AddStuffInvitationModal from "@/Pages/VerifiedServiceProviders/StuffManagement/AddStuffInvitationModal";

const FacilityInvitation = () => {
    const {errors, status, alertType, auth, facilities, invitations} = usePage().props
    const [medicalRegistrations,setMedicalRegistrations] = useState(invitations)
    const [medicalRegs,setMedicalRegs] = useState(invitations)
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
            return <AddStuffInvitationModal
                modalID={ADD_STUFF_INVITATION_MODAL_ID}
                operation="add"
                facility={values.facility}
                initialData={{
                    email: "",
                    role: "stuff",
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
            setMedicalRegs(invitations)
            setMedicalRegistrations(invitations)
        }, [invitations])

    function addAttachment() {
        //
    }

    return (
        <>
            <PageTitle title="Stuff Invitations"/>
            <div className="card card-body">
                {

                    ( auth.user.provider_profile.account_category_type === 'company' ||
                        auth.user.provider_profile.account_category_type === 'facility')
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
                    title="Stuff Invitations"
                    modalID={ADD_STUFF_INVITATION_MODAL_ID}
                    buttonText="Invite New Stuff"
                    renderModal={renderAddSubcategoryModal}
                />

                <table className="table table-centered table-borderless mb-0">
                    <thead>
                    <tr>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        medicalRegs &&   medicalRegs.map(medReg => (
                            <tr key={medReg.id}>
                                <td>{medReg.email}</td>
                                <td>{medReg.role}</td>
                                <td>{medReg.status}</td>
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
        </>

    )
}

FacilityInvitation.layout = page => <Layout children={page} />;

export default FacilityInvitation;
