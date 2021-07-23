import React from 'react'



export default function () {



    return(
        <div className="modal fade" id="event-modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header pr-4 pl-4 border-bottom-0 d-block">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×
                        </button>
                        <h4 className="modal-title">Add New Event</h4>
                    </div>
                    <div className="modal-body pt-3 pr-4 pl-4">
                    </div>
                    <div className="text-right pb-4 pr-4">
                        <button type="button" className="btn btn-light " data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success save-event  ">Create event</button>
                        <button type="button" className="btn btn-danger delete-event  "
                                data-dismiss="modal">Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
