import {useDispatch, useSelector} from "react-redux";

import AddMembershipModal from "@pages/services/packages/membership/AddMembership";
import Spinner from "@pages/auth/components/Spinner";
import {UPDATE_MEMBERSHIP_MODAL_ID} from "@pages/constants";
import { UPDATE_PACKAGE_MEMBERSHIP } from "@pages/utils/Mutations";
import {membershipsStateValues} from "@pages/data/reducers/memberships";
import {updateMembership} from "@pages/data/actions/memberships";
import { useApi } from "@pages/utils/ApolloClient";
import { useEffect } from "react";

export default function SelectedInfo() {
    const dispatch = useDispatch();
    const [updatePackageMembership, updatePackageMembershipResponse] = useApi({query: UPDATE_PACKAGE_MEMBERSHIP});

    useEffect(() => {
        let data = updatePackageMembershipResponse.data;

        if (data && data.updatePackageMemberShip) {
            dispatch(updateMembership(data.updatePackageMemberShip));
        }
    }, [updatePackageMembershipResponse.data])


    function toggleVisibility() {
        let membership = {
            id: selectedMembership.id,
            name: selectedMembership.name,
            description: selectedMembership.description,
            is_active: !selectedMembership.is_active
        };

        updatePackageMembership({variables: {input: membership}})
    }

    function renderModal() {
        return <AddMembershipModal modalID={UPDATE_MEMBERSHIP_MODAL_ID} operation={"update"} />
    }
    
    const {selectedMembership} = useSelector<membershipsStateValues, membershipsStateValues>(state => state.membershipsStore)

    return (
        <div>
            <div className="dropdown card-widgets">
                <a href="#" className="dropdown-toggle arrow-none" data-toggle="dropdown" aria-expanded="false">
                    <i className="uil uil-ellipsis-h"/>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                    <a href="javascript:void(0);" className="dropdown-item" onClick={toggleVisibility}>
                        {
                            selectedMembership.is_active ? (
                                <span><i className="uil uil-ban mr-1"/>Hide from public</span>
                            ) : <span><i className="uil uil-eye mr-1"/>Show to public</span>
                        }
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item" data-toggle="modal" data-target={`#${UPDATE_MEMBERSHIP_MODAL_ID}`}>
                        <i className="uil uil-edit mr-1"/>Edit
                    </a>
                    <div className="dropdown-divider"/>
                    <a href="javascript:void(0);" className="dropdown-item text-danger" data-toggle="modal" data-target="#delete-category">
                        <i className="uil uil-trash-alt mr-1"/>Delete
                    </a>
                </div>
            </div>

            <h4>{selectedMembership.name}</h4>
            <span>
                {
                    updatePackageMembershipResponse.loading ? <Spinner /> :
                        selectedMembership.is_active ?
                            <span><i className="mdi mdi-circle text-success"/> Enabled</span>
                                :
                            <span><i className="mdi mdi-circle text-danger"/>  Disabled</span>
                }
            </span>

            <hr className="mt-3 mb-2" />

            <div className="row">
                <div className="col">

                    <p>
                        {selectedMembership.description}
                    </p>

                    <div className="row">
                        <div className="col-6">
                            <p className="mt-2 mb-1 text-muted">Created At</p>
                            <div className="media">
                                <i className="uil uil-schedule font-18 text-success mr-1"/>
                                <div className="media-body">
                                    <h5 className="mt-1 font-14">
                                        {selectedMembership.created_at}
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <p className="mt-2 mb-1 text-muted">Updated At</p>
                            <div className="media">
                                <i className="uil uil-schedule font-18 text-success mr-1"/>
                                <div className="media-body">
                                    <h5 className="mt-1 font-14">
                                        {selectedMembership.updated_at}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {renderModal()}
        </div>
    )
}