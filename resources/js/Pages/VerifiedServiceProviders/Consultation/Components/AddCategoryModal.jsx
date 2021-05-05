import React from 'react'


export default function AddCategoryModal(){


    return(
        <div className="modal fade" id="add-category" tabIndex="-1" style="display: none;"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header border-bottom-0 d-block">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×
                        </button>
                        <h4 className="modal-title">Add a category</h4>
                    </div>
                    <div className="modal-body p-4">
                        <form>
                            <div className="form-group">
                                <label className="control-label">Category Name</label>
                                <input className="form-control form-white" placeholder="Enter name"
                                       type="text" name="category-name"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Choose Category Color</label>
                                <select className="form-control form-white"
                                        data-placeholder="Choose a color..." name="category-color">
                                    <option value="primary">Primary</option>
                                    <option value="success">Success</option>
                                    <option value="danger">Danger</option>
                                    <option value="info">Info</option>
                                    <option value="warning">Warning</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>

                        </form>

                        <div className="text-right">
                            <button type="button" className="btn btn-light " data-dismiss="modal">Close
                            </button>
                            <button type="button" className="btn btn-primary ml-1   save-category"
                                    data-dismiss="modal">Save
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
