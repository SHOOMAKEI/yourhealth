import React, {useEffect, useState} from 'react'

export default function Company({provider}) {
    const [company, setCompany] = useState({})
    const[sending, setSending] = useState(false)

    useEffect(() => {
        setSending(true)
        axios.get(route('service_provider_profiles.company',provider.id))
            .then( resp => {
                setCompany(resp.data)
                setSending(false)
            })


    }, [provider])

    return (
        <div className="tab-pane fade" id="v-pills-company" role="tabpanel"
             aria-labelledby="v-pills-company-tab">
            <div className="row">
                <div className="col-6">
                    <table className="table table-centered mb-0">
                        <tr>
                            <td><strong>Name</strong></td>
                            <td>{company?.name}</td>
                        </tr>
                        <tr>
                            <td><strong>Trading name</strong></td>
                            <td>{company?.trading_name}</td>
                        </tr>
                        <tr>
                            <td><strong>TIN</strong></td>
                            <td>{company?.tin}</td>
                        </tr>
                        <tr>
                            <td><strong>VRN</strong></td>
                            <td>{company?.vrn}</td>
                        </tr>
                        <tr>
                            <td><strong>Website</strong></td>
                            <td>{company?.website}</td>
                        </tr>
                        <tr>
                            <td><strong>Registration number</strong></td>
                            <td>{company?.registration_number}</td>
                        </tr>
                        <tr>
                            <td><strong>Registration date</strong></td>
                            <td>{company?.registration_date}</td>
                        </tr>
                    </table>
                </div>
                <div className="col-6">
                    <table className="table table-centered mb-0">
                        <tr>
                            <td><strong>Phone number</strong></td>
                            <td>{company?.mobile_number}</td>
                        </tr>
                        <tr>
                            <td><strong>Alternate phone number</strong></td>
                            <td>{company?.alternative_mobile_number}</td>
                        </tr>
                        <tr>
                            <td><strong>Email</strong></td>
                            <td>{company?.email}</td>
                        </tr>
                        <tr>
                            <td><strong>Address</strong></td>
                            <td>{company?.address}</td>
                        </tr>
                        <tr>
                            <td><strong>Physical Address</strong></td>
                            <td>{company?.physical_address}</td>
                        </tr>
                        <tr>
                            <td><strong>Description</strong></td>
                            <td>{company?.description}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
