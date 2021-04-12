import {AddServiceModal} from '@/Pages/Services/services/components/index'
import { UPDATE_CATEGORY_MODAL_ID } from '@/Pages/Utilities/Constants'
import { useEffect } from 'react';

export default function InfoSideBar() {
    const {selectedService, services} = useSelector(state => state.servicesStore);

    useEffect(() => {
        if(services.length > 0) {
            dispatch(selectService(services[0]))
        }
    }, [])

    function toggleVisibility() {
        dispatch(updateService({...selectedService, is_active: !selectedService.is_active}))
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="dropdown card-widgets">
                    <a href="#" className="dropdown-toggle arrow-none" data-toggle="dropdown" aria-expanded="false">
                        <i className="uil uil-ellipsis-h"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0);" className="dropdown-item" data-toggle="modal" data-target={`#${UPDATE_CATEGORY_MODAL_ID}`}>
                            <i className="uil uil-edit mr-1"></i>Edit
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item" onClick={toggleVisibility}>
                            {
                                selectedService.is_active ? (
                                    <span><i className="uil uil-ban mr-1"></i>Hide from public</span>
                                ) : <span><i className="uil uil-eye mr-1"></i>Show to public</span>
                            }
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="javascript:void(0);" className="dropdown-item text-danger" data-toggle="modal" data-target="#delete-category">
                            <i className="uil uil-trash-alt mr-1"></i>Delete
                        </a>
                    </div>
                    <AddServiceModal
                        modalID={UPDATE_CATEGORY_MODAL_ID}
                        initialData={{
                            name: selectedService.name,
                            description: selectedService.description,
                            status: false,
                            id: selectedService.id,
                        }}
                        operation="update"
                        title={`Edit service ${selectedService.name}`}
                    />
                </div>

                <h4>{selectedService.name}</h4>
                {
                    selectedService.is_active ?
                        <span>
                            <i className="mdi mdi-circle text-success"></i> Visible to public
                        </span> :
                        <span>
                            <i className="mdi mdi-circle text-danger"></i> Hidden from public
                        </span>
                }

                <hr className="mt-3 mb-2" />

                <div className="row">
                    <div className="col">

                        <p>{selectedService.description}</p>

                        <div className="row">
                            <div className="col-6">
                                <p className="mt-2 mb-1 text-muted">Created At</p>
                                <div className="media">
                                    <i className="uil uil-schedule font-18 text-success mr-1"></i>
                                    <div className="media-body">
                                        <h5 className="mt-1 font-14">
                                            {selectedService.created_at}
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <p className="mt-2 mb-1 text-muted">Updated At</p>
                                <div className="media">
                                    <i className="uil uil-schedule font-18 text-success mr-1"></i>
                                    <div className="media-body">
                                        <h5 className="mt-1 font-14">
                                            {selectedService.updated_at}
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
