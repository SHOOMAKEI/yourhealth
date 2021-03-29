import { ReactNode } from "react";

interface Props {
    modalID: string;
    title: string;
    renderForm: () => ReactNode;
    size?: 'large' | 'small' | 'extra';
}

export default function Modal({modalID, title, size, renderForm}: Props) {
    return (
        <div id={modalID} className="modal fade" tabIndex={-1} role="dialog" data-backdrop="static" aria-labelledby={`${modalID}Label`} aria-hidden="true">
            <div className={`modal-dialog ${size === 'large' ? 'modal-lg modal-dialog-scrollable': null}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id={`${modalID}Label`}>{title}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        {renderForm()}
                    </div>
                </div>
            </div>
        </div>
    )
}