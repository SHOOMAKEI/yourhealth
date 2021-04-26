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

                </div>
            </div>
            <h4 className="page-title">
                {title}
            </h4>
        </div>
    )
}
