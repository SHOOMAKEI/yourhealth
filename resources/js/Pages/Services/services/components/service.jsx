import DeleteDialog from "./deleteDialog";

export default function Service(service ) {


    function chooseCategory() {
        // dispatch(selectService(service))
    }

    return (
        <tr key={service.id}>
            <td>
                <a href={"#"} className="text-dark" onClick={chooseCategory}>
                    {service.name}
                </a>
            </td>
            <td>
                {service.is_active ?
                    <span><i className="uil uil-eye font-16 mr-1 text-success"></i> Visible</span> :
                    <span><i className="uil uil-eye font-16 mr-1 text-danger"></i> Not Visible</span>
                }
            </td>
            <td className="table-action">
                    <button type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        style={{lineHeight: 0.5, paddingTop: 0, paddingBottom: 0 }}>
                        <i className="uil uil-bright font-16 mr-1 text-primary"></i>More
                    </button>
                    <div className="dropdown-menu">
                        <a href="javascript:void(0);" className="dropdown-item" onClick={chooseCategory}>
                            <i className="uil uil-eye mr-1"></i>Show info
                        </a>
                    </div>
                    <DeleteDialog />
            </td>
        </tr>
    )
}
