import {AddServiceModal} from '@/Pages/Services/services/components/index'
import {UPDATE_CATEGORY_MODAL_ID, UPDATE_SERVICE_MODAL_ID} from '@/Pages/Utilities/Constants'
import React, {useEffect, useState} from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";
import AddCategoryModal from "../../categories/components/AddCategoryModal";

export default function InfoSideBar({selectedCategory}) {
    const [category, setCategory] = useState(selectedCategory);
    const [subcategories, setSubCategory] = useState([]);
    const[sending, setSending] = useState(false)


    function toggleCategoryVisibility() {
        let category = {
            id: selectedCategory.id,
            name: name,
            description: selectedCategory.description,
        };

    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="dropdown card-widgets">
                    <a href="#" className="dropdown-toggle arrow-none" data-toggle="dropdown" aria-expanded="false">
                        <i className="uil uil-ellipsis-h"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item" data-toggle="modal" data-target={`#${UPDATE_SERVICE_MODAL_ID}`}>
                            <i className="uil uil-edit mr-1"></i>Edit
                        </a>
                        <InertiaLink href={route('services.visibility', selectedCategory.id)} className="dropdown-item">
                            {
                                selectedCategory.is_active ? (
                                    <span><i className="uil uil-ban mr-1"></i>Hide from public</span>
                                ) : <span><i className="uil uil-eye mr-1"></i>Show to public</span>
                            }
                        </InertiaLink>
                        <InertiaLink href={route('services.approval', selectedCategory.id)} className="dropdown-item" >
                            {
                                selectedCategory.approved_at ? (
                                    <span><i className="uil uil-ban mr-1"></i>Deny</span>
                                ) : <span><i className="uil uil-eye mr-1"></i>approve</span>
                            }
                        </InertiaLink>
                        <div className="dropdown-divider"></div>
                        <a href="" className="dropdown-item text-danger" data-toggle="modal" data-target={`#delete-service-${selectedCategory.id}`}>
                            <i className="uil uil-trash-alt mr-1"></i>Delete
                        </a>
                    </div>
                    <AddServiceModal
                        modalID={UPDATE_SERVICE_MODAL_ID}
                        initialData={{
                            name: selectedCategory.name,
                            description: selectedCategory.description,
                            id: selectedCategory.id,
                        }}
                        operation="update"
                        title={`Edit Service ${selectedCategory.name}`}
                    />
                </div>

                <h4>{selectedCategory.name}</h4>
                {
                    selectedCategory.is_active ?
                        <span>
                            <i className="mdi mdi-circle text-success"></i> Visible to public
                        </span> :
                        <span>
                            <i className="mdi mdi-circle text-danger"></i> Hidden from public
                        </span>
                }

                {
                    selectedCategory.approved_at ?
                        <span className="pl-5">
                            <i className="mdi mdi-circle text-success"></i> Approved
                        </span> :
                        <span className="pl-5">
                            <i className="mdi mdi-circle text-danger"></i> Not Approved
                        </span>
                }

                <hr className="mt-3 mb-2" />

                <div className="row">
                    <div className="col">

                        <p>{selectedCategory.description}</p>

                        <div className="row">

                            <div className="col-6">
                                <p className="mt-2 mb-1 text-muted">Created By</p>
                                <div className="media">
                                    <i className="uil uil-user-square font-18 text-success mr-1"></i>
                                    <div className="media-body">
                                        <h5 className="mt-1 font-14">
                                            {selectedCategory.created_by}
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <p className="mt-2 mb-1 text-muted">Approved by</p>
                                <div className="media">
                                    <i className="uil uil-user-square font-18 text-success mr-1"></i>
                                    <div className="media-body">
                                        <h5 className="mt-1 font-14">
                                            {selectedCategory.approved_by}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <p className="mt-2 mb-1 text-muted">Created At</p>
                                <div className="media">
                                    <i className="uil uil-schedule font-18 text-success mr-1"></i>
                                    <div className="media-body">
                                        <h5 className="mt-1 font-14">
                                            {selectedCategory.created_at}
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <p className="mt-2 mb-1 text-muted">Approved At</p>
                                <div className="media">
                                    <i className="uil uil-schedule font-18 text-success mr-1"></i>
                                    <div className="media-body">
                                        <h5 className="mt-1 font-14">
                                            {selectedCategory.approved_at}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
