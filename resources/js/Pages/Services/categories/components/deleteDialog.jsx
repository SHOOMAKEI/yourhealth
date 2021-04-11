import LoadingButton from "@/Shared/LoadingButton";
import React, { useState} from "react";

export default function DeleteCategoryDialog() {
    const selectedCategory = {name: 'omakei'}
    const [sending, setSending] = useState(false)

    // useEffect(() => {
    //     if (deleteServiceCategoryResponse.data) {
    //        setSuccess(true)
    //        dispatch(deleteCategory(selectedCategory));
    //     }
    //  }, [deleteServiceCategoryResponse.data])
    //
    // function _deleteCategory() {
    //     deleteServiceCategory({variables: {id: selectedCategory.id}})
    // }

    return (
        <div id="delete-category" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="delete-categoryLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-filled bg-danger">
                    <div className="modal-header">
                        <h4 className="modal-title" id="delete-categoryLabel">delete {selectedCategory.name}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete {selectedCategory.name}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                        <LoadingButton
                            type="submit"
                            className="btn btn-primary btn-block"
                            loading={sending}
                        >
                            Save Changes
                        </LoadingButton>
                        {/*<button type="button" className="btn btn-outline-light" data-dismiss="modal" onClick={_deleteCategory}>*/}
                        {/*    {*/}
                        {/*        deleteServiceCategoryResponse.called && deleteServiceCategoryResponse.loading ? 'Deleting...' : 'Delete'*/}
                        {/*    }*/}
                        {/*</button>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
