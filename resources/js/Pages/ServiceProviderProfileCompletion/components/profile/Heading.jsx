import { ReactNode } from "react";

export default function Heading({title, renderModal, modalID, search, buttonText, showSearch = true}) {
    function onSearch() {
        $('#search-input').on('input',function(e){
            let input = $(this);
            let val = input.val();

            if (input.data("lastval") != val) {
                input.data("lastval", val);
                search(val)
            }
        });
    }

    return (
        <div className="page-title-box">
            {
                showSearch && (
                    <div className="page-title-right">
                        <div className="app-search">
                            <form>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search..." id="search-input" onInput={onSearch}/>
                                    <div className="input-group-append">
                                        <span className="btn btn-primary">
                                            <i className="uil uil-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
            <h4 className="page-title">
                {title}
                <button type="button" className="btn btn-primary btn-sm ml-3" data-toggle="modal" data-target={`#${modalID}`}>
                    <i className="uil uil-plus mr-1"></i>
                    {buttonText}
                </button>
            </h4>
            {renderModal && renderModal()}
        </div>
    )
}
