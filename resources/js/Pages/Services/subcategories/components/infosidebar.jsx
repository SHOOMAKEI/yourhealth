import AddCategoryModal from './AddCategoryModal'
import { UPDATE_CATEGORY_MODAL_ID } from '@/Pages/Utilities/Constants'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia';
import React, {useEffect, useState } from 'react'

export default function InfoSideBar({selectedCategory}) {
    const [category, setCategory] = useState(selectedCategory);
    const [subcategories, setSubCategory] = useState([]);
    const[sending, setSending] = useState(false)

    useEffect(() => {
        setSending(true)
        axios.get(route('services_categories.show',selectedCategory.id))
            .then( resp => {
                setSubCategory(resp.data)
                setSending(false)
            })


    }, [selectedCategory])
    //
    // useEffect(() => {
    //     if (updateServiceCategoryResponse.data) {
    //        setSuccess(true)
    //        dispatch(updateCategory({...selectedCategory, is_active: !selectedCategory.is_active}))
    //     }
    //  }, [updateServiceCategoryResponse.data])

    function toggleCategoryVisibility() {
        let category = {
            id: selectedCategory.id,
            name: name,
            description: selectedCategory.description,
          };

        // updateServiceCategory({variables: category});
        // dispatch(updateCategory({...selectedCategory, is_active: !selectedCategory.is_active}))
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="dropdown card-widgets">
                    <a href="#" className="dropdown-toggle arrow-none" data-toggle="dropdown" aria-expanded="false">
                        <i className="uil uil-ellipsis-h"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item" data-toggle="modal" data-target={`#${UPDATE_CATEGORY_MODAL_ID}`}>
                            <i className="uil uil-edit mr-1"></i>Edit
                        </a>
                        <InertiaLink href={route('services_categories.visibility', selectedCategory.id)} className="dropdown-item">
                            {
                                selectedCategory.is_active ? (
                                    <span><i className="uil uil-ban mr-1"></i>Hide from public</span>
                                ) : <span><i className="uil uil-eye mr-1"></i>Show to public</span>
                            }
                        </InertiaLink>
                        <InertiaLink href={route('services_categories.approval', selectedCategory.id)} className="dropdown-item" >
                            {
                                selectedCategory.approved_at ? (
                                    <span><i className="uil uil-ban mr-1"></i>Deny</span>
                                ) : <span><i className="uil uil-eye mr-1"></i>approve</span>
                            }
                        </InertiaLink>
                        <div className="dropdown-divider"></div>
                        <a href="" className="dropdown-item text-danger" data-toggle="modal" data-target="#delete-category">
                            <i className="uil uil-trash-alt mr-1"></i>Delete
                        </a>
                    </div>
                    <AddCategoryModal
                        modalID={UPDATE_CATEGORY_MODAL_ID}
                        initialData={{
                            name: selectedCategory.name,
                            description: selectedCategory.description,
                            id: selectedCategory.id,
                        }}
                        operation="update"
                        title={`Edit category ${selectedCategory.name}`}
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
                <div className="row">
                    <div className="col-12">
                        <h4 className="header-title my-3">Subcategories ({selectedCategory.name})</h4>
                        <table className="table table-sm table-centered mb-0">
                            <thead className="thead-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Public status</th>
                                    <th>Approval Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sending?(
                                        <tr>
                                            <td colSpan="3">
                                                <div className="d-flex justify-content-center">
                                                    <div className="spinner-border text-primary" role="status"></div>
                                                </div>
                                            </td>
                                        </tr>

                                        ):
                                    subcategories &&  subcategories.slice(0,9).map(subcategory => (
                                        <tr>
                                            <td>{subcategory.name}</td>
                                            <td>
                                                {
                                                    subcategory.is_active ?
                                                        <span><i className="uil uil-eye font-16 mr-1 text-success"></i> Visible</span> :
                                                        <span><i className="uil uil-eye font-16 mr-1 text-danger"></i> Not Visible</span>
                                                }
                                            </td>
                                            <td>
                                                {subcategory.approved_at ?
                                                    <span><i className="uil uil-check-circle font-16 mr-1 text-success"/> Approved</span> :
                                                    <span><i className="uil uil-times-circle font-16 mr-1 text-danger"/> Not Approved</span>
                                                }
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <InertiaLink href={`/services/subcategories/${selectedCategory.id}`}>
                            <a className="btn btn-primary btn-block mt-2">See subcategories</a>
                        </InertiaLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
