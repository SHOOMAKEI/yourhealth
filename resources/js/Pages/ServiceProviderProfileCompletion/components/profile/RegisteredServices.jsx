import React, { useEffect, useState } from "react";
import {InertiaLink} from "@inertiajs/inertia-react";

export default function RegisteredServices({services, callback, user, facility}) {
    const [shownServices, setShownServices] = useState([...services]);
    const [facilityId, setFacilityId] = useState({})

    useEffect(() => {
        setShownServices(services)
        $(document).ready(function() {
            $('#registered-services-table').DataTable();
            $('.dataTables_filter input[type="search"]').css(
                {'width':'145px','display':'inline-block'}
            );
        } );
    }, [services])

    useEffect(() => {
        setFacilityId(facility)
    }, [facility])

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
            <div className="page-title-right mb-4">
            <h4> Registered Services</h4>
            </div>
            <table id="registered-services-table" className="table table-centered table-border mb-0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       shownServices && shownServices.map((service) => (
                            <tr key={service.id}>
                                <td>{service.name}</td>
                                <td>{`${service.pivot.price} ${service.pivot.currency}`}</td>
                                <td>
                                    <InertiaLink href={user.provider_profile.account_category_type === 'individual'?
                                        route('providerService.destroy', service.id):
                                        route('facilityService.destroy', [service.id,facilityId])} className="btn btn-danger btn-sm">
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
