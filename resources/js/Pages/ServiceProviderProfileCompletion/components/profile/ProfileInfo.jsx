import ModalForm from "@/Pages/Utilities/ModalForm";
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import TextAreaInput from "@/Shared/TextAreaInput";
import FileInput from "@/Shared/FileInput";
import SelectInput from "@/Shared/SelectInput";


export default function ProfileInfo({user, provider_sub_levels}) {

    const { errors, status, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        'title': user.provider_profile?.title || '',
        'first_name': user.provider_profile?.first_name || '',
        'middle_name': user.provider_profile?.middle_name || '',
        'last_name': user.provider_profile?.last_name || '',
        'username': user.provider_profile?.username || '',
        'mobile_number': user.provider_profile?.mobile_number || '',
        'alternative_mobile_number': user.provider_profile?.alternative_mobile_number || '',
        'email': user.provider_profile?.email || '',
        'address': user.provider_profile?.address || '',
        'physical_address': user.provider_profile?.physical_address || '',
        'dob': user.provider_profile?.dob && user.provider_profile?.dob.split(' ')[0] || '',
        'gender': user.provider_profile?.gender || 'Male',
        'bio': user.provider_profile?.bio || 'No Bio',
        'provider_sub_level_id': provider_sub_levels[0].id,
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
        Inertia.post(route('personalInfo.update'), values).then(() => {
            setSending(false);
        });
    }

    return (
        <>
        {
            status &&  (
                <div className={`alert alert-success alert-dismissible bg-primary text-white border-0 fade show`} role="alert">
                    <button type="button" className="close" >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <strong>Success - </strong> {status}
                </div>
        )
        }
        <div className="tab-pane fade active show" id="v-pills-profile" role="tabpanel"
             aria-labelledby="v-pills-profile-tab">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <SelectInput
                            name="title"
                            type="text"
                            placeholder="Title"
                            label="Title"
                            errors={errors.title}
                            value={values.title}
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
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </SelectInput>
                        <TextInput
                            name="dob"
                            type="date"
                            placeholder="Date of Birth"
                            label="Date of Birth"
                            errors={errors.dob}
                            value={values.dob}
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
                            placeholder="Alternative Phone number"
                            label="Alternative Phone number"
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
                            {provider_sub_levels.map((level)=>(
                                <option value={level.id} key={level.id}>{level.name}</option>
                            ))}
                        </SelectInput>
                        <TextAreaInput
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
                        className="btn btn-primary btn-sm"
                        loading={sending}
                    >
                    Save Changes
                    </LoadingButton>
                </div>
            </form>
        </div>
        </>
    )
}

