import React, {useEffect, useState} from 'react'
import {ADD_PACKAGE_MODAL_ID} from "@/Pages/Utilities/Constants";
import Heading from "@/Pages/Services/packages/package/Heading";
import List from "@/Pages/Services/packages/package/List";
import DeleteMembershipDialog from "@/Pages/Services/packages/membership/deleteDialog";
import AddPackageModal from "@/Pages/Services/packages/package/AddPackageModal";

export default function Packages({packages,memberships, features, ranges}) {
    const [selectedPackage, setSelectedPackage] = useState({})
    const [shownPackages, setShownPackages] = useState(packages)

    useEffect(() => {
        setShownPackages(packages)
    }, [packages])


    function renderModal() {

        return <AddPackageModal
            modalID={ADD_PACKAGE_MODAL_ID}
            memberships={memberships}
            features={features}
            ranges={ranges}
            operation={ selectedPackage.id? "update": "add"}
            initialData={selectedPackage}
        />
    }

    return (
        <div className="card">
            <div className="card-body">
                <Heading
                    title={"Add Package"}
                    modalID={ADD_PACKAGE_MODAL_ID}
                    renderModal={renderModal}
                    memberships={memberships}
                    features={features}
                    ranges={ranges}
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
