import React, {useEffect, useState} from 'react'
import AddMembershipModal from "@/Pages/Services/packages/membership/AddMembership";
import {ADD_FEATURE_MODAL_ID, ADD_MEMBERSHIP_MODAL_ID, ADD_PACKAGE_MODAL_ID} from "@/Pages/Utilities/Constants";
import Heading from "@/Pages/Services/packages/features/Heading";
import List from "@/Pages/Services/packages/features/List";
import DeleteMembershipDialog from "@/Pages/Services/packages/features/deleteDialog";
import AddFeatureModal from "@/Pages/Services/packages/features/AddFeature";

export default function PackageFeature({packages}) {
    const [selectedPackage, setSelectedPackage] = useState({})
    const [shownPackages, setShownPackages] = useState(packages)

    useEffect(() => {
        setShownPackages(packages)
    }, [packages])


    function renderModal() {

        return <AddFeatureModal
            modalID={ADD_FEATURE_MODAL_ID}
            operation={ selectedPackage.id? "update": "add"}
            initialData={selectedPackage}
        />
    }

    return (
        <div className="card">
            <div className="card-body">
                <Heading
                    title={"Add Package Feature"}
                    modalID={ADD_FEATURE_MODAL_ID}
                    renderModal={renderModal}
                    callback={setSelectedPackage}
                />
                <div className="row justify-content-sm-between">
                    <div className="col-lg-12">
                        { shownPackages && <List memberships={shownPackages} callback={setSelectedPackage}/>}
                    </div>
                    {selectedPackage && <DeleteMembershipDialog membership={selectedPackage}/>}
                    <div className="col-4">
                        {/*<SelectedInfo />*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
