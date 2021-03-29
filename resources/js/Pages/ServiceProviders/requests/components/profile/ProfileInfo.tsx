import { ServiceProviderValues } from "../ServiceProvider";

interface Props {
    provider: ServiceProviderValues;
}


export default function ProfileInfo({provider}:Props) {
    return (
        <div className="tab-pane fade active show" id="v-pills-profile" role="tabpanel"
             aria-labelledby="v-pills-profile-tab">
            <div className="row">
                <div className="col-6">
                    <table className="table table-centered mb-0">
                        <tr>
                            <td><strong>Title</strong></td>
                            <td> {provider.title} </td>
                        </tr>
                        <tr>
                            <td><strong>Username</strong></td>
                            <td>{provider.username}</td>
                        </tr>
                        <tr>
                            <td><strong>First Name</strong></td>
                            <td>{provider.first_name}</td>
                        </tr>
                        <tr>
                            <td><strong>Middle Name</strong></td>
                            <td>{provider.middle_name}</td>
                        </tr>
                        <tr>
                            <td><strong>Last Name</strong></td>
                            <td>{provider.last_name}</td>
                        </tr>
                        <tr>
                            <td><strong>Gender</strong></td>
                            <td>{provider.gender}</td>
                        </tr>
                        <tr>
                            <td><strong>Date of birth</strong></td>
                            <td>{provider.dob}</td>
                        </tr>
                    </table>
                </div>
                <div className="col-6">
                    <table className="table table-centered mb-0">
                        <tr>
                            <td><strong>Phone number</strong></td>
                            <td>{provider.mobile_number}</td>
                        </tr>
                        <tr>
                            <td><strong>Alternate phone number</strong></td>
                            <td>{provider.alternative_mobile_number}</td>
                        </tr>
                        <tr>
                            <td><strong>Email</strong></td>
                            <td>{provider.email}</td>
                        </tr>
                        <tr>
                            <td><strong>Address</strong></td>
                            <td>{provider.address}</td>
                        </tr>
                        <tr>
                            <td><strong>Physical Address</strong></td>
                            <td>{provider.physical_address}</td>
                        </tr>
                        <tr>
                            <td><strong>Bio</strong></td>
                            <td>{provider.bio}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}