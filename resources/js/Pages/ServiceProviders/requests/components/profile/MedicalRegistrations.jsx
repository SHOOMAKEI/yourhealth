import React, {useEffect, useState} from 'react'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import SelectInput from "@/Shared/SelectInput";

export default function MedicalRegistrations({provider}) {
    const { errors } = usePage().props
    const [registrations, setRegistrations] = useState([])
    const[sending, setSending] = useState(false)
    const [facilities, setFacilities] = useState([])
    const [values, setValues] = useState({ facility:facilities[0]?.id})



    useEffect(() => {
        setSending(true)
        if(provider.account_category_type==='individual'){
            axios.get(route('service_provider_profiles.practice_license',provider.id))
                .then( resp => {
                    setRegistrations(resp.data)
                    setSending(false)
                })
        }
        if(provider.account_category_type==='facility' || provider.account_category_type==='company'){
            axios.get(route('service_provider_profiles.facility_practice_license',provider.id))
                .then( resp => {
                    setRegistrations(resp.data)
                    setSending(false)
                })
        }

    }, [provider])
    useEffect(() => {
        setSending(true)
        if(provider.account_category_type==='facility' || provider.account_category_type==='company'){
            values.facility && axios.get(route('service_provider_profiles.facility_practice_license',values?.facility))
                .then( resp => {
                    setRegistrations(resp.data)
                    setSending(false)
                })
        }

    }, [values?.facility])

    useEffect(() => {
        setSending(true)
        axios.get(route('service_provider_profiles.facilities',provider.id))
            .then( resp => {
                setFacilities(resp.data)
                // setValues(resp.data[0].id)
                setSending(false)
            })
    }, [provider])

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setValues(values => ({
            ...values,
            [key]: value
        }));
    }

    return (
        <div className="tab-pane fade" id="v-pills-medical-registration" role="tabpanel"
             aria-labelledby="v-pills-medical-registration-tab">
            {
                ( provider.account_category_type === 'company' ||
                    provider.account_category_type === 'facility')
                && (
                    <div className="col-12">
                        <h4>Select Facility</h4>
                        <SelectInput
                            name="facility"
                            type="text"
                            errors={errors.facility}
                            value={values.facility}
                            onChange={handleChange}
                        >
                            { facilities && facilities.map((facility)=>(
                                <option value={facility.id} key={facility.id}>{facility.name}</option>
                            ))}
                        </SelectInput>
                    </div>
                )
            }

            <div className="row">
                    <div className="col-12" >
                        <table className="table table-centered mb-0">
                            <thead>
                            <tr>
                                <th>Practice License Name</th>
                                <th>Expired At</th>
                                <th>For Service Category</th>
                                <th>Attachment</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            { registrations && registrations.map((registration, index)=>(
                                <tr key={index+1}>
                                    <td>{registration.certificate_name}</td>
                                    <td>{registration.expired_at}</td>
                                    <td>{registration.service}</td>
                                    <td>
                                        <a href={`${registration.file_url}`} className="btn btn-light">File <i className="uil-cloud-download ml-1"></i></a>
                                    </td>
                                    <td>{registration.is_verified?
                                        <span><i className="uil uil-check-circle font-16 mr-1 text-primary"/> Approved</span> :
                                        <span><i className="uil uil-times-circle font-16 mr-1 text-danger"/>{`${registration.rejected_at? 'Rejected': 'Not Approved'}`}</span>} <br/>
                                        {/*{`${registration.rejected_at? 'Rejected': 'Approved'} At `}*/}
                                        {`${registration.rejected_at? registration.rejected_at: registration.verified_at}`}
                                    </td>
                                    <td>
                                        {!registration.is_verified?
                                        (<InertiaLink href={
                                            ( provider.account_category_type === 'company' ||
                                                provider.account_category_type === 'facility')?
                                                route('service_provider_profiles.facility_practice_license_approval', registration.id):  route('service_provider_profiles.practice_license_approval', registration.id) } className="btn btn-primary btn-md my-1">Approve</InertiaLink>)
                                        :<InertiaLink href={
                                                ( provider.account_category_type === 'company' ||
                                                    provider.account_category_type === 'facility')?
                                                    route('service_provider_profiles.facility_practice_license_deny', registration.id):route('service_provider_profiles.practice_license_deny', registration.id)} className="btn btn-danger btn-md my-1">Deny</InertiaLink>
                                        }
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

            </div>
        </div>
    )
}
