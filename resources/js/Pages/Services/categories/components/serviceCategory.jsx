import DeleteDialog from "./deleteDialog";
import React from "react";
import {InertiaLink} from "@inertiajs/inertia-react";

export default function Category(category) {

    function chooseCategory() {
        // dispatch(selectCategory(category))
    }

    return (
        <tr key={category.id}>
            <td onClick={chooseCategory}>
                <a href={'#'} className="text-dark">
                    {category.name}
                </a>
            </td>
            <td>
                {category.is_active ?
                    <span><i className="uil uil-eye font-16 mr-1 text-success"/> Visible</span> :
                    <span><i className="uil uil-eye font-16 mr-1 text-danger"/> Not Visible</span>
                }
            </td>
            <td className="table-action">
                    <button
                        type="button" className="btn btn-link dropdown-toggle"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        style={{lineHeight: 0.5, paddingTop: 0, paddingBottom: 0 }}>
                        <i className="uil uil-bright font-16 mr-1 text-primary"/>More
                    </button>
                    <div className="dropdown-menu">
                        <a href="javascript:void(0);" className="dropdown-item" onClick={chooseCategory}>
                            <i className="uil uil-eye mr-1"/>Show info
                        </a>
                        <InertiaLink href={`/services/subcategories/${category.id}`}>
                            <a className="dropdown-item" onClick={chooseCategory}>
                                <i className="uil uil-sitemap mr-1"/>Subcategories
                            </a>
                        </InertiaLink>
                    </div>
                    <DeleteDialog />
            </td>
        </tr>
    )
}
