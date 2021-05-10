import ProductGrid from "./ProductGrid"
import SubCategoryList from "./SubCategoryList"

const CategoryContainer = () => {
    return (
        <div class="container">
            <div class="row">
                <SubCategoryList/>
                <ProductGrid/>
            </div>
        </div>
    )
}

export default CategoryContainer
