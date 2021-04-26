import React, {useEffect, useState} from "react";

import {ADD_MEMBERSHIP_MODAL_ID} from "@/Pages/Utilities/Constants";
import AddMembershipModal from "@/Pages/Services/packages/membership/AddMembership";
import Heading from "@/Pages/Services/packages/membership/Heading";
import List from "@/Pages/Services/packages/membership/List";
import SelectedInfo from "@/Pages/Services/packages/membership/SelectedInfo";
import {usePage} from "@inertiajs/inertia-react";
import DeleteMembershipDialog from "@/Pages/Services/packages/membership/deleteDialog";


export default function Memberships({memberships}) {
    const [selectedMembership, setSelectedMembership] = useState({})
    const [shownMemberships, setShownMemberships] = useState(memberships)

    useEffect(() => {
        setShownMemberships(memberships)
    }, [memberships])


    function renderModal() {

        return <AddMembershipModal
            modalID={ADD_MEMBERSHIP_MODAL_ID}
            operation={ selectedMembership.id? "update": "add"}
            initialData={selectedMembership}
        />
    }

    return (
        <div className="card">
            <div className="card-body">
                <Heading
                    title={"Create membership"}
                    modalID={ADD_MEMBERSHIP_MODAL_ID}
                    renderModal={renderModal}
                    callback={setSelectedMembership}
                />
                <div className="row justify-content-sm-between">
                    <div className="col-lg-12">
                        { shownMemberships && <List memberships={shownMemberships} callback={setSelectedMembership}/>}
                    </div>
                    {selectedMembership && <DeleteMembershipDialog membership={selectedMembership}/>}
                    <div className="col-4">
                        {/*<SelectedInfo />*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
