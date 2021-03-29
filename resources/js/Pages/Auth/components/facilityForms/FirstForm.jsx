import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import SelectInput from '@/Shared/SelectInput'
import LoadingButton from '@/Shared/LoadingButton'

// function FileUpload(props) {
//     const {field, form} = props;

//     const handleChange = async (e) => {
//       const file  =  e.currentTarget.files[0];
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       let base64;
//       reader.onload = await function(event) {
//           base64 = event.target?.result
//           form.setFieldValue(field.name, base64);
//       }
//     };

//     return (
//       <div>
//         <input type={'file'} onChange={(o) => handleChange(o)} className={'form-control'}/>
//       </div>
//     );
// }



// interface formProps {
//     callback: ({}: createInputDataValues) => void;
// }

export default function FirstForm({callback, data}) {
    const { errors, emailSentSuccessfully } = usePage().props;
	const [sending, setSending] = useState(false);
	const [values, setValues] = useState({
        facility_name: '',
        facility_tin: "",
        facility_vrn: "",
        provider_sub_level_id: '',
        // f_tin_attachment: '',
        // f_vrn_attachment: ''
    })


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
        callback({
            form_number: 1,
            form_one_data: values
        })
    }

    return (
            <form  onSubmit={handleSubmit}>
                <h4 className="text-dark-50 text-left mb-3 font-weight-bold">Facility Information</h4>
                <div className="row">
                    <div className="col-6">
                        <TextInput
                            name="facility_name"
                            type="text"
                            label="Facility Name"
                            placeholder="Facility Name"
                            errors={errors.facility_name}
                            value={values.facility_name}
                            onChange={handleChange}
                        />
                        <TextInput
                            name="facility_tin"
                            type="text"
                            label="TIN"
                            placeholder="TIN"
                            errors={errors.facility_tin}
                            value={values.facility_tin}
                            onChange={handleChange}
                        />
                        {/* <div className="form-group">
                            <label htmlFor="f_tin_attachment">TIN Attachment</label>
                            <Field id="f_tin_attachment" name="f_tin_attachment" component={FileUpload} />
                            {errors.f_tin_attachment && touched.f_tin_attachment ? <FormInputError title="Attachment error" message={errors.f_tin_attachment} /> : null}
                        </div> */}
                    </div>
                    <div className="col-6">
                    <SelectInput
                        name="provider_sub_level_id"
                        label="Facility type"
                        errors={errors.provider_sub_level_id}
                        value={values.provider_sub_level_id}
                        onChange={handleChange}
                    >
                        {
                            data.map((provider_sub_level) => (
                                <option value={provider_sub_level.id}  key={provider_sub_level.id}>{provider_sub_level.name}</option>
                            ))
                        }
                    </SelectInput>
                    <TextInput
                        name="facility_vrn"
                        type="text"
                        label="VRN"
                        placeholder="VRN"
                        errors={errors.facility_vrn}
                        value={values.facility_vrn}
                        onChange={handleChange}
                    />
                        {/* <div className="form-group">
                            <label htmlFor="f_vrn_attachment">VRN Attachment</label>
                            <Field id="f_vrn_attachment" name="f_vrn_attachment" component={FileUpload} />
                            {errors.f_vrn_attachment && touched.f_vrn_attachment ? <FormInputError title="Attachment error" message={errors.f_vrn_attachment} /> : null}
                        </div> */}
                        <div className="form-group mb-0 text-right">
                        <LoadingButton
                            type="submit"
                            className="btn btn-primary btn-block"
                            loading={sending}
                            >
                            Next
                        </LoadingButton>
                        </div>
                    </div>
                </div>
            </form>
    )
}

