import AddQualificationModal, { QualificationsValues } from '@pages/service-providers-registration/components/profile/AddQualificationModal'
import { useEffect, useState } from 'react'

// import { QUERY_EDUCATION_QUALIFICATION } from '@pages/utils/Query'
// import { useApi } from '@pages/utils/ApolloClient'

export default function Qualifications() {
    const [queryQualifications, queryQualificationsResponse] = useApi({query: QUERY_EDUCATION_QUALIFICATION});
    const [qualifications, setQualifications] = useState([]);

    useEffect(() => {
        let data = queryQualificationsResponse.data

        if (data && data.educationQualificationInfo) {
            setQualifications(data.educationQualificationInfo)
        }
    }, [queryQualificationsResponse.data])

    useEffect(() => {queryQualifications({})}, [])

    return (
        <div className="tab-pane fade" id="v-pills-qualifications" role="tabpanel"
             aria-labelledby="v-pills-qualifications-tab">
            <div className="row">
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
                            qualifications.map(qualification => (
                                <tr key={qualification.id}>
                                    <td>{qualification.award_title}</td>
                                    <td>{qualification.institution_name}</td>
                                    <td>
                                        <a href={`${qualification.attachment}`} className="btn btn-light">File <i className="uil-cloud-download ml-1"></i></a>
                                    </td>
                                    <td>
                                        <a href="javascript: void(0);" className="action-icon"> <i className="dripicons-trash"></i></a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
