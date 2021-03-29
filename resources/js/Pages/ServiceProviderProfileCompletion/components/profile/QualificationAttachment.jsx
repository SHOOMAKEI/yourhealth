import { QualificationsValues } from "./Qualifications";

export default function QualificationAttachment(award: QualificationsValues) {
    return (
        <div className="card mb-2 shadow-none border">
            <div className="p-1">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <div className="avatar-sm">
                            <span className="avatar-title rounded">
                                .FILE
                            </span>
                        </div>
                    </div>
                    <div className="col pl-0">
                        <a href="javascript:void(0);" className="text-muted font-weight-bold">{award.award_title}</a>
                        <p className="mb-0">{`${award.award_institution} | ${award.award_year}`}</p>
                    </div>
                    <div className="col-auto">
                        <a href="javascript:void(0);" data-toggle="tooltip" data-placement="bottom" title="" className="btn btn-link text-muted btn-lg p-0" data-original-title="Download">
                            <i className="uil uil-cloud-download"></i>
                        </a>
                        <a href="javascript:void(0);" data-toggle="tooltip" data-placement="bottom" title="" className="btn btn-link text-danger btn-lg p-0" data-original-title="Delete">
                            <i className="uil uil-multiply"></i>
                        </a>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-12">
                        <p>
                            {award.award_description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}