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

export default function FirstForm({callback}) {
    const { errors, emailSentSuccessfully } = usePage().props;
	const [sending, setSending] = useState(false);
	const [values, setValues] = useState({
        f_name: '',
        f_tin: "",
        f_vrn: "",
        provider_sub_level_id: '',
        // f_tin_attachment: '',
        // f_vrn_attachment: ''
    })
        // const [getProviderSublevel, getProviderSublevelResponse] = useApi({query: GET_FACILITY_SUB_LEVEL})

    // useEffect(() => {
    //     getProviderSublevel({})
    // }, [])

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
        Inertia.post(route('login'), values).then(() => {
            setSending(false);
        });
    }


    return (
        <div>
            <>
                {({ errors, touched }) => (
                    <form  onSubmit={onSubmit}>
                        <h4 className="text-dark-50 text-left mb-3 font-weight-bold">Facility Information</h4>
                        <div className="row">
                            <div className="col-6">
                                <TextInput
                                    name="facility_name"
                                    type="text"
                                    label="Facility Name"
                                    placeholder="Facility Name"
                                    errors={errors.ind_first_name}
                                    value={values.ind_first_name}
                                    onChange={handleChange}
                                />
                                <TextInput
                                    name="tin"
                                    type="text"
                                    label="TIN"
                                    placeholder="TIN"
                                    errors={errors.ind_first_name}
                                    value={values.ind_first_name}
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
                                name="ownership_type"
                                label="Facility type"
                                errors={errors.ownership_type}
                                value={values.ownership_type}
                                onChange={handleChange}
                            >
                                <option value="self" selected>Self ownership</option>
                                <option value="other">Registration for someone</option>
                            </SelectInput>
                            <TextInput
                                name="vrn"
                                type="text"
                                label="VRN"
                                placeholder="VRN"
                                errors={errors.vrn}
                                value={values.vrn}
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
                                    Save Changes
                                </LoadingButton>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </>
        </div>
    )
}

