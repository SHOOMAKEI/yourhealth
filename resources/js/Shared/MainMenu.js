import React from 'react';
import MainMenuItem from '@/Shared/MainMenuItem';
import MultiLinkMainMenuItem from '@/Shared/MultiLinkMainMenuItem';
import MultiLinkMenuItem from "@/Shared/MultiLinkMenuItem";
import {usePage} from "@inertiajs/inertia-react"

export default () => {
    const {auth} = usePage().props
  return (
    <ul className="metismenu side-nav mm-show">
      <li className="side-nav-title side-nav-item">Navigation</li>
        { (auth.user.roles[0].name ==='super-admin') &&
            <>
                <MainMenuItem text="Home" link="admin.dashboard" icon="uil-home-alt" />
                <li className="side-nav-title side-nav-item">Modules</li>
                <MultiLinkMainMenuItem icon="uil-store" text="Services">
                    <MultiLinkMenuItem  text="Manage Services" link="services_categories.index"/>
                    <MultiLinkMenuItem  text="Requested Services" link="requested_services.index"/>
                    <MultiLinkMenuItem  text="Packages" link="packages_registration.index"/>
                </MultiLinkMainMenuItem>
                <MultiLinkMainMenuItem icon="uil-constructor" text="Service Provider">
                    <MultiLinkMenuItem  text="Verification Requests" link="service_provider_profiles.index"/>
                </MultiLinkMainMenuItem>
            </>

       }
        { (auth.user.roles.find((role)=>( role.name ==='verified-service-provider')))&&
            <>
                <MainMenuItem text="Home" link="admin.dashboard" icon="uil-home-alt" />
                <li className="side-nav-title side-nav-item">Modules</li>
                <MultiLinkMainMenuItem icon="uil-medkit" text="Consultation">
                    <MultiLinkMenuItem  text="My Calender" link="calender.index"/>
                    <MultiLinkMenuItem  text="Bookings" link="services_categories.index"/>
                    <MultiLinkMenuItem  text="Completed Services" link="requested_services.index"/>
                    <MultiLinkMenuItem  text="Reports" link="packages_registration.index"/>
                </MultiLinkMainMenuItem>
                <MultiLinkMainMenuItem icon="uil-ambulance " text="Medical Evacuation">
                    <MultiLinkMenuItem  text="Bookings" link="service_provider_profiles.index"/>
                </MultiLinkMainMenuItem>
                <MultiLinkMainMenuItem icon="uil-store-alt" text="Pharmacy">
                    <MultiLinkMenuItem  text="Orders" link="service_provider_profiles.index"/>
                </MultiLinkMainMenuItem>
                <MultiLinkMainMenuItem icon="uil-book-reader" text="Health Education">
                    <MultiLinkMenuItem  text="Articles" link="service_provider_profiles.index"/>
                    <MultiLinkMenuItem  text="My Articles" link="health_education.index"/>
                </MultiLinkMainMenuItem>
                {
                    auth.user.provider_profile.account_category_type !== 'individual' && (
                        <>
                            <MultiLinkMainMenuItem icon="uil-users-alt" text="Staff Management">
                                <MultiLinkMenuItem  text="My Stuff" link="provider_profile.stuff.index"/>
                            </MultiLinkMainMenuItem>
                            <MultiLinkMainMenuItem icon="uil-building" text="Firm Management">
                                <MultiLinkMenuItem  text="Company" link="provider_profile.firm.company"/>
                                <MultiLinkMenuItem  text="Facilities" link="provider_profile.firm.facilities"/>
                                <MultiLinkMenuItem  text="Facilities Registrations" link="provider_profile.firm.facilities_registrations"/>
                                <MultiLinkMenuItem  text="Facilities Services" link="provider_profile.firm.facilities_services"/>
                            </MultiLinkMainMenuItem>
                        </>
                    )
                }

            </>

            }

    </ul>

  );
};

