import React, {useEffect, useState} from 'react'
import {ADD_PACKAGE_MODAL_ID} from "@/Pages/Utilities/Constants";
import Heading from "@/Pages/Services/packages/package/Heading";
import List from "@/Pages/Services/packages/package/List";
import AddPackageModal from "@/Pages/Services/packages/package/AddPackageModal";
import SelectedInfo from "@/Pages/Services/packages/package/SelectedInfo";
import DeletePackageDialog from "@/Pages/Services/packages/package/deleteDialog";

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
            initialData={{
                    id: selectedPackage.id,
                    membership_category_id:selectedPackage.membership_category?.id,
                    package_member_range_id:ranges && ranges.length>0? ranges[0].id:null,
                    package_member_range_price:ranges && ranges.length>0? ranges[0].price:null,
                    package_member_range_currency:ranges && ranges.length>0? ranges[0].currency:null,
                    package_feature_id:features && features.length>0? features[0].id:null,
                    features:selectedPackage.features,
                    ranges:selectedPackage.ranges,
                    is_active: true,
                    name: selectedPackage.name,
                    price: selectedPackage.price,
                    currency: selectedPackage.currency,
                    clone: selectedPackage.clone

                }}
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
                    initialData={{
                        membership_category_id:memberships && memberships.length>0? memberships[0].id:null,
                        package_member_range_id:ranges && ranges.length>0? ranges[0].id:null,
                        package_feature_id:features && features.length>0? features[0].id:null,
                        features:[],
                        ranges:[],
                        is_active: true,
                        clone: false,

                    }}
                    callback={setSelectedPackage}
                />
                <div className="row justify-content-sm-between">
                    <div className="col-lg-12">
                        { shownPackages && <List memberships={shownPackages} callback={setSelectedPackage}/>}
                    </div>
                    {selectedPackage && <DeletePackageDialog membership={selectedPackage}/>}
                    <div className="col-4">
                        {selectedPackage && <SelectedInfo membership={selectedPackage}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
