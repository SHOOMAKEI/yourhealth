import React from "react";



export default function Heading({title, renderModal, modalID, search, callback,services}) {

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
                    name: "",
                    services:[],
                    service_id: services[0]?.id
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
