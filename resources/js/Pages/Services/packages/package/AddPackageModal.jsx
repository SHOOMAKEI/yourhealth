import ModalForm from "@/Pages/Utilities/ModalForm";
import React, {useEffect, useState} from "react";
import TextInput from "@/Shared/TextInput";
import TextAreaInput from "@/Shared/TextAreaInput";
import CheckBoxInput from "@/Shared/CheckBoxInput";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import LoadingButton from "@/Shared/LoadingButton";
import SelectInput from "@/Shared/SelectInput";


export default function AddPackageModal({modalID, operation, title, initialData, memberships, ranges, features}) {
    const {errors, status, alertType} = usePage().props
    const [type, setType] = useState(operation)
    const [featureData, setFeatureData] = useState({})
    const [rangeData, setRangeData] = useState({})
    const [membershipData, setMembershipData] = useState({})
    const [values, setValues] = useState({})
    const [success, setSuccess] = useState(false)
    const [sending, setSending] = useState(false)

    function handleChange(e) {
        const key = e.target.name;
        const value =
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setValues(values => ({
            ...values,
            [key]: value
        }));
    }

    useEffect(()=>{
        setFeatureData(features)
        setRangeData(ranges)
        setMembershipData(memberships)
    },[features, ranges, memberships])

    function addFeature(e){
        e.preventDefault();
        if(values.package_feature_id !== ""){
            setValues(values => ({
                ...values,
                features:[...values.features , featureData.find(d=> d.id == values.package_feature_id)],
            }));
        }

    }

    function removeFeature(e,feature){
        e.preventDefault();

            setValues(values => ({
                ...values,
                features:[...values.features.filter(fet => fet.id !=  feature.id)],

            }));

    }

    function addRange(e){
        e.preventDefault();
        if(values.package_member_range_id !== ""){
            setValues(values => ({
                ...values,
                ranges:[...values.ranges , rangeData.find(d=> d.id == values.package_member_range_id)],

            }));
        }

    }

    function removeRange(e,range){
        e.preventDefault();

        setValues(values => ({
            ...values,
            ranges:[...values.ranges.filter(fet => fet.id !=  range.id)],

        }));

    }


    useEffect(() => setValues(values => (initialData)),[initialData])

    useEffect(() => setType(operation),[operation])

    function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        switch (type) {
            case "add":

                Inertia.post(route('packages_registration.store'), values).then(() => {
                    setSending(false);
                });
                break;

            case "update":
                if(values.clone){
                    Inertia.post(route('packages_registration.store'), values).then(() => {
                        setSending(false);
                    });
                }
                if(!values.clone){
                    Inertia.put(route('packages_registration.update', values.id), values).then(() => {
                        setSending(false);
                    });
                }

                break;

            default:
                Inertia.post(route('packages_registration.store'), values).then(() => {
                    setSending(false);
                });
                break;
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
                <form onSubmit={handleSubmit}>
                    {
                        status && (
                            <div className={`alert alert-primary alert-dismissible bg-primary text-white border-0 fade show`} role="alert">
                                <button type="button" className="close" onClick={() => setSuccess(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Success - </strong> Operation was completed successfully!
                            </div>
                        )

                    }
                    <SelectInput
                        name="membership_category_id"
                        placeholder="Membership Category Name"
                        label="Membership Category Name"
                        errors={errors.membership_category_id}
                        value={values.membership_category_id}
                        onChange={handleChange}
                    >
                        {
                             membershipData  &&   membershipData.length>0
                            && membershipData?.map((membership, index)=>(
                                <option value={membership.id} key={index+1}>{membership.name}</option>
                            ))
                        }
                    </SelectInput>


                    <TextInput
                        name="name"
                        type="text"
                        placeholder="Package Name"
                        label="Package Name"
                        errors={errors.name}
                        value={values.name}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="price"
                        type="number"
                        placeholder="Price (For Individual and Family category)"
                        label="Price (For Individual and Family category)"
                        errors={errors.price}
                        value={values.price}
                        onChange={handleChange}
                    />
                    <SelectInput
                        name="currency"
                        type="text"
                        placeholder="Currency (For Individual and Family category)"
                        label="Currency (For Individual and Family category)"
                        errors={errors.currency}
                        value={values.currency}
                        onChange={handleChange}
                    >
                        <option value="TZS">TZS</option>
                        <option value="USD">USD</option>
                        <option value="KES">KES</option>
                        <option value="UGS">UGS</option>
                    </SelectInput>

                    {values.features && values.features.length>0 && (
                        <>
                            <h4>Package Features</h4>
                            <table className="table table-hover table-centered mb-0">
                                <thead>
                                <tr>
                                    <th>
                                        Feature
                                    </th>
                                    <th>
                                        Services
                                    </th>
                                    <th>
                                        Actions
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {values.features && values.features.length>0 && values.features.map((feature,index )=>(
                                    <tr key={index+1}>
                                        <td>
                                            {feature.name}
                                        </td>
                                        <td>
                                            {
                                                feature.services.length>0 &&
                                                <ul>
                                                    {feature.services?.map((service, index)=>(<li key={index+1}>{service.name}</li>))}
                                                </ul>
                                            }
                                        </td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={(e)=>removeFeature(e, feature)}>
                                                <i className="dripicons-trash"/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </>

                    )}
                    <div className="row">
                        <div className="col-lg-10">
                            <SelectInput
                                name="package_feature_id"
                                placeholder="Package Feature"
                                label="Package Feature"
                                errors={errors.package_feature_id}
                                value={values.package_feature_id}
                                onChange={handleChange}
                            >
                                {
                                    featureData && featureData.length>0 && featureData?.map((feature, index)=>(
                                        <option value={feature.id} key={index+1}>{feature.name} </option>
                                    ))
                                }
                            </SelectInput>
                        </div>
                        <div className="col-lg-2 my-auto">
                            <button className="btn btn-primary btn-sm" onClick={addFeature}>
                                <i className="dripicons-plus"/>
                            </button>
                        </div>

                    </div>

                    {values.ranges && values.ranges.length>0  && (
                        <>
                            <h4>Stuff Members</h4>
                            <table className="table table-hover table-centered mb-0">
                                <thead>
                                <tr>
                                    <th>
                                        Range
                                    </th>
                                    <th>
                                        Price
                                    </th>
                                    <th>
                                        Actions
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {values.ranges && values.ranges.length>0 && values.ranges.map((range,index )=>(
                                    <tr key={index+1}>
                                        <td>
                                            {range.min} - {range.max}
                                        </td>
                                        <td>
                                            {range.price} {range.currency}
                                        </td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={(e)=>removeRange(e, range)}>
                                                <i className="dripicons-trash"/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </>

                    )}
                    <div className="row">
                        <div className="col-lg-10">
                            <SelectInput
                                name="package_member_range_id"
                                placeholder="Package Stuff Member"
                                label="Package Stuff Member"
                                errors={errors.package_member_range_id}
                                value={values.package_member_range_id}
                                onChange={handleChange}
                            >
                                {
                                    rangeData
                                    &&  rangeData.length>0
                                    &&  rangeData?.map((range, index)=>(
                                        <option value={range.id} key={index+1}>{range.min} - {range.max}  ({range.price} {range.currency})</option>
                                    ))
                                }
                            </SelectInput>
                        </div>
                        <div className="col-lg-2 my-auto">
                            <button className="btn btn-primary btn-sm" onClick={addRange}>
                                <i className="dripicons-plus"/>
                            </button>
                        </div>

                    </div>


                    <div>
                        <CheckBoxInput
                            name="is_active"
                            placeholder="Show membership to public"
                            label="Show membership to public"
                            errors={errors.is_active}
                            value={values.is_active}
                            onChange={handleChange}
                        />
                        <p className="text-muted">
                            If the above option is selected the public will see the membership,
                            otherwise the public will not see the membership. You can edit it
                            later on from package settings.
                        </p>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                        <LoadingButton
                            type="submit"
                            className="btn btn-primary btn-sm"
                            loading={sending}
                        >
                            Save Changes
                        </LoadingButton>
                    </div>
                </form>

            )
        }

        return (
            <ModalForm
                modalID={modalID}
                title={title ? title : "Add new Package"}
                renderForm={renderForm}
                size="large"
            />
        )}

