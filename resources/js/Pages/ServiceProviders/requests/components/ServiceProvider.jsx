import {PROVIDER_PROFILE_MODAL_ID} from "@/Pages/Utilities/Constants";
import ProviderProfile from "./ProviderProfile";
import React from 'react'
import {InertiaLink} from "@inertiajs/inertia-react";


export default function ServiceProvider({serviceProvider, selectServiceProvider}) {
    return (
        <tr>
            <td>{serviceProvider.title}</td>
            <td>{serviceProvider.username}</td>
            <td>{serviceProvider.email}</td>
            <td>{serviceProvider.mobile_number}</td>
            <td>{serviceProvider.created_at}</td>
            <td>{serviceProvider.updated_at}</td>
            <td>{serviceProvider.account_category_type}</td>
            <td>{serviceProvider.is_verified?<span><i className="uil uil-check-circle font-16 mr-1 text-primary"/> Verified </span> :
                <span><i className="uil uil-times-circle font-16 mr-1 text-danger"/>Not Verified</span>}</td>
            <td className="table-action">
                <button type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        style={{lineHeight: 0.5, paddingTop: 0, paddingBottom: 0 }}>
                    <i className="uil uil-bright font-16 mr-1 text-primary" />More
                </button>
                <div className="dropdown-menu">
                    <InertiaLink href={route('service_provider_profiles.show', serviceProvider.id)} className="dropdown-item">
                        <i className="uil uil-eye mr-1" />Show info
                    </InertiaLink>
                </div>
            </td>
        </tr>
    )
}
