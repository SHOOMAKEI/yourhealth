import React,{useState} from 'react'
import {
    ADD_PACKAGE_MODAL_ID,
    PACKAGE_INFO_MODAL_ID,
} from "@/Pages/Utilities/Constants";

export default function List({memberships, callback}) {
    const [selectedData, setSelectedData] = useState({})


    function _selectMembership(membership, clone=false) {

        if(clone){
            setSelectedData({...membership, clone:true})
            callback(selectedData)
        }

        if(!clone){
            setSelectedData({...membership, clone:false})
            callback(selectedData)
        }

    }
    $(document).ready(function() {
        $('#package-packages-table').DataTable();
        $('.dataTables_filter input[type="search"]').css(
            {'width':'145px','display':'inline-block'}
        );
    } );

    return (
        <div>
            <table id="package-packages-table" className="table table-centered table-border mb-0 font-14">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>membership type</th>
                    <th> Created At</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    memberships.map((membership, index )=> (
                        <tr key={index+1}>
                            <td>{membership.name}</td>
                            <td>{membership.membership_category.name}</td>
                            <td>{membership.created_at}</td>
                            <td> {
                                membership.is_active ?
                                    <span className="badge badge-success-lighten p-1"> Enabled</span>
                                    :
                                    <span className="badge badge-danger-lighten p-1"> Disabled</span>
                            }</td>
                            <td> <button type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                         style={{lineHeight: 0.5, paddingTop: 0, paddingBottom: 0 }} >
                                <i className="uil uil-bright font-16 mr-1 text-primary"/>More
                            </button>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item" data-toggle="modal" data-target={`#${PACKAGE_INFO_MODAL_ID}`} onClick={() => _selectMembership(membership)}>
                                        <i className="uil uil-eye mr-1"/>show details
                                    </a>
                                    <a href="#" className="dropdown-item" data-toggle="modal" data-target={`#${ADD_PACKAGE_MODAL_ID}`} onClick={() => _selectMembership(membership,true)}>
                                        <i className="uil uil-plus mr-1"/>Create new form this
                                    </a>
                                    <a href="#" className="dropdown-item" data-toggle="modal" data-target={`#${ADD_PACKAGE_MODAL_ID}`} onClick={() => _selectMembership(membership)}>
                                        <i className="uil uil-edit mr-1"/>Edit
                                    </a>
                                    <div className="dropdown-divider"/>
                                    <a href="" className="dropdown-item text-danger" data-toggle="modal" data-target={`#delete-membership-${membership.id}`} onClick={() => _selectMembership(membership)}>
                                        <i className="uil uil-trash-alt mr-1"/>Delete
                                    </a>
                                </div>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>

        </div>
    )
}
