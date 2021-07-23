import React, { useEffect, useState } from "react";
import {Inertia} from "@inertiajs/inertia";

export default function DeleteService({service}) {
    const [selectedService, setService] = useState({})
    const [sending, setSending] = useState(false)

    useEffect(() => {
        setService(service)
    }, [service])

    function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        Inertia.delete(route('services.destroy', selectedService.id)).then(() => {
            setSending(false);
        });
    }

    return (
        <div id={`delete-service-${selectedService.id}`} className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="delete-categoryLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-filled bg-danger">
                    <div className="modal-header">
                        <h4 className="modal-title" id="delete-categoryLabel">delete {selectedService?.name}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete {selectedService?.name}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                        <a href="#" className="btn btn-outline-light" data-dismiss="modal" onClick={handleSubmit}>Delete </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
