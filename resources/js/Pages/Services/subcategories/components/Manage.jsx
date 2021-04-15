import    AddCategoryModal  from './AddCategoryModal'
import    Heading from './Heading'
import    InfoSideBar from './infosidebar'
import    Paginator from './paginator'
import    ServiceCategoriesTable  from './serviceCategoryTable'
import React, {useEffect, useState} from 'react'
import { ADD_CATEGORY_MODAL_ID } from '@/Pages/Utilities/Constants'
import Framework from '@/Pages/framework';
import Layout from "@/Shared/Layout";
import {usePage} from "@inertiajs/inertia-react";
import AddSubcategoryModal from "@/Pages/Services/subcategories/components/AddSubcategoryModal";


const CATEGORIES_BATCH_COUNT = 10;

const ManageServices = () => {
    const {categories} = usePage().props
        //useSelector(state => state.categoriesStore);

    const [categoriesBatchCount, setCategoriesBatchCount] = useState(CATEGORIES_BATCH_COUNT)
    const [shownCategories, setShownCategories] = useState(categories.slice(0, categoriesBatchCount))
    const [paginatorSP, setPaginatorSP] = useState(0)
    const[selectedCategory, setSelectedCategory] =  useState(categories[0])


    useEffect(() => {
        if(categories.length > 0) {
            setShownCategories(categories.slice(paginatorSP, paginatorSP + categoriesBatchCount))
        }
    }, [categories])


    function renderAddCategoryModal() {
        return <AddSubcategoryModal modalID={ADD_CATEGORY_MODAL_ID} operation="add" initialData={{
            name: "",
            description: "No description",
            status: false ,
            approved_at:false,
            service_category_id: categories[0].service_category_id,
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
                        <Heading title="Service Sub Categories" renderModal={renderAddCategoryModal} modalID={ADD_CATEGORY_MODAL_ID} search={searchCategories}  />
                        <ServiceCategoriesTable categories={shownCategories} callback={setSelectedCategory} />
                        <Paginator batchCount={categoriesBatchCount} totalItems={categories.length} activePageCallBack={selectPage} />
                    </div>
                </div>

                <div className="col-xl-5">
                    { categories && <InfoSideBar selectedCategory={selectedCategory} />}
                </div>
            </div>
        )


}

ManageServices.layout = page => <Layout children={page} />;

export default ManageServices;
