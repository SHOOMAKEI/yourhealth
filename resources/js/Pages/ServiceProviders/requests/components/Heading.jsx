import React from 'react'

export default function Heading({title, search}) {

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
            <div className="page-title-right">
                <div className="app-search">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..." id="search-input" onInput={onSearch}/>
                            <span className="mdi mdi-magnify search-icon"></span>
                            <div className="input-group-append">
                                <span className="btn btn-primary">
                                    <i className="uil uil-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <h4 className="page-title">
                {title}
            </h4>
        </div>
    )
}
