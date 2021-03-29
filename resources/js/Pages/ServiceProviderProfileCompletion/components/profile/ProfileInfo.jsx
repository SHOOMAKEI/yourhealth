import ModalForm from "@/Pages/Utilities/ModalForm";
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import TextAreaInput from "@/Shared/TextAreaInput";
import FileInput from "@/Shared/FileInput";


export default function ProfileInfo({user}) {
    const [queryProfileInfo, queryProfileInfoResponse] = useApi({query: QUERY_PROVIDER_PROFILE_INFO});
    const [querySubLevels, querySubLevelsResponse] = useApi({query: QUERY_PROVIDER_SUB_LEVEL});
    const [updateProviderProfile, updateProviderProfileResponse] = useApi({query: UPDATE_PROVIDER_PROFILE});
    const [profileInfo, setProfileInfo] = useState<PersonalInformationValues>();

    useEffect(() => {
        let data = queryProfileInfoResponse.data;

        if (data && data.providerProfileInfo) {
            setProfileInfo(data.providerProfileInfo)
        }

    }, [queryProfileInfoResponse.data])

    useEffect(() => {
        let data = updateProviderProfileResponse.data;

        if (data && data.updateProviderProfile) {
            setProfileInfo(data.updateProviderProfile)
        }

    }, [updateProviderProfileResponse.data])

    useEffect(() => {
        queryProfileInfo({})
        querySubLevels({})
    }, [])

    const initialValues: PersonalInformationValues = {
        address: "",
        bio: "",
        dob: "",
        gender: "",
        alternative_mobile_number: "",
        email: "",
        first_name: "",
        last_name: "",
        middle_name: "",
        mobile_number: "",
        physical_address: "",
        title: "",
        username: "",
        provider_sub_level_id: ""
    }

    function onSubmit(values: PersonalInformationValues, { setSubmitting } : FormikHelpers<PersonalInformationValues>) {
        let updatedProfileInfo = {
            address: values.address,
            bio: values.bio,
            dob: `${values.dob} 00:00:00`,
            gender: values.gender,
            alternative_mobile_number: values.alternative_mobile_number,
            email: values.email,
            first_name: values.first_name,
            last_name: values.last_name,
            middle_name: values.middle_name,
            mobile_number: values.mobile_number,
            physical_address: values.physical_address,
            title: values.title,
            username: values.username,
            provider_sub_level_id: values.provider_sub_level_id
        }

        updateProviderProfile({variables: {input: updatedProfileInfo}})
    }

    return (
        <div className="tab-pane fade active show" id="v-pills-profile" role="tabpanel"
             aria-labelledby="v-pills-profile-tab">
            {
                (queryProfileInfoResponse.called && queryProfileInfoResponse.loading) ||
                (updateProviderProfileResponse.called && updateProviderProfileResponse.loading) ?
                    <Spinner /> :
                    (
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={PersonalInformationSchema}
                        >
                            {({ errors, touched, setFieldValue }) => {

                                useEffect(() => {
                                    if (queryProfileInfoResponse.data && querySubLevelsResponse.data) {
                                        setFieldValue('title', profileInfo?.title || '');
                                        setFieldValue('first_name', profileInfo?.first_name || '');
                                        setFieldValue('middle_name', profileInfo?.middle_name || '');
                                        setFieldValue('last_name', profileInfo?.last_name || '');
                                        setFieldValue('username', profileInfo?.username || '');
                                        setFieldValue('mobile_number', profileInfo?.mobile_number || '');
                                        setFieldValue('alternative_mobile_number', profileInfo?.alternative_mobile_number || '');
                                        setFieldValue('email', profileInfo?.email || '');
                                        setFieldValue('address', profileInfo?.address || '');
                                        setFieldValue('physical_address', profileInfo?.physical_address || '');
                                        setFieldValue('dob', profileInfo?.dob && profileInfo?.dob.split(' ')[0] || '');
                                        setFieldValue('gender', profileInfo?.gender || 'Male');
                                        setFieldValue('bio', profileInfo?.bio || 'No Bio');
                                        setFieldValue('provider_sub_level_id', querySubLevelsResponse.data.provider_sub_levels[0].id)
                                    }
                                }, [queryProfileInfoResponse.data, querySubLevelsResponse.data]);

                                return (
                                    <Form>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="title">Title</label>
                                                    <Field as="select" name="title" id="title" className="form-control">
                                                        <option value="Mr">Mr</option>
                                                        <option value="Mrs">Mrs</option>
                                                        <option value="Dr">Dr</option>
                                                        <option value="Nurse">Nurse</option>
                                                        <option value="Prof">Prof</option>
                                                    </Field>
                                                    {errors.title && touched.title ? <FormInputError title="Title error" message={errors.title} /> : null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="first_name">First name</label>
                                                    <Field id="first_name" name="first_name" placeholder="John" type="text" className="form-control"/>
                                                    {errors.first_name && touched.first_name ? <FormInputError title="First name error" message={errors.first_name} /> : null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="last_name">Last name</label>
                                                    <Field id="last_name" name="last_name" placeholder="doe" type="text" className="form-control"/>
                                                    {errors.last_name && touched.last_name ? <FormInputError title="Last name error" message={errors.last_name} /> : null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="phoneNumber">Phone number</label>
                                                    <Field id="mobile_number" name="mobile_number" placeholder="+255 XXX XXX XXX" type="text" className="form-control" disabled={true}/>
                                                    {errors.mobile_number && touched.mobile_number ? <FormInputError title="Phone number error" message={errors.mobile_number} /> : null}
                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="address">Address</label>
                                                    <Field id="address" name="address" placeholder="P.O.Box 12345" type="text" className="form-control"/>
                                                    {errors.address && touched.address ? <FormInputError title="Address error" message={errors.address} /> : null}
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="gender">Gender</label>
                                                    <Field as="select" name="gender" id="gender" className="form-control">
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </Field>
                                                    {errors.gender && touched.gender ? <FormInputError title="Gender error" message={errors.gender} /> : null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="dob">Date</label>
                                                    <Field className="form-control" id="dob" type="date" name="dob" />
                                                    {errors.dob && touched.dob ? <FormInputError title="Dob error" message={errors.dob} /> : null}
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="username">Username</label>
                                                    <Field id="username" name="username" placeholder="John" type="text" className="form-control"/>
                                                    {errors.username && touched.username ? <FormInputError title="Username error" message={errors.username} /> : null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="middle_name">Middle name</label>
                                                    <Field id="middle_name" name="middle_name" placeholder="well" type="text" className="form-control"/>
                                                    {errors.middle_name && touched.middle_name ? <FormInputError title="Middle name error" message={errors.middle_name} /> : null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email address</label>
                                                    <Field id="email" name="email" placeholder="email@example.com" type="text" className="form-control" disabled={true}/>
                                                    {errors.email && touched.email ? <FormInputError title="Email error" message={errors.email} /> : null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="alternative_mobile_number">Alternate Phone number</label>
                                                    <Field id="alternative_mobile_number" name="alternative_mobile_number" placeholder="+255 XXX XXX XXX" type="text" className="form-control"/>
                                                    {errors.alternative_mobile_number && touched.alternative_mobile_number ? <FormInputError title="Alternate Phone number error" message={errors.alternative_mobile_number} /> : null}
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="physical_address">Physical address</label>
                                                    <Field id="physical_address" name="physical_address" placeholder="Masaki, Dar es salaam, Tanzania" type="text" className="form-control"/>
                                                    {errors.physical_address && touched.physical_address ? <FormInputError title="Physical address error" message={errors.physical_address} /> : null}
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="provider_sub_level_id">Provider Sublevel</label>
                                                    <Field as="select" name="provider_sub_level_id" id="provider_sub_level_id" className="form-control">
                                                        {
                                                            querySubLevelsResponse.called && queryProfileInfoResponse.loading ?
                                                                <option value="Mr">Loading...</option> :
                                                                querySubLevelsResponse.data && (
                                                                    querySubLevelsResponse.data.provider_sub_levels.map((sublevel: {id: string; name: string;}) => (
                                                                        <option value={sublevel.id} selected>{sublevel.name}</option>
                                                                    ))
                                                                )
                                                        }
                                                        <option value="Mrs">Mrs</option>
                                                        <option value="Dr">Dr</option>
                                                        <option value="Dr">Nurse</option>
                                                        <option value="Dr">Prof</option>
                                                    </Field>
                                                    {errors.provider_sub_level_id && touched.provider_sub_level_id ? <FormInputError title="Sublevel error" message={errors.provider_sub_level_id} /> : null}
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="bio">Bio</label>
                                                    <Field id="bio" name="bio" placeholder="Bio description" as="textarea" className="form-control" rows={4}/>
                                                    {errors.bio && touched.bio ? <FormInputError title="Bio error" message={errors.bio} /> : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button className="btn btn-primary" type="submit"> Submit </button>
                                        </div>
                                    </Form>
                                )
                        }}
                        </Formik>
                    )
            }
        </div>
    )
}

