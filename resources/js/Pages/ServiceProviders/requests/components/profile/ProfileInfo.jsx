import { ServiceProviderValues } from "../ServiceProvider";
import React from 'react'



export default function ProfileInfo({provider}) {
    return (
        <div className="tab-pane fade active show" id="v-pills-profile" role="tabpanel"
             aria-labelledby="v-pills-profile-tab">
            <div className="text-center pb-3">
                <img src={provider.profile_photo_path} alt="image"
                     className="img-fluid img-thumbnail rounded-circle mb-3" width="120"/>
            </div>
            <div className="row">
                <div className="col-6">
                    <table className="table table-centered mb-0">
                        <thead></thead>
                        <tbody>
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
                        </tbody>
                    </table>
                </div>
                <div className="col-6">
                    <table className="table table-centered mb-0">
                        <thead></thead>
                        <tbody>
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
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}
