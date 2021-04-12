import    AddSubcategoryModal from './components/AddSubcategoryModal'
import   Heading from './components/Heading'
import    InfoSideBar from './components/infosidebar'
import    Paginator from './components/paginator'
import   ServiceCategoriesTable from './components/serviceCategoryTable'


import React, { useEffect, useState } from 'react';

import { ADD_CATEGORY_MODAL_ID } from '@/Pages/Utilities/Constants'
import Framework from '@/Pages/framework';

const CATEGORIES_BATCH_COUNT = 10;

const ManageSubcategories = () => {
    const {subcategories} = useSelector(state => state.subcategoriesStore);

    const [subcategoriesBatchCount, setSubcategoriesBatchCount] = useState(CATEGORIES_BATCH_COUNT)
    const [shownSubcategories, setShownSubcategories] = useState(subcategories.slice(0, subcategoriesBatchCount))
    const [paginatorSP, setPaginatorSP] = useState(0)
    const {category_id} = router.query
    const [heading, setHeading] = useState('Service')

    useEffect(() => {
        if(subcategories.length > 0) {
            setShownSubcategories(subcategories.slice(paginatorSP, paginatorSP + subcategoriesBatchCount))
        }
    }, [subcategories])

    useEffect(() => {
        queryCategory({variables: {id: category_id}});
    }, []);

    useEffect(() => {
        if(data) {
            dispatch(storeServiceSubcategories(data.serviceCategory.service_sub_categories));
            setHeading(data.serviceCategory.name)
        }
    }, [data])

    function renderAddSubcategoryModal() {
        return <AddSubcategoryModal modalID={ADD_CATEGORY_MODAL_ID} operation="add"/>
    }

    function selectPage(page) {
        let startingPoint = page === 0 ? 0 : (page * subcategoriesBatchCount);
        let endingPoint = startingPoint + subcategoriesBatchCount

        setShownSubcategories(subcategories.slice(startingPoint, endingPoint))
        setPaginatorSP(startingPoint)
        return 0;
    }

    function searchSubcategories(content) {
        if(content.length === 0) {
            setShownSubcategories(subcategories.slice(0, subcategoriesBatchCount))
        } else {
            setShownSubcategories(
                subcategories.filter(subcategory =>  {
                    if(subcategory.name.toLowerCase().includes(content.toLowerCase())) {
                        return subcategory
                    }
                })
            )
        }
    }

    function renderContent() {
        return (
            <div className="row" style={{paddingTop: 30 + 'px'}}>
                <div className="col-xl-7">
                    <div className="card px-2">
                        <Heading title={`${heading} subcategories`} renderModal={renderAddSubcategoryModal} modalID={ADD_CATEGORY_MODAL_ID} search={searchSubcategories}  />
                        <ServiceCategoriesTable categories={shownSubcategories} />
                        <Paginator batchCount={subcategoriesBatchCount} totalItems={subcategories.length} activePageCallBack={selectPage} />
                    </div>
                </div>

                <div className="col-xl-5">
                    <InfoSideBar />
                </div>
            </div>
        )
    }

    return <Framework renderContent={renderContent}/>
}

export default ManageSubcategories;
