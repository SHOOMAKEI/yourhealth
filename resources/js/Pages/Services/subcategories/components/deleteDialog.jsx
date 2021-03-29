import React, { useEffect, useState } from "react";

export default function DeleteCategoryDialog() {
    const {selectedSubcategory} = useSelector(state => state.subcategoriesStore)
    const [success, setSuccess] = useState(false)

    // useEffect(() => {
    //     if (deleteServiceSubcategoryResponse.data) {
    //        setSuccess(true)
    //        dispatch(deleteSubcategory(selectedSubcategory));
    //     }
    //  }, [deleteServiceSubcategoryResponse.data])
    //
    // function _deleteCategory() {
    //     deleteServiceSubcategory({variables: {id: selectedSubcategory.id}})
    // }

    return (
        <div id="delete-category" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="delete-categoryLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-filled bg-danger">
                    <div className="modal-header">
                        <h4 className="modal-title" id="delete-categoryLabel">delete {selectedSubcategory.name}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete {selectedSubcategory.name}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-outline-light" data-dismiss="modal" onClick={_deleteCategory}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
