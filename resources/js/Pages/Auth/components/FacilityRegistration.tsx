import { useEffect, useState } from 'react';

import FirstForm from '@pages/auth/components/facilityForms/FirstForm'
import { GET_FACILITY_SUB_LEVEL } from '@pages/utils/Query';
import Link from 'next/link';
import { REGISTER_USER } from '@pages/utils/Mutations';
import SecondForm from './facilityForms/SecondForm';
import Spinner from './Spinner';
import ThirdForm from './facilityForms/ThirdForm';
import { useApi } from '@pages/utils/ApolloClient';
import { useRouter } from 'next/router';

interface FormOneValues {
    f_name: String;
    f_vrn: String;
    f_tin: String;
    // f_tin_attachment: string;
    // f_vrn_attachment: string;
    provider_sub_level_id: string;
}

interface FormTwoValues {
    f_email: String;
    f_password: String;
    f_first_name: String;
    f_middle_name: String;
    f_last_name: String;
    f_mobile_number: String;
    f_password_confirmation: String;
    ownership_type: 'other' | 'self';
}

interface FormThreeValues {
    f_email: String;
    f_first_name: String;
    f_middle_name: String;
    f_last_name: String;
    f_mobile_number: String;
}

export interface createInputDataValues {
    form_number: 1 | 2 | 3;
    form_one_data?: FormOneValues;
    form_two_data?: FormTwoValues;
    form_three_data?: FormThreeValues;
}


export default function FacilityRegister() {
        const [registerUser, {loading, errors, data, called}] = useApi({query: REGISTER_USER})
        const [getProviderSublevel, getProviderSublevelResponse] = useApi({query: GET_FACILITY_SUB_LEVEL})
        const [stepNumber, setStepNumber] = useState(1);
        const [input, setInput] = useState({})
        const router = useRouter()

    useEffect(() => {
        if (data && data.createAccount !== null) {
            router.push('/auth/login')
        }
    }, [data])

    function createInputData({form_number, form_one_data, form_two_data, form_three_data}: createInputDataValues) {
        if(form_number === 1) {
            setInput({
                ...input,
                vrn: form_one_data?.f_vrn,
                //vrn_attachment: form_one_data?.f_vrn_attachment,
                tin: form_one_data?.f_tin,
                //tin_attachment: form_one_data?.f_vrn_attachment,
                name: form_one_data?.f_name,
                provider_sub_level_id: form_one_data?.provider_sub_level_id,
                account_category: "service-provider",
                account_category_type: "facility",
            })

            setStepNumber(2)
        }

        if (form_number === 2) {
            setInput({
                ...input,
                first_name: form_two_data?.f_first_name,
                middle_name: form_two_data?.f_middle_name,
                last_name: form_two_data?.f_last_name,
                email: form_two_data?.f_email,
                mobile_number: form_two_data?.f_mobile_number,
                ownership_type: form_two_data?.ownership_type,
                password: form_two_data?.f_password,
                password_confirmation: form_two_data?.f_password_confirmation,

                // incase the user owns the facility themselves
                owner_first_name: form_two_data?.f_first_name,
                owner_middle_name: form_two_data?.f_middle_name,
                owner_last_name: form_two_data?.f_last_name,
                owner_email: form_two_data?.f_email,
                owner_mobile_number: form_two_data?.f_mobile_number,
            })

            if (form_two_data?.ownership_type === 'other') {
                setStepNumber(3)
            } else {
                registerUser({variables: {input: input}})
            }
        }

        if (form_number === 3) {
            setInput({
                ...input,
                owner_first_name: form_three_data?.f_first_name,
                owner_middle_name: form_three_data?.f_middle_name,
                owner_last_name: form_three_data?.f_last_name,
                owner_email: form_three_data?.f_email,
                owner_mobile_number: form_three_data?.f_mobile_number,
            })

            registerUser({variables: {input: input}})
        }
    }


    return (
        <div>
            <div className="row mb-3">
                <div className="col">
                    <Link href="/auth/Register">
                        <a className="btn btn-light">
                            <i className=" uil-arrow-left mr-1"></i>
                            Go to registration categories
                        </a>
                    </Link>
                </div>
            </div>

            {
                called && loading && <Spinner />
            }

            <div style={{display: ((stepNumber === 1) && !called && !loading) ? 'block': 'none'}}>
                <FirstForm callback={createInputData} />
            </div>

            <div style={{display: ((stepNumber === 2) && !called && !loading) ? 'block': 'none'}}>
                <SecondForm callback={createInputData} goBack={setStepNumber} />
            </div>

            <div style={{display: ((stepNumber === 3) && !called && !loading) ? 'block': 'none'}}>
                <ThirdForm callback={createInputData} goBack={setStepNumber} />
            </div>
       
        </div>
    )
}

