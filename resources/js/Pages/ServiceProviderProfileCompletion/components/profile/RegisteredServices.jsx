import React, { useEffect, useState } from "react";
import {InertiaLink} from "@inertiajs/inertia-react";

export default function RegisteredServices({services, callback}) {
    const [shownServices, setShownServices] = useState([...services]);

    useEffect(() => {
        setShownServices(services.slice(0, 5))
    }, [])

    function onSearch() {
        $('#search-input-registered').on('input',function(e){
            let input = $(this);
            let val = input.val();

            if (input.data("lastval") != val) {
                input.data("lastval", val);

                console.log(val)

                let newShownServices = services.filter(service => {
                    if (service.name.toLocaleLowerCase().includes(val)) {
                        return service
                    }
                })

                setShownServices(newShownServices);
            }
        });
    }

    return (
        <div>
            <div className="page-title-right mb-2">
                <div className="app-search">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..." id="search-input-registered" onInput={onSearch}/>
                        </div>
                    </form>
                </div>
            </div>
            <table className="table table-centered table-borderless mb-0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shownServices.slice(0, 4).map((service) => (
                            <tr key={service.id}>
                                <td>{service.name}</td>
                                <td>{`${service.pivot.price} ${service.pivot.currency}`}</td>
                                <td>
                                    <InertiaLink href={route('providerService.destroy', service.id)} className="btn btn-danger btn-sm">
                                        <i className="dripicons-trash"></i>
                                    </InertiaLink>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="ml-5 mt-2">
                <i>
                    {
                        services.length > 0 ? 'Search to see more services...' : 'There are no registered services'
                    }
                </i>
            </div>
        </div>
    )
}
