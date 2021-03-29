import {useEffect, useState} from "react";

import {ADD_MEMBERSHIP_MODAL_ID} from "@pages/constants";
import AddMembershipModal from "@pages/services/packages/membership/AddMembership";
import Heading from "@pages/services/packages/membership/Heading";
import List from "@pages/services/packages/membership/List";
import SelectedInfo from "@pages/services/packages/membership/SelectedInfo";
import {membershipsStateValues} from "@pages/data/reducers/memberships";
import {useSelector} from "react-redux";

export default function Memberships() {
    const {memberships} = useSelector<membershipsStateValues, membershipsStateValues>(state => state.membershipsStore)
    const [shownMemberships, setShownMemberships] = useState(memberships)

    useEffect(() => {
        setShownMemberships(memberships)
    }, [memberships])

    function searchMemberships(content: string) {
        if(content.length === 0) {
            setShownMemberships(memberships)
        } else {
            setShownMemberships(
                memberships.filter(membership =>  {
                    if(membership.name.toLowerCase().includes(content.toLowerCase())) {
                        return membership
                    }
                })
            )
        }
    }

    function renderModal() {
        return <AddMembershipModal modalID={ADD_MEMBERSHIP_MODAL_ID} operation={"add"} />
    }
    
    return (
        <div className="card">
            <div className="card-body">
                <Heading
                    title={"Create membership"}
                    modalID={ADD_MEMBERSHIP_MODAL_ID}
                    renderModal={renderModal} search={searchMemberships}
                />
                <div className="row justify-content-sm-between">
                    <div className="col-8">
                        <List memberships={shownMemberships}/>
                    </div>
                    <div className="col-4">
                        <SelectedInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}