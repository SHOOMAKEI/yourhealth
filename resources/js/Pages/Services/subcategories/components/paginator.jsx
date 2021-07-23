import React, { useEffect, useState } from 'react';


export default function Paginator({ batchCount, totalItems, activePageCallBack }) {
    const [pages, setPages] = useState([1, ])

    useEffect(() => {
        calculatePagination()
    }, [batchCount, totalItems])

    function calculatePagination() {
        let _pages = Math.ceil(totalItems / batchCount)
        setPages(Array.from(Array(_pages).keys()))
    }

    function setActive(id) {
        pages.map(page => {
            $(`#page-${page}`).removeClass('active');
        })
        $(`#page-${id}`).addClass('active');
        activePageCallBack(id)
    }

    return (
        <div className="row px-2">
            <div className="col-sm-12 col-md-5">
                <div className="dataTables_info" id="service-categories-table_info" role="status" aria-live="polite">
                    Showing 1 to {batchCount} of {totalItems} entries
                </div>
            </div>
            <div className="col-sm-12 col-md-7">
                <div className="dataTables_paginate paging_simple_numbers float-right" id="service-categories-table_paginate">
                    <ul className="pagination pagination-rounded">
                        <li className="paginate_button page-item previous disabled" id="service-categories-table_previous">
                            <a href="#" aria-controls="service-categories-table" data-dt-idx="0" tabIndex={0} className="page-link">
                                <i className="uil uil-angle-left"/>
                            </a>
                        </li>
                        {
                            pages.map(page => (
                                <li className={`paginate_button page-item ${page === 0 && 'active'}`} key={page} id={`page-${page}`} onClick={() => setActive(page)}>
                                    <a href="#" aria-controls="service-categories-table" data-dt-idx={`${page}`} tabIndex={0} className="page-link">
                                        {page}
                                    </a>
                                </li>
                            ))
                        }
                        <li className="paginate_button page-item next" id="service-categories-table_next">
                            <a href="#" aria-controls="service-categories-table" data-dt-idx="3" tabIndex={0} className="page-link">
                                <i className="uil uil-angle-right"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
