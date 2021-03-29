import AddQualificationModal, { QualificationsValues } from '@pages/service-providers-registration/components/profile/AddQualificationModal'
import { useEffect, useState } from 'react'

import { ADD_QUALIFICATION_MODAL_ID } from '@pages/constants'
import { DELETE_QUALIFICATION } from '@pages/utils/Mutations'
import Heading from '@pages/service-providers-registration/components/profile/Heading'
import { QUERY_EDUCATION_QUALIFICATION } from '@pages/utils/Query'
import Spinner from '@pages/auth/components/Spinner'
import { useApi } from '@pages/utils/ApolloClient'

export default function Qualifications({user}: any) {
    const [queryQualifications, queryQualificationsResponse] = useApi({query: QUERY_EDUCATION_QUALIFICATION});
    const [deleteQualification, deleteQualificationResponse] = useApi({query: DELETE_QUALIFICATION});
    const [qualifications, setQualifications] = useState<QualificationsValues[]>([]);

    useEffect(() => {
        let data = queryQualificationsResponse.data

        if (data && data.educationQualificationInfo) {
            setQualifications(data.educationQualificationInfo)
        }
    }, [queryQualificationsResponse.data])

    useEffect(() => {queryQualifications({})}, [])

    useEffect(() => {
        let data = deleteQualificationResponse.data

        if (data && data.deleteProviderQualification) {
            let newQualifications = qualifications.filter(qualification => {
                if (qualification.id !== data.deleteProviderQualification.id) {
                    return qualification
                }
            })
            
            setQualifications(newQualifications);
        }
    }, [deleteQualificationResponse.data])

    function searchQualifications() {

    }

    function _deleteQualification(id: string) {
        deleteQualification({variables: {qualification_id: id}})
    }

    function addAttachment(attachment: any) {
        let newQualifications = [...qualifications];
        newQualifications.push(attachment);
        setQualifications(newQualifications)
    }

    function renderAddSubcategoryModal() {
        return <AddQualificationModal modalID={ADD_QUALIFICATION_MODAL_ID} operation="add" callback={addAttachment} />
    }

    return (
        <div className="tab-pane fade" id="v-pills-qualifications" role="tabpanel"
             aria-labelledby="v-pills-qualifications-tab">

            <Heading 
                title="Qualifications" 
                modalID={ADD_QUALIFICATION_MODAL_ID} 
                buttonText="Add Qualification" 
                search={searchQualifications} 
                renderModal={renderAddSubcategoryModal}
            />

            <table className="table table-centered table-borderless mb-0">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Institution</th>
                        <th>Attachment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        queryQualificationsResponse.loading || deleteQualificationResponse.loading ?
                            <Spinner /> :
                            qualifications.map(qualification => (
                                <tr key={qualification.id}>
                                    <td>{qualification.award_title}</td>
                                    <td>{qualification.institution_name}</td>
                                    <td>
                                        <a href={`${qualification.attachment}`} className="btn btn-light">File <i className="uil-cloud-download ml-1"></i></a>
                                    </td>
                                    <td>
                                        <a href="javascript: void(0);" className="action-icon" onClick={() => _deleteQualification(qualification.id)}>
                                            <i className="dripicons-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

