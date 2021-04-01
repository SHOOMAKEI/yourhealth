import React, { useEffect, useState } from 'react'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";

export default function Qualifications() {
    const { qualifications } = usePage().props

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
                                        <InertiaLink href={`${qualification.attachment}`} className="btn btn-light">File <i className="uil-cloud-download ml-1"></i></InertiaLink>
                                    </td>
                                    <td>
                                        <InertiaLink href="#" className="action-icon"> <i className="dripicons-trash"></i></InertiaLink>
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
