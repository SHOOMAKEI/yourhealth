// import { selectService } from "@pages/data/actions/requestedService";
// import { requestedServiceValues } from "@pages/data/reducers/requestedService";
import React from "react";

export default function Service({service, callback}) {
    function chooseService() {
       callback(service)
    }

    return (
        <tr key={service.id}>
            <td onClick={chooseService}> <a href={'#'} className="text-dark">{service.name}</a></td>
            <td> {service.is_active ?
                <span><i className="uil uil-eye font-16 mr-1 text-success"/> Visible</span> :
                <span><i className="uil uil-eye font-16 mr-1 text-danger"/> Not Visible</span>
            }</td>
            <td>{service.created_at}</td>
            <td>{service.updated_at}</td>
            <td className="table-action">
                    <button type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        style={{lineHeight: 0.5, paddingTop: 0, paddingBottom: 0 }}>
                        <i className="uil uil-bright font-16 mr-1 text-primary"></i>More
                    </button>
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item" onClick={chooseService}>
                            <i className="uil uil-eye mr-1"></i>Show info
                        </a>
                    </div>
            </td>
        </tr>
    )
}
