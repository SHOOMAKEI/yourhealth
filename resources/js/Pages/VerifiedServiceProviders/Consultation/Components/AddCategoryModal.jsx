import React, {useEffect, useState} from 'react'
import SelectInput from "@/Shared/SelectInput";
import {usePage} from "@inertiajs/inertia-react";
import TextInput from "@/Shared/TextInput";
import {Inertia} from "@inertiajs/inertia";
import LoadingButton from "@/Shared/LoadingButton";
import TimeInput from "@/Shared/TimeInput";


export default function CreateSchedule({facilities, days, user}){
    const {errors, status, alertType} = usePage().props
    const [facilitiesData, setFacilitiesData] = useState(facilities);
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
         name: '',
        from:"4:30:45 PM" ,
        to: "4:30:45 PM",
        interval: 15,
        day_id:null
    });

    useEffect(()=>{
        setFacilitiesData(facilities)
    },[facilities,days])

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
        if(user.provider_profile.account_category_type === 'individual')
        {
            Inertia.post(route('calender.store'), values).then(() => {
                setSending(false);
            });
        }else {
            Inertia.post(route('calender.facility_store'), values).then(() => {
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


    return(

        <div className="modal fade" id="add-category" role="dialog" aria-labelledby="mySmallModalLabel" data-backdrop="static" tabIndex="-1"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                <div className="modal-content ">
                    <div className="modal-header border-bottom-0 d-block">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×
                        </button>
                        <h4 className="modal-title">Set Schedule</h4>
                    </div>
                    <div className="modal-body p-4">
                        {

                            ( user.provider_profile.account_category_type === 'company' ||
                                user.provider_profile.account_category_type === 'facility')
                            && (

                                <SelectInput
                                    name="facility_id"
                                    label="Select Facility"
                                    type="text"
                                    errors={errors.facility_id}
                                    value={values.facility_id}
                                    onChange={handleChange}
                                >
                                    {facilities && facilities.map((facility)=>(
                                        <option value={facility.id} key={facility.id}>{facility.name}</option>
                                    ))}
                                </SelectInput>
                            )
                        }
                        <form onSubmit={handleSubmit}>
                            <TextInput
                                name="name"
                                type="text"
                                placeholder="Session Name"
                                label="Session Name"
                                errors={errors.name}
                                value={values.name}
                                onChange={handleChange}
                            />
                            <TimeInput
                                name="from"
                                type="time"
                                placeholder="From Time"
                                label="From Time"
                                errors={errors.from}
                                value={values.from}
                                onChange={handleChange}
                            />
                            <TimeInput
                                name="to"
                                type="time"
                                placeholder="To Time"
                                label="To Time"
                                errors={errors.to}
                                value={values.to}
                                onChange={handleChange}
                            />
                            <TextInput
                                name="interval"
                                type="text"
                                placeholder="Interval Minutes"
                                label="Interval Minutes"
                                errors={errors.interval}
                                value={values.interval}
                                onChange={handleChange}
                            />
                            <SelectInput
                                name="day_id"
                                type="text"
                                placeholder="Day"
                                label="Day"
                                errors={errors.day_id}
                                value={values.day_id}
                                onChange={handleChange}
                            >
                                {days.map((day)=>(
                                    <option value={day.id} key={day.id}>{day.name}</option>
                                ))}
                            </SelectInput>
                            <div className="text-right">
                                <button type="button" className="btn btn-light mr-3" data-dismiss="modal">Close
                                </button>
                                <LoadingButton
                                    type="submit"
                                    className="btn btn-primary btn-sm"
                                    loading={sending}
                                >
                                    Save Changes
                                </LoadingButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                    </div>
    )
}
