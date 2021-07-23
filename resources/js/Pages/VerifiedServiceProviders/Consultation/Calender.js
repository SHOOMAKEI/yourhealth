import React from 'react'
import Layout from '@/Shared/Layout';
import AddCategoryModal from "@/Pages/VerifiedServiceProviders/Consultation/Components/AddCategoryModal";
import AddEventModal from "@/Pages/VerifiedServiceProviders/Consultation/Components/AddEventModal";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";

const Calender = () => {
    const {facilities, days, user} = usePage().props

    return(
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <h4 className="page-title">Calendar</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">

                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-3">
                                    <InertiaLink href={route('calender.create')}
                                       className="btn btn-lg font-16 btn-primary btn-block  ">
                                        <i className="mdi mdi-plus-circle-outline"/> Create Daily Schedule
                                    </InertiaLink>
                                    <div id="external-events" className="m-t-20">
                                        <br/>
                                            <p className="text-muted">Drag and drop your event or click in the
                                                calendar</p>
                                            <div className="external-event bg-success" data-class="bg-success">
                                                <i className="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"/>New
                                                Day(s) Off
                                            </div>
                                            <div className="external-event bg-primary" data-class="bg-info">
                                                <i className="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"/>Bookings
                                            </div>
                                            <div className="external-event bg-info" data-class="bg-info">
                                                <i className="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"/>Completed Bookings
                                            </div>
                                            <div className="external-event bg-warning" data-class="bg-warning">
                                                <i className="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"/>Rescheduled Bookings
                                            </div>
                                            <div className="external-event bg-danger" data-class="bg-danger">
                                                <i className="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"/>Canceled Bookings
                                            </div>
                                    </div>
                                    <div className="custom-control custom-checkbox mt-3">
                                        <input type="checkbox" className="custom-control-input" id="drop-remove"/>
                                            <label className="custom-control-label" htmlFor="drop-remove">Remove after
                                                drop</label>
                                    </div>

                                    <div className="mt-5 d-none d-xl-block">
                                        <h5 className="text-center">How It Works ?</h5>

                                        <ul className="pl-3">
                                            <li className="text-muted mb-3">
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                            </li>
                                            <li className="text-muted mb-3">
                                                Richard McClintock, a Latin professor at Hampden-Sydney College in
                                                Virginia, looked up one of the more obscure Latin words, consectetur,
                                                from a Lorem Ipsum passage.
                                            </li>
                                            <li className="text-muted mb-3">
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-9">
                                    <FullCalendar
                                        plugins={[ dayGridPlugin ]}
                                        initialView="dayGridMonth"
                                        weekends={true}
                                        headerToolbar={{
                                            left: 'prev,next today',
                                            center: 'title',
                                            right: 'dayGridMonth,dayGridWeek,dayGridDay'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <AddEventModal/>
                    <AddCategoryModal facilities={facilities} days={days} user={user}/>
                </div>
            </div>
        </>
    )
}

Calender.layout = page => <Layout children={page} />;

export default Calender;
