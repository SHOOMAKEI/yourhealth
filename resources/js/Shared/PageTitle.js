import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

export default ({ title, link_url, link_name}) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="page-title-box">
                    <div className="page-title-right">
                        {link_url && (<InertiaLink href={link_url} className="btn btn-primary"><i
                            className="uil uil-plus mr-1"/>{link_name}
                        </InertiaLink>)}
                    </div>
                    <h4 className="page-title">{title}</h4>
                </div>
            </div>
        </div>
    );
};
