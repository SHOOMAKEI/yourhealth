import ModalForm from "@/Pages/Utilities/ModalForm";
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import TextAreaInput from "@/Shared/TextAreaInput";
import Layout from "@/Shared/Layout";
import Dashboard from "@/Pages/Dashboard";
import PageTitle from "@/Shared/PageTitle";

const Company = ()=> {
    const { company, errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        address: company?.address || "",
        description: company?.description || "",
        alternative_mobile_number:  company?.alternative_mobile_number ||"",
        email:  company?.email || "",
        mobile_number: company?.mobile_number || "",
        name: company?.name || "",
        physical_address: company?.physical_address || "",
        registration_date: company?.registration_date || "",
        registration_number: company?.registration_number || "",
        tin: company?.tin || "",
        trading_name: company?.trading_name || "",
        vrn: company?.vrn || "",
        website: company?.website || ""
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
        Inertia.post(route('companyInfo.update'), values).then(() => {
            setSending(false);
        });
    }

        return (
            <div className="">
             <PageTitle title="My Company"/>
                <div className="card card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <TextInput
                                    name="name"
                                    type="text"
                                    placeholder="Company Name"
                                    label="Company Name"
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
                </div>
            </div>
        )
}

Company.layout = page => <Layout children={page} />;

export default Company;
