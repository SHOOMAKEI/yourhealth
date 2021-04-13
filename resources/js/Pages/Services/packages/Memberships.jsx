import React, {useEffect, useState} from "react";

import {ADD_MEMBERSHIP_MODAL_ID} from "@/Pages/Utilities/Constants";
import AddMembershipModal from "@/Pages/Services/packages/membership/AddMembership";
import Heading from "@/Pages/Services/packages/membership/Heading";
import List from "@/Pages/Services/packages/membership/List";
import SelectedInfo from "@/Pages/Services/packages/membership/SelectedInfo";
import {usePage} from "@inertiajs/inertia-react";


export default function Memberships() {
    const {memberships} = usePage().props
    const [shownMemberships, setShownMemberships] = useState(memberships)

    useEffect(() => {
        setShownMemberships(memberships)
    }, [memberships])

    function searchMemberships(content ) {
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
                        { shownMemberships && <List memberships={shownMemberships}/>}
                    </div>
                    <div className="col-4">
                        {/*<SelectedInfo />*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
