import {
    AddCategoryModal,
    Heading,
    InfoSideBar,
    Paginator,
    ServiceCategoriesTable
} from '@/Pages/services/categories/components'
import React, {useEffect} from 'react'
import { ADD_CATEGORY_MODAL_ID } from '@/Pages/Utilities/Constants'
import Framework from '@/Pages/framework';
import Layout from "@/Shared/Layout";
import Dashboard from "@/Pages/Dashboard";

// import { storeServiceCategories } from '@pages/data/actions/serviceCategories';
// import { useApi } from '@pages/utils/ApolloClient';

const CATEGORIES_BATCH_COUNT = 10;

const ManageServices = () => {
    const {categories} = useSelector(state => state.categoriesStore);

    const [categoriesBatchCount, setCategoriesBatchCount] = useState(CATEGORIES_BATCH_COUNT)
    const [shownCategories, setShownCategories] = useState(categories.slice(0, categoriesBatchCount))
    const [paginatorSP, setPaginatorSP] = useState(0)
    // const [queryCategories, {loading, errors, data, called}] = useApi({query: QUERY_CATEGORIES})
    // const dispatch = useDispatch()

    useEffect(() => {
        if(categories.length > 0) {
            setShownCategories(categories.slice(paginatorSP, paginatorSP + categoriesBatchCount))
        }
    }, [categories])

    useEffect(() => {
        // queryCategories({});
    }, []);

    useEffect(() => {
        if(data) {
            // dispatch(storeServiceCategories(data.serviceCategories));
        }
    }, [data])

    function renderAddCategoryModal() {
        return <AddCategoryModal modalID={ADD_CATEGORY_MODAL_ID} operation="add"/>
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

    function renderContent() {
        return (
            <div className="row" style={{paddingTop: 30 + 'px'}}>
                <div className="col-xl-7">
                    <div className="card px-2">
                        <Heading title="Service categories" renderModal={renderAddCategoryModal} modalID={ADD_CATEGORY_MODAL_ID} search={searchCategories}  />
                        <ServiceCategoriesTable categories={shownCategories} />
                        <Paginator batchCount={categoriesBatchCount} totalItems={categories.length} activePageCallBack={selectPage} />
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

ManageServices.layout = page => <Layout children={page} />;

export default ManageServices;
