import React, {useEffect, useState} from 'react'
import SelectInput from "@/Shared/SelectInput";
import {usePage} from "@inertiajs/inertia-react";
import TextInput from "@/Shared/TextInput";
import {Inertia} from "@inertiajs/inertia";
import LoadingButton from "@/Shared/LoadingButton";
import TimeInput from "@/Shared/TimeInput";
import Layout from "@/Shared/Layout";
import ProviderSchedules from "@/Pages/VerifiedServiceProviders/Consultation/Components/ProviderSchedules";


function CreateSchedule({facilities, days, user}) {
    const {errors, status, alertType} = usePage().props
    const [facilitiesData, setFacilitiesData] = useState(facilities);
    const [selectedData, setSelectedData] = useState();
    const [daysData, setDaysData] = useState(days);
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        name: '',
        from: "",
        to: "",
        interval: 15,
        day_id: days[0]?.id,
        sessions: []
    });
    function checkIfUserIsCompany() {
        return (user.provider_profile.account_category_type === 'company' ||
            user.provider_profile.account_category_type === 'facility')
    }


    useEffect(() => {
        setFacilitiesData(facilities)
        setDaysData(days)

        if(checkIfUserIsCompany()){
            facilities.forEach((facility)=>{
                setValues((values)=>(
                    {...values, sessions:[...values.sessions, {...facility,sessions:[]}]}
                    ))
            })
        }
    }, [facilities, days])

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
        if (user.provider_profile.account_category_type === 'individual') {
            Inertia.post(route('calender.store'), values).then(() => {
                setSending(false);
            });
        } else {
            Inertia.post(route('calender.facility_store'), values).then(() => {
                setSending(false);
            });
        }

    }

    useEffect(() => {
        $(document).ready(function () {
            window.setTimeout(() => {
                $(".alert").fadeTo(2000, 500).slideUp(500, function () {
                    $(".alert").slideUp(500);
                });
            }, 2500)
        });
    }, [status, errors])

    function addSession(e) {
        e.preventDefault();

        // if (!(facilities.length > 0)) {
        //     console.log('clicked wrongly')
        //     setValues(values => ({
        //         ...values,
        //         sessions: [...values.sessions,
        //             {
        //                 ...user,
        //                 sessions: [...values.sessions.sessions, {
        //                     name: values.name,
        //                     from: values.from,
        //                     to: values.to,
        //                     interval: values.interval,
        //                     day: daysData.find(d => d.id == values.day_id),
        //                 }]
        //             }],
        //     }));
        // }

        if(facilities.length>0){
            console.log(selectedData, 'initial data')

            values.sessions.map(data => {
                if ( parseInt(data.id, 10) === parseInt(values.facility_id, 10)) {
                    console.log(data, 'data is found')
                    setSelectedData(data)
                }
            })
            console.log(selectedData, 'after updating state')

            // if(selectedData.id !== null || selectedData.id !== 'undefined' ){
            //     setSelectedData((selectedData)=>({
            //         ...selectedData,
            //         sessions:[ ...selectedData.sessions, {
            //             name: values.name,
            //             from: values.from,
            //             to: values.to,
            //             interval: values.interval,
            //             day: daysData.find(d => d.id == values.day_id),
            //         }]
            //     }))
            // }


            // if(selectedData.id !== null){
            //     setValues((values)=>({...values,
            //         sessions:[...values.sessions,{selectedData}]
            //     }))
            // }

        }


    }



    function removeSession(e, session) {
        e.preventDefault();

        // if (values.sessions.sessions == 0) {
        //     setValues(values => ({
        //         ...values,
        //         sessions: [],
        //
        //     }));
        // }
        // setValues(values => ({
        //     ...values,
        //     sessions: [...values.sessions.sessions.filter(fet => fet.id != session.id)],
        //
        // }));

    }


    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-title-box">
                        <h4 className="page-title">Create Schedules</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    {

                        (user.provider_profile.account_category_type === 'company' ||
                            user.provider_profile.account_category_type === 'facility')
                        && (

                            <SelectInput
                                name="facility_id"
                                label="Select Facility"
                                type="text"
                                errors={errors.facility_id}
                                value={values.facility_id  || ""}
                                onChange={handleChange}
                            >
                                {facilities && facilities.map((facility) => (
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
                            value={values.name || ""}
                            onChange={handleChange}
                        />
                        <TimeInput
                            name="from"
                            type="time"
                            placeholder="From Time"
                            label="From Time"
                            errors={errors.from}
                            value={values.from || ""}
                            onChange={handleChange}
                        />
                        <TimeInput
                            name="to"
                            type="time"
                            placeholder="To Time"
                            label="To Time"
                            errors={errors.to}
                            value={values.to || ""}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="interval"
                            type="text"
                            placeholder="Interval Minutes"
                            label="Interval Minutes"
                            errors={errors.interval}
                            value={values.interval  || ""}
                            onChange={handleChange}
                        />
                        <SelectInput
                            name="day_id"
                            type="text"
                            placeholder="Day"
                            label="Day"
                            errors={errors.day_id}
                            value={values.day_id  || ""}
                            onChange={handleChange}
                        >
                            {days.map((day) => (
                                <option value={day.id} key={day.id}>{day.name}</option>
                            ))}
                        </SelectInput>
                        <div className="text-right">
                            <button className="btn btn-primary btn-sm mr-4" onClick={addSession}>
                                <i className="dripicons-plus"/> Add Session
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
                <div className="col-lg-6 pt-4">
                    {values.sessions && values.sessions.length > 0 && (
                      <ProviderSchedules sessions={values.sessions} user={user} callback={removeSession}/>
                    )}
                </div>
            </div>
        </>
    )
}

CreateSchedule.layout = page =>
    <Layout children={page}/>
;

export default CreateSchedule;
