import ModalForm from "@/Pages/Utilities/ModalForm";
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import TextAreaInput from "@/Shared/TextAreaInput";
import FileInput from "@/Shared/FileInput";
import SelectInput from "@/Shared/SelectInput";


export default function ProfileInfo({user}) {

    const [queryProfileInfo, queryProfileInfoResponse] = useApi({query: QUERY_PROVIDER_PROFILE_INFO});
    const [querySubLevels, querySubLevelsResponse] = useApi({query: QUERY_PROVIDER_SUB_LEVEL});
    const [updateProviderProfile, updateProviderProfileResponse] = useApi({query: UPDATE_PROVIDER_PROFILE});
    const [profileInfo, setProfileInfo] = useState();

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

    const initialValues = {
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

    function onSubmit(values, { setSubmitting } ) {
        let updatedProfileInfo = {
            'title': profileInfo?.title || '',
            'first_name': profileInfo?.first_name || '',
            'middle_name': profileInfo?.middle_name || '',
            'last_name': profileInfo?.last_name || '',
            'username': profileInfo?.username || '',
            'mobile_number': profileInfo?.mobile_number || '',
            'alternative_mobile_number': profileInfo?.alternative_mobile_number || '',
            'email': profileInfo?.email || '',
            'address': profileInfo?.address || '',
            'physical_address': profileInfo?.physical_address || '',
            'dob': profileInfo?.dob && profileInfo?.dob.split(' ')[0] || '',
            'gender': profileInfo?.gender || 'Male',
            'bio': profileInfo?.bio || 'No Bio',
            'provider_sub_level_id': querySubLevelsResponse.data.provider_sub_levels[0].id,
    }

        updateProviderProfile({variables: {input: updatedProfileInfo}})
    }

    return (
        <div className="tab-pane fade active show" id="v-pills-profile" role="tabpanel"
             aria-labelledby="v-pills-profile-tab">
            <form>
                <div className="row">
                    <div className="col-6">
                        <SelectInput
                            name="name"
                            type="text"
                            placeholder="Facility Name"
                            label="Facility Name"
                            errors={errors.name}
                            value={values.name}
                            onChange={handleChange}
                        >
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Dr">Dr</option>
                            <option value="Nurse">Nurse</option>
                            <option value="Prof">Prof</option>
                        </SelectInput>
                        <TextInput
                            name="first_name"
                            type="text"
                            placeholder="First Name"
                            label="First Name"
                            errors={errors.first_name}
                            value={values.first_name}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="last_name"
                            type="text"
                            placeholder="Last Name"
                            label="Last Name"
                            errors={errors.last_name}
                            value={values.last_name}
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
                        <SelectInput
                            name="gender"
                            type="text"
                            placeholder="Gender"
                            label="Gender"
                            errors={errors.gender}
                            value={values.gender}
                            onChange={handleChange}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </SelectInput>
                        <TextInput
                            name="date"
                            type="date"
                            placeholder="Date of Birth"
                            label="Date of Birth"
                            errors={errors.date}
                            value={values.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-6">
                        <TextInput
                            name="username"
                            type="text"
                            placeholder="Username"
                            label="Username"
                            errors={errors.username}
                            value={values.username}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="middle_name"
                            type="text"
                            placeholder="Middle Name"
                            label="Middle Name"
                            errors={errors.middle_name}
                            value={values.middle_name}
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
                            placeholder="Alternate Phone number"
                            label="Alternate Phone number"
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

                        <SelectInput
                            name="provider_sub_level_id"
                            type="text"
                            placeholder="Provider Sub Level"
                            label="Provider Sub Level"
                            errors={errors.provider_sub_level_id}
                            value={values.provider_sub_level_id}
                            onChange={handleChange}
                        >
                            <option value="Mrs">Mrs</option>
                            <option value="Dr">Dr</option>
                            <option value="Dr">Nurse</option>
                            <option value="Dr">Prof</option>
                        </SelectInput>
                        <TextInput
                            name="bio"
                            type="text"
                            placeholder="Bio"
                            label="Bio"
                            errors={errors.bio}
                            value={values.bio}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group mb-0 text-right">
                    <LoadingButton
                        type="submit"
                        className="btn btn-primary btn-block"
                        loading={sending}
                    >
                    Save Changes
                    </LoadingButton>
                </div>
            </form>
        </div>
    )
}
