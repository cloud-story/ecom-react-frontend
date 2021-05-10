import Header from "../Common/Header"
import CategoryBreadcrumb from "./CategoryBreadcrumb"
import CategoryContainer from "./CategoryContainer"

const CategoryPage = () => {
    return (
        <>
            <Header title='Product Category' desc=''/>
            <CategoryBreadcrumb/>
            <CategoryContainer/>
        </>
    )
}

export default CategoryPage
