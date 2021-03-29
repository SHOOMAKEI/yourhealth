import {PROVIDER_PROFILE_MODAL_ID} from "@pages/constants";
import ProviderProfile from "@pages/service-providers/requests/components/ProviderProfile";

export interface ServiceProviderValues {
    id: string;
    title: string;
    username: string;
    email: string;
    mobile_number: string;
    created_at: string;
    updated_at: string;
    account_category_type: string;
}

interface serviceProviderProps {
    serviceProvider: ServiceProviderValues;
    selectServiceProvider: (provider: ServiceProviderValues) => void;
}

export default function ServiceProvider({serviceProvider, selectServiceProvider}: serviceProviderProps) {
    return (
        <tr>
            <td>{serviceProvider.title}</td>
            <td>{serviceProvider.username}</td>
            <td>{serviceProvider.email}</td>
            <td>{serviceProvider.mobile_number}</td>
            <td>{serviceProvider.created_at}</td>
            <td>{serviceProvider.updated_at}</td>
            <td>{serviceProvider.account_category_type}</td>
            <td className="table-action">
                <button type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        style={{lineHeight: 0.5, paddingTop: 0, paddingBottom: 0 }}>
                    <i className="uil uil-bright font-16 mr-1 text-primary" />More
                </button>
                <div className="dropdown-menu">
                    <a href="javascript:void(0);" className="dropdown-item" data-toggle="modal" data-target={`#${PROVIDER_PROFILE_MODAL_ID}`} onClick={() => selectServiceProvider(serviceProvider)}>
                        <i className="uil uil-eye mr-1" />Show info
                    </a>
                </div>
            </td>
        </tr>
    )
}