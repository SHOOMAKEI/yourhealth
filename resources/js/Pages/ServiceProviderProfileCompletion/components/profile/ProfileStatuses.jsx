import React, {useEffect, useState} from "react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import FileInput from "@/Shared/FileInput";
import LoadingButton from "@/Shared/LoadingButton";

export default function ProfileStatuses({profile_status, user}) {
    const { errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [profile, setProfile] = useState({profile: profile_status});
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
                                                { profile_status.profile_info && (
                                                    <div className="timeline-item">
                                                        <i className={`mdi mdi-${profile_status.profile_info.is_complete?'check-bold':'close-thick'} bg-${profile_status.profile_info.is_complete?'primary':'danger'}-lighten text-${profile_status.profile_info.is_complete?'primary':'danger'} timeline-icon`}></i>
                                                        <div className={`timeline-item-${profile_status.profile_info.is_complete?'primary':'danger'}`}>
                                                            <a href="#" className={`text-${profile_status.profile_info.is_complete?'primary':'danger'} font-weight-bold mb-1 d-block pl-4`}>{profile_status.profile_info.info_category}</a>
                                                            <small className="pl-4">{profile_status.profile_info.remark}</small>
                                                            <p className="mb-0 pb-2">
                                                                <small className="text-muted pl-4">{profile_status.profile_info.last_updated_at}</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                                { profile_status.company_profile_info && (
                                                    <div className="timeline-item">
                                                        <i className={`mdi mdi-${profile_status.profile_info.is_complete?'check-bold':'close-thick'} bg-${profile_status.company_profile_info.is_complete?'primary':'danger'}-lighten text-${profile_status.company_profile_info.is_complete?'primary':'danger'} timeline-icon`}></i>
                                                        <div className={`timeline-item-${profile_status.company_profile_info.is_complete?'primary':'danger'}`}>
                                                            <a href="#" className={`text-${profile_status.company_profile_info.is_complete?'primary':'danger'} font-weight-bold mb-1 d-block pl-4`}>{profile_status.company_profile_info.info_category}</a>
                                                            <small className="pl-4">{profile_status.company_profile_info.remark}</small>
                                                            <p className="mb-0 pb-2">
                                                                <small className="text-muted pl-4">{profile_status.company_profile_info.last_updated_at}</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                                { profile_status.education_qualification && (
                                                    <div className="timeline-item">
                                                        <i className={`mdi mdi-${profile_status.profile_info.is_complete?'check-bold':'close-thick'} bg-${profile_status.education_qualification.is_complete?'primary':'danger'}-lighten text-${profile_status.education_qualification.is_complete?'primary':'danger'} timeline-icon`}></i>
                                                        <div className={`timeline-item-${profile_status.education_qualification.is_complete?'primary':'danger'}`}>
                                                            <a href="#" className={`text-${profile_status.education_qualification.is_complete?'primary':'danger'} font-weight-bold mb-1 d-block pl-4`}>{profile_status.education_qualification.info_category}</a>
                                                            <small className="pl-4">{profile_status.education_qualification.remark}</small>
                                                            <p className="mb-0 pb-2">
                                                                <small className="text-muted pl-4">{profile_status.education_qualification.last_updated_at}</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                                { profile_status.practice_license && (
                                                    <div className="timeline-item">
                                                        <i className={`mdi mdi-${profile_status.profile_info.is_complete?'check-bold':'close-thick'} bg-${profile_status.practice_license.is_complete?'primary':'danger'}-lighten text-${profile_status.practice_license.is_complete?'primary':'danger'} timeline-icon`}></i>
                                                        <div className={`timeline-item-${profile_status.practice_license.is_complete?'primary':'danger'}`}>
                                                            <a href="#" className={`text-${profile_status.practice_license.is_complete?'primary':'danger'} font-weight-bold mb-1 d-block pl-4`}>{profile_status.practice_license.info_category}</a>
                                                            <small className="pl-4">{profile_status.practice_license.remark}</small>
                                                            <p className="mb-0 pb-2">
                                                                <small className="text-muted pl-4">{profile_status.practice_license.last_updated_at}</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                                { profile_status.facility_profile_info && (
                                                    <div className="timeline-item">
                                                        <i className={`mdi mdi-${profile_status.profile_info.is_complete?'check-bold':'close-thick'} bg-${profile_status.facility_profile_info.is_complete?'primary':'danger'}-lighten text-${profile_status.facility_profile_info.is_complete?'primary':'danger'} timeline-icon`}></i>
                                                        <div className={`timeline-item-${profile_status.facility_profile_info.is_complete?'primary':'danger'}`}>
                                                            <a href="#" className={`text-${profile_status.facility_profile_info.is_complete?'primary':'danger'} font-weight-bold mb-1 d-block pl-4`}>{profile_status.facility_profile_info.info_category}</a>
                                                            <small className="pl-4">{profile_status.facility_profile_info.remark}</small>
                                                            <p className="mb-0 pb-2">
                                                                <small className="text-muted pl-4">{profile_status.facility_profile_info.last_updated_at}</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                                { profile_status.services && (
                                                    <div className="timeline-item">
                                                        <i className={`mdi mdi-${profile_status.profile_info.is_complete?'check-bold':'close-thick'} bg-${profile_status.services.is_complete?'primary':'danger'}-lighten text-${profile_status.services.is_complete?'primary':'danger'} timeline-icon`}></i>
                                                        <div className={`timeline-item-${profile_status.services.is_complete?'primary':'danger'}`}>
                                                            <a href="#" className={`text-${profile_status.services.is_complete?'primary':'danger'} font-weight-bold mb-1 d-block pl-4`}>{profile_status.services.info_category}</a>
                                                            <small className="pl-4">{profile_status.services.remark}</small>
                                                            <p className="mb-0 pb-2">
                                                                <small className="text-muted pl-4">{profile_status.services.last_updated_at}</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                                { profile_status.profile_submission && (
                                                    <div className="timeline-item">
                                                        <i className={`mdi mdi-${profile_status.profile_submission.is_complete?'check-bold':'close-thick'} bg-${profile_status.profile_submission.is_complete?'primary':'danger'}-lighten text-${profile_status.profile_submission.is_complete?'primary':'danger'} timeline-icon`}></i>
                                                        <div className={`timeline-item-${profile_status.profile_submission.is_complete?'primary':'danger'}`}>
                                                            <a href="#" className={`text-${profile_status.profile_submission.is_complete?'primary':'danger'} font-weight-bold mb-1 d-block pl-4`}>{profile_status.profile_submission.info_category}</a>
                                                            <small className="pl-4">{profile_status.profile_submission.remark}</small>
                                                            <p className="mb-0 pb-2">
                                                                <small className="text-muted pl-4">{profile_status.profile_submission.last_updated_at}</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
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
                {
                    (!user.provider_profile.is_submitted &&
                    profile_status.profile_info.is_complete  &&
                    (user.provider_profile.account_category_type === 'company'?
                    profile_status?.company_profile_info.is_complete: true) &&
                    (user.provider_profile.account_category_type === 'individual'?
                    (profile_status?.education_qualification.is_complete &&
                    profile_status?.practice_license.is_complete):true ) &&
                    (user.provider_profile.account_category_type === 'facility' ||
                    user.provider_profile.account_category_type === 'company')?
                    profile_status?.facility_profile_info.is_complete:profile_status.services)?
                        <InertiaLink href={route('profileSubmission.submit')} className="btn btn-primary btn-sm">
                        <i className="mdi mdi-briefcase-check-outline"></i> Submit Profile for Verification
                    </InertiaLink>: null
                }

            </div>
        </div>
        </div>
    )
}
