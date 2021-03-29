import { ReactNode } from "react";

interface Props {
    modalID: string;
    title: string;
    renderContent: () => ReactNode;
    onSubmit: () => any;
}

export default function Modal({modalID, title, renderContent, onSubmit}: Props) {
    return (
        <div id={modalID} className="modal fade" tabIndex={-1} role="dialog" aria-labelledby={`${modalID}Label`} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header modal-colored-header bg-danger">
                        <h4 className="modal-title" id={`${modalID}Label`}>{title}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        {renderContent()}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" onClick={() => onSubmit()}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
