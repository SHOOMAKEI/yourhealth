import LoadingButton from "@/Shared/LoadingButton";
import React, { useState, useEffect} from "react";
import {InertiaLink} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";

export default function DeletePackageDialog({membership}) {
    const [selectedMembership, setSelectedMembership] = useState({})
    const [sending, setSending] = useState(false)

    useEffect(() => {
        setSelectedMembership(membership)
     }, [membership])

    function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        Inertia.delete(route('packages_registration.destroy', selectedMembership.id)).then(() => {
            setSending(false);
        });
    }

    return (
        <div id={`delete-membership-${membership?.id}`} className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="delete-categoryLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-filled bg-danger">
                    <div className="modal-header">
                        <h4 className="modal-title" id="delete-categoryLabel">delete {selectedMembership?.name} Package</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete {selectedMembership?.name} Package for {selectedMembership?.membership_category?.name} membership category?
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
