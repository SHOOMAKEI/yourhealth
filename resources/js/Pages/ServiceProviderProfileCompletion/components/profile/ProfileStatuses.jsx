import React, {useEffect, useState} from "react";
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import FileInput from "@/Shared/FileInput";
import LoadingButton from "@/Shared/LoadingButton";

export default function ProfileStatuses({profile_status}) {
    const { errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [profile, setProfile] = useState({profile: {...profile_status}});
    const [values, setValues] = useState({
        profile_photo: '',

    });

    useEffect(() => {
        setProfile({profile: profile_status})
    }, [profile_status])

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
        Inertia.post(route('personalInfo.uploadPhoto'), values).then(() => {
            setSending(false);
        });
    }


    function handleFileUpload(field, file) {
        setValues(values => ({
            ...values,
            [field]: file
        }));
    }


    return (

        <div className="tab-pane fade" id="v-pills-submission" role="tabpanel"
             aria-labelledby="v-pills-submission-tab">
            <form onSubmit={handleSubmit}>
                <FileInput
                    name="profile_photo"
                    type="text"
                    placeholder="Profile Photo"
                    label="Profile Photo"
                    errors={errors.profile_photo}
                    value={values.profile_photo}
                    callback={handleFileUpload}
                />
                <div className="form-group mb-0 text-right">
                    <LoadingButton
                        type="submit"
                        className="btn btn-primary btn-sm"
                        loading={sending}
                    >
                        Upload
                    </LoadingButton>
                </div>
            </form>

        <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="">
                <div className="card-body">
                    <h4 className="header-title mb-2">Profile Completion Status</h4>

                    <div data-simplebar="init" style={{maxHeight: 424+'px'}}>
                        <div className="simplebar-wrapper" style={{margin: 0+'px'}}>
                            <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer"></div>
                            </div>
                            <div className="simplebar-mask">
                                <div className="simplebar-offset" style={{right: 0 +'px', bottom: 0+'px'}}>
                                    <div className="simplebar-content-wrapper"
                                         style={{height: 'auto', overflow: 'hidden scroll'}}>
                                        <div className="simplebar-content" style={{padding: 0 +'px'}}>
                                            <div className="timeline-alt pb-0">
                                                { profile.profile_info && profile.profile_info (
                                                    <div className="timeline-item">
                                                        <i className={`mdi mdi-upload bg-${profile.profile_info.is_complete?'primary':'danger'}-lighten text-${profile.profile_info.is_complete?'primary':'danger'} timeline-icon`}></i>
                                                        <div className={`timeline-item-${profile.profile_info.is_complete?'primary':'danger'}`}>
                                                            <a href="#" className={`text-${profile.profile_info.is_complete?'primary':'danger'} font-weight-bold mb-1 d-block`}>{profile.profile_info.info_category}</a>
                                                            <small>{profile.profile_info.remark}</small>
                                                            <p className="mb-0 pb-2">
                                                                <small className="text-muted">{profile.profile_info.last_updated_at}</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                                {console.log(profile.profile_info)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="simplebar-placeholder" style={{width: 'auto', height: 600+'px'}}></div>
                        </div>
                        <div className="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}>
                            <div className="simplebar-scrollbar" style={{width: 0 + 'px', display: 'none'}}></div>
                        </div>
                        <div className="simplebar-track simplebar-vertical" style={{visibility: 'hidden'}}>
                            <div className="simplebar-scrollbar"
                                 style={{height: 299 + 'px', transform: 'translate3d(0px, 0px, 0px)', display: 'block'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
