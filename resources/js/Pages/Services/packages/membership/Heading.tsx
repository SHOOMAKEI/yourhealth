import {ReactNode} from "react";

interface Props {
    title: String;
    renderModal?: () => ReactNode;
    modalID?: String;
    search: (content: string) => void;
}

export default function Heading({title, renderModal, modalID, search}: Props) {

    function onSearch() {
        $('#search-input').on('input',function(e){
            let input = $(this);
            let val: any = input.val();

            if (input.data("lastval") != val) {
                input.data("lastval", val);
                search(val)
            }
        });
    }

    return (
        <div className="row mb-3">
            <div className="col-sm-4">
                <a href="#" className="btn btn-danger mb-3" data-toggle="modal" data-target={`#${modalID}`}>
                    <i className="mdi mdi-plus"/>{title}</a>
            </div>
            <div className="col-sm-8">
                <div className="text-sm-right float-right">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..." id="search-input" onInput={onSearch}/>
                            <div className="input-group-append">
                                        <span className="btn btn-primary">
                                            <i className="uil uil-search" />
                                        </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {renderModal && renderModal()}
        </div>
    )
}