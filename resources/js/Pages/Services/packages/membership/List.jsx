// import {useDispatch, useSelector} from "react-redux";
//
// import {membershipsStateValues} from "@pages/data/reducers/memberships";
// import {membershipsValues} from "@pages/data/constants/memberships";
// import {selectMembership} from "@pages/data/actions/memberships";


import {usePage} from "@inertiajs/inertia-react";

export default function List({memberships}) {
    const {selectedMembership} = usePage().props
    // const dispatch = useDispatch();

    function _selectMembership(membership) {
        // dispatch(selectMembership(membership))
    }

    return (
        <div>
            {
                memberships.map(membership => (
                    <div className="row">
                        <div className="col-sm-4 mb-2 mb-sm-0">
                            <div className="custom-control custom-checkbox" onClick={() => _selectMembership(membership)}>
                                <input type="checkbox" className="custom-control-input" id={`membership-${membership.id}`}
                                       checked={membership.id === selectedMembership.id} />
                                <label className="custom-control-label" htmlFor="task1">
                                    {membership.name}
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="d-flex justify-content-between float-right">
                                <ul className="list-inline font-13 text-right">
                                    <li className="list-inline-item">
                                        <i className="uil uil-schedule font-16 mr-1"></i> {membership.created_at}
                                    </li>
                                    <li className="list-inline-item ml-2">
                                        {
                                            membership.is_active ?
                                                <span className="badge badge-success-lighten p-1"> Enabled</span>
                                                :
                                                <span className="badge badge-danger-lighten p-1"> Disabled</span>
                                        }
                                    </li>
                                    <li className="list-inline-item ml-2">
                                        <button type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                style={{lineHeight: 0.5, paddingTop: 0, paddingBottom: 0 }}>
                                            <i className="uil uil-bright font-16 mr-1 text-primary"></i>More
                                        </button>
                                        <div className="dropdown-menu">
                                            <a href="javascript:void(0);" className="dropdown-item" onClick={() => _selectMembership(membership)}>
                                                <i className="uil uil-eye mr-1"></i>Show info
                                            </a>
                                            <a href="javascript:void(0);" className="dropdown-item">
                                                <i className="uil uil-eye mr-1"></i>Edit
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
