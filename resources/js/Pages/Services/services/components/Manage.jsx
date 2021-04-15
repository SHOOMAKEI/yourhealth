import    AddServiceModal  from './AddServiceModal'
import    Heading from './Heading'
import    InfoSideBar from './infosidebar'
import    Paginator from './paginator'
import    ServicesTable  from './servicesTable'
import React, {useEffect, useState} from 'react'
import { ADD_SERVICE_MODAL_ID } from '@/Pages/Utilities/Constants'
import Framework from '@/Pages/framework';
import Layout from "@/Shared/Layout";
import {usePage} from "@inertiajs/inertia-react";


const CATEGORIES_BATCH_COUNT = 10;

const ManageServices = () => {
    const {categories} = usePage().props
        //useSelector(state => state.categoriesStore);

    const [categoriesBatchCount, setCategoriesBatchCount] = useState(CATEGORIES_BATCH_COUNT)
    const [shownCategories, setShownCategories] = useState(categories.slice(0, categoriesBatchCount))
    const [paginatorSP, setPaginatorSP] = useState(0)
    const[selectedCategory, setSelectedCategory] =  useState( categories && categories[0])


    useEffect(() => {
        if(categories.length > 0) {
            setShownCategories(categories.slice(paginatorSP, paginatorSP + categoriesBatchCount))
        }
    }, [categories])


    function renderAddServiceModal() {
        return  <AddServiceModal modalID={ADD_SERVICE_MODAL_ID} operation="add" initialData={{
            name: "",
            description: "No description",
            status: false,
            approved_at:false,
        }}/>
    }

    function selectPage(page) {
        let startingPoint = page === 0 ? 0 : (page * categoriesBatchCount);
        let endingPoint = startingPoint + categoriesBatchCount

        setShownCategories(categories.slice(startingPoint, endingPoint))
        setPaginatorSP(startingPoint)
        return 0;
    }

    function searchCategories(content) {
        if(content.length === 0) {
            setShownCategories(categories.slice(0, categoriesBatchCount))
        } else {
            setShownCategories(
                categories.filter(category =>  {
                    if(category.name.toLowerCase().includes(content.toLowerCase())) {
                        return category
                    }
                })
            )
        }
    }

        return (
            <div className="row" style={{paddingTop: 30 + 'px'}}>
                <div className="col-xl-7">
                    <div className="card px-2">
                        <Heading title="Services" renderModal={renderAddServiceModal} modalID={ADD_SERVICE_MODAL_ID} search={searchCategories}  />
                        <ServicesTable services={shownCategories} callback={setSelectedCategory} />
                        <Paginator batchCount={categoriesBatchCount} totalItems={categories.length} activePageCallBack={selectPage} />
                    </div>
                </div>

                <div className="col-xl-5">
                    { categories && selectedCategory  && <InfoSideBar selectedCategory={selectedCategory} />}
                </div>
            </div>
        )


}

ManageServices.layout = page => <Layout children={page} />;

export default ManageServices;
