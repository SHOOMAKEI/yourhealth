import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import FirstForm from './facilityForms/FirstForm'
import SecondForm from './facilityForms/SecondForm'
import ThirdForm from './facilityForms/ThirdForm'
import {useEffect} from "react/cjs/react.production.min";


export default function FacilityRegister() {
        const  { provider_sub_levels } = usePage().props;
        const [stepNumber, setStepNumber] = useState(1);
        const [values, setValues] = useState({})
        const [sending, setSending] = useState(false);

        // useEffect(() => {
        //     if (sending) {
        //         handleSubmit();
        //     }
        // }, [sending]);

     function createInputData({form_number, form_one_data, form_two_data, form_three_data}) {
        if(form_number === 1) {
            setValues({
                ...values,
                vrn: form_one_data?.facility_vrn,
                //vrn_attachment: form_one_data?.owner_vrn_attachment,
                tin: form_one_data?.facility_tin,
                //tin_attachment: form_one_data?.owner_vrn_attachment,
                name: form_one_data?.facility_name,
                provider_sub_level_id: form_one_data?.provider_sub_level_id,
                account_category: "service-provider",
                account_category_type: "facility",
            })

            setStepNumber(2)
        }

        if (form_number === 2) {
            setValues({
                ...values,
                first_name: form_two_data?.first_name,
                middle_name: form_two_data?.middle_name,
                last_name: form_two_data?.last_name,
                email: form_two_data?.email,
                mobile_number: form_two_data?.mobile_number,
                ownership_type: form_two_data?.ownership_type,
                password: form_two_data?.password,
                password_confirmation: form_two_data?.password_confirmation,
                send_form_two:form_two_data?.send_form_two,

                // // incase the user owns the facility themselves

            })

            if (form_two_data?.ownership_type === 'other') {
                setStepNumber(3)

            } else {
                if(values?.send_form_two){
                    handleSubmit();
                }

            }
        }

        if (form_number === 3) {
              setValues({
                ...values,
                owner_first_name: form_three_data?.owner_first_name,
                owner_middle_name: form_three_data?.owner_middle_name,
                owner_last_name: form_three_data?.owner_last_name,
                owner_email: form_three_data?.owner_email,
                owner_mobile_number: form_three_data?.owner_mobile_number,
                send_form: form_three_data?.send_form
            })

            if(values?.send_form){
                handleSubmit();
            }

        }
    }


    function handleSubmit() {
        // e.preventDefault();
        setSending(true);
        Inertia.post(route('account.create'), values).then(() => {
            setSending(false);
        });
    }

    return (
        <div>
            <div className="row mb-3">
                <div className="col">
                    <InertiaLink href={route('register')}>
                        <a className="btn btn-light">
                            <i className=" uil-arrow-left mr-1"></i>
                            Go to registration categories
                        </a>
                    </InertiaLink>
                </div>
            </div>

            <div style={{display: ((stepNumber === 1)) ? 'block': 'none'}}>
                <FirstForm callback={createInputData} data={provider_sub_levels} />
            </div>
            <div style={{display: ((stepNumber === 2)) ? 'block': 'none'}}>
                <SecondForm callback={createInputData} goBack={setStepNumber} />
            </div>
            <div style={{display: ((stepNumber === 3)) ? 'block': 'none'}}>
                <ThirdForm callback={createInputData} goBack={setStepNumber} />
            </div>

        </div>
    )
}
