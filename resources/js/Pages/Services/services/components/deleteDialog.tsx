import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";

import { DELETE_SERVICE } from "@pages/utils/Mutations";
import {ServicesState} from "@pages/data/reducers/service";
import { deleteService } from "@pages/data/actions/service"
import { useApi } from "@pages/utils/ApolloClient";

export default function DeleteService() {
    const {selectedService} = useSelector<ServicesState, ServicesState>(state => state.servicesStore);
    const dispatch = useDispatch()
    const [deleteServiceCB, deleteServiceCBResponse] = useApi({query: DELETE_SERVICE })
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (deleteServiceCBResponse.data) {
           setSuccess(true)
           dispatch(deleteService(selectedService));
        }
     }, [deleteServiceCBResponse.data])

    function _deleteService() {
        deleteServiceCB({variables: {id: selectedService.id}})
    }

    return (
        <div id="delete-category" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="delete-categoryLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-filled bg-danger">
                    <div className="modal-header">
                        <h4 className="modal-title" id="delete-categoryLabel">delete {selectedService.name}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete {selectedService.name}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-outline-light" data-dismiss="modal" onClick={_deleteService}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}