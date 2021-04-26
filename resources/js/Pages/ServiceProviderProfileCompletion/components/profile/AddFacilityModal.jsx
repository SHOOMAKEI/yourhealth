import ModalForm from "@/Pages/Utilities/ModalForm";
import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import TextAreaInput from "@/Shared/TextAreaInput";
import SelectInput from "@/Shared/SelectInput";

export default function AddFacilityModal( {modalID, initialData, operation, title, provider_sub_levels, data={}}) {
    const { errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        id: data?.id || "",
        address: data?.address || "",
        description: data?.id || "",
        alternative_mobile_number: data?.alternative_mobile_number || "",
        email: data?.email || "",
        mobile_number: data?.mobile_number || "",
        name: data?.name || "",
        physical_address: data?.physical_address || "",
        registration_date: data?.registration_date || "",
        registration_number: data?.registration_number || "",
        tin: data?.tin || "",
        trading_name: data?.trading_name || "",
        vrn: data?.vrn || "",
        website: data?.website || ""
    });


    function handleChange(e) {
        const key = e.target.name;
        const value =
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setValues(values => ({
            ...values,
            [key]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        if (operation==='add'){
            Inertia.post(route('facilityInfo.store'), values).then(() => {
                setSending(false);
            });
        }else {
            Inertia.post(route('facilityInfo.update',data.id), values).then(() => {
                setSending(false);
            });
        }


    }

    useEffect(()=>{
        $(document).ready(function () {
            window.setTimeout(()=>{
                $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                    $(".alert").slideUp(500);
                });
            },2500)
        });
    },[status, errors])

    function renderForm() {
        return (
            <>
            {
                status &&  (
                    <div className={`alert alert-success alert-dismissible bg-primary text-white border-0 fade show`} role="alert">
                        <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Success - </strong> {status}
                    </div>
                )
            }
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-6">
                    <TextInput
                        name="name"
                        type="text"
                        placeholder="Facility Name"
                        label="Facility Name"
                        errors={errors.name}
                        value={values.name}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="website"
                        type="text"
                        placeholder="Website"
                        label="Website"
                        errors={errors.website}
                        value={values.website}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="tin"
                        type="text"
                        placeholder="TIN Number"
                        label="TIN Number"
                        errors={errors.tin}
                        value={values.tin}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="mobile_number"
                        type="text"
                        placeholder="Mobile Number"
                        label="Mobile Number"
                        errors={errors.mobile_number}
                        value={values.mobile_number}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="address"
                        type="text"
                        placeholder="Address"
                        label="Address"
                        errors={errors.address}
                        value={values.address}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="registration_date"
                        type="date"
                        placeholder="Registration Date"
                        label="Registration Date"
                        errors={errors.registration_date}
                        value={values.registration_date}
                        onChange={handleChange}
                    />
                    <TextAreaInput
                        name="description"
                        type="text"
                        placeholder="Description"
                        label="Description"
                        rows={4}
                        errors={errors.description}
                        value={values.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-6">
                    <TextInput
                        name="trading_name"
                        type="text"
                        placeholder="Trading Name"
                        label="Trading Name"
                        errors={errors.trading_name}
                        value={values.trading_name}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="vrn"
                        type="text"
                        placeholder="VRN"
                        label="VRN"
                        errors={errors.vrn}
                        value={values.vrn}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="email"
                        type="text"
                        placeholder="Email Address"
                        label="Email Address"
                        errors={errors.email}
                        value={values.email}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="alternative_mobile_number"
                        type="text"
                        placeholder="Alternative Mobile Number"
                        label="Alternative Mobile Number"
                        errors={errors.alternative_mobile_number}
                        value={values.alternative_mobile_number}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="physical_address"
                        type="text"
                        placeholder="Physical Address"
                        label="Physical Address"
                        errors={errors.physical_address}
                        value={values.physical_address}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="registration_number"
                        type="text"
                        placeholder="Registration Number"
                        label="Registration Number"
                        errors={errors.registration_number}
                        value={values.registration_number}
                        onChange={handleChange}
                    />
                    <SelectInput
                        name="provider_sub_level_id"
                        type="text"
                        placeholder="Provider Sub Level"
                        label="Provider Sub Level"
                        errors={errors.provider_sub_level_id}
                        value={values.provider_sub_level_id}
                        onChange={handleChange}
                    >
                        {provider_sub_levels.map((level)=>(
                            <option value={level.id} key={level.id}>{level.name}</option>
                        ))}
                    </SelectInput>
                    <div className="form-group mb-0 text-right">
                        <LoadingButton
                            type="submit"
                            className="btn btn-primary btn-block"
                            loading={sending}
                        >
                            Save Changes
                        </LoadingButton>
                    </div>
                </div>
            </div>
        </form>
            </>
        )
    }

    return (
        <ModalForm
          modalID={modalID}
          title={title ? title : "Add new facility"}
          renderForm={renderForm}
          size={'large'}
        />
    );
}
