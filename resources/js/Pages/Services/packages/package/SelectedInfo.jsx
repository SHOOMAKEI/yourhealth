import React, {useEffect, useState} from "react";
import {Inertia} from "@inertiajs/inertia";
import {PACKAGE_INFO_MODAL_ID} from "@/Pages/Utilities/Constants";

export default function SelectedInfo({membership}) {
    const [selectedMembership, setSelectedMembership] = useState(membership)
    const [sending, setSending] = useState(false)

    useEffect(() => {
        setSelectedMembership(membership)
    }, [membership])


    return (
        <div id={PACKAGE_INFO_MODAL_ID} className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-categoryLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
                <div className="modal-content ">
                    <div className="modal-header">
                        <h4 className="modal-title" id="info-categoryLabel">{selectedMembership?.name} Package Information</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                       <h4>{selectedMembership?.name} package for {selectedMembership?.membership_category?.name} membership category</h4>
                        {selectedMembership?.has_price?
                            <>
                                <br/>
                                <h4>Package Price: {selectedMembership?.price} {selectedMembership?.currency}</h4>
                            </>
                            : null
                        }

                        {selectedMembership?.features && selectedMembership?.features.length>0 && (
                            <>
                                <br/><br/>
                                <h4>Package Features</h4>
                                <table className="table table-hover table-centered mb-0">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>
                                            Feature
                                        </th>
                                        <th>
                                            Services
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {selectedMembership?.features && selectedMembership?.features.length>0 && selectedMembership?.features.map((feature,index )=>(
                                        <tr key={index+1}>
                                            <td>
                                                {index+1}
                                            </td>
                                            <td>
                                                {feature.name}
                                            </td>
                                            <td>
                                                <ul>
                                                    {feature.services.map((service, index)=>(<li key={index+1}>{service.name}</li>))}
                                                </ul>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </>

                        )}
                        {selectedMembership?.ranges && selectedMembership?.ranges.length>0  && (
                            <>
                                <br/><br/>
                                <h4>Stuff Members</h4>
                                <table className="table table-hover table-centered mb-0">
                                    <thead>
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>
                                            Range
                                        </th>
                                        <th>
                                            Price
                                        </th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    {selectedMembership?.ranges && selectedMembership?.ranges.length>0 && selectedMembership?.ranges.map((range,index )=>(
                                        <tr key={index+1}>
                                            <td>{index+1}</td>
                                            <td>
                                                {range.min} - {range.max}
                                            </td>
                                            <td>
                                                {range.price} {range.currency}
                                            </td>

                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </>

                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

