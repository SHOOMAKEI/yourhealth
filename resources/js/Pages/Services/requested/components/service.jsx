// import { selectService } from "@pages/data/actions/requestedService";
// import { requestedServiceValues } from "@pages/data/reducers/requestedService";
import React from "react";

export default function Service(service) {
    // const dispatch = useDispatch()

    function chooseService() {
        // dispatch(selectService(service))
    }

    return (
        <tr key={service.id}>
            <td>{service.name}</td>
            <td>{service.createdAt}</td>
            <td>{service.updatedAt}</td>
            <td className="table-action">
                    <button type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        style={{lineHeight: 0.5, paddingTop: 0, paddingBottom: 0 }}>
                        <i className="uil uil-bright font-16 mr-1 text-primary"></i>More
                    </button>
                    <div className="dropdown-menu">
                        <a href="javascript:void(0);" className="dropdown-item" onClick={chooseService}>
                            <i className="uil uil-eye mr-1"></i>Show info
                        </a>
                    </div>
            </td>
        </tr>
    )
}
