import React, {useState, useEffect} from "react";

export default function InfoSideBar({service}) {
    const [selectedService, setSelectedService] = useState(service);

console.log(service)
    useEffect(() => {
       setSelectedService(service)
    }, [service])

    return (
        <div className="card">
            <div className="card-body">
                <h4>{selectedService?.name}</h4>

                <hr className="mt-3 mb-2" />

                <div className="row">
                    <div className="col">

                        <p>{selectedService?.description}</p>

                        <div className="row">
                            <div className="col-6">
                                <p className="mt-2 mb-1 text-muted">Created At</p>
                                <div className="media">
                                    <i className="uil uil-schedule font-18 text-success mr-1"></i>
                                    <div className="media-body">
                                        <h5 className="mt-1 font-14">
                                            {selectedService?.created_at}
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
                                            {selectedService?.updated_at}
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
