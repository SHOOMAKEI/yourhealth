import React, { useEffect, useState } from 'react'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";

export default function Qualifications({provider}) {
    const [qualifications, setQualifications] = useState([])
    const[sending, setSending] = useState(false)

    useEffect(() => {
        setSending(true)
        axios.get(route('service_provider_profiles.qualifications',provider.id))
            .then( resp => {
                setQualifications(resp.data)
                setSending(false)
            })
    }, [provider])

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
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
