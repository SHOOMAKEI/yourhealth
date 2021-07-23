import React from "react";



export default function Heading({title, renderModal, modalID, search, callback, memberships, ranges, features}) {

    function onSearch() {
        $('#search-input').on('input',function(e){
            let input = $(this);
            let val = input.val();

            if (input.data("lastval") != val) {
                input.data("lastval", val);
                search(val)
            }
        });
    }

    return (
        <div className="row mb-3">
            <div className="col-sm-4">
                <a href="#" className="btn btn-primary mb-3" data-toggle="modal" data-target={`#${modalID}`} onClick={()=> callback({
                    membership_category_id:memberships && memberships.length>0? memberships[0].id:null,
                    package_member_range_id:ranges && ranges.length>0? ranges[0].id:null,
                    package_feature_id:features && features.length>0? features[0].id:null,
                    features:[],
                    ranges:[],
                    is_active: true,

                })}>
                    <i className="mdi mdi-plus"/>{title}</a>
            </div>
            <div className="col-sm-8">
                <div className="text-sm-right float-right">

                </div>
            </div>
            {renderModal && renderModal()}
        </div>
    )
}
