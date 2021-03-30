import {AddCategoryModal} from '@/Pages/services/categories/components'
import { UPDATE_CATEGORY_MODAL_ID } from '@/Pages/Utilities/Constants'
import {InertiaLink} from "@inertiajs/inertia-react";

export default function InfoSideBar() {
    const {selectedCategory, categories} = useSelector(state => state.categoriesStore);
    const {subcategories} = useSelector(state => state.subcategoriesStore);
    const [shownSubcategories, setShownSubcategories] = useState(subcategories.slice(0, 5))

    useEffect(() => {
        if(categories.length > 0) {
            dispatch(selectCategory(categories[0]))
        }
    }, [])

    useEffect(() => {
        if (updateServiceCategoryResponse.data) {
           setSuccess(true)
           dispatch(updateCategory({...selectedCategory, is_active: !selectedCategory.is_active}))
        }
     }, [updateServiceCategoryResponse.data])

    function toggleCategoryVisibility() {
        let category = {
            id: selectedCategory.id,
            name: name,
            description: selectedCategory.description,
          };

        updateServiceCategory({variables: category});
        dispatch(updateCategory({...selectedCategory, is_active: !selectedCategory.is_active}))
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
                        <a href="javascript:void(0);" className="dropdown-item" onClick={toggleCategoryVisibility}>
                            {
                                selectedCategory.is_active ? (
                                    <span><i className="uil uil-ban mr-1"></i>Hide from public</span>
                                ) : <span><i className="uil uil-eye mr-1"></i>Show to public</span>
                            }
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="javascript:void(0);" className="dropdown-item text-danger" data-toggle="modal" data-target="#delete-category">
                            <i className="uil uil-trash-alt mr-1"></i>Delete
                        </a>
                    </div>
                    <AddCategoryModal
                        modalID={UPDATE_CATEGORY_MODAL_ID}
                        initialData={{
                            name: selectedCategory.name,
                            description: selectedCategory.description,
                            is_active: false,
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

                <hr className="mt-3 mb-2" />

                <div className="row">
                    <div className="col">

                        <p>{selectedCategory.description}</p>

                        <div className="row">

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
                                <p className="mt-2 mb-1 text-muted">Updated At</p>
                                <div className="media">
                                    <i className="uil uil-schedule font-18 text-success mr-1"></i>
                                    <div className="media-body">
                                        <h5 className="mt-1 font-14">
                                            {selectedCategory.updated_at}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h4 className="header-title my-3">Subcategories ({selectedCategory.service_sub_categories.length})</h4>
                        <table className="table table-sm table-centered mb-0">
                            <thead className="thead-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Public status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    selectedCategory.service_sub_categories.slice(0,9).map(subcategory => (
                                        <tr>
                                            <td>{subcategory.name}</td>
                                            <td>
                                                {
                                                    subcategory.is_active ?
                                                        <span><i className="uil uil-eye font-16 mr-1 text-success"></i> Visible</span> :
                                                        <span><i className="uil uil-eye font-16 mr-1 text-danger"></i> Not Visible</span>
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
