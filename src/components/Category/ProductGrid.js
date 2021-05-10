import CategoryProductCard from "./CategoryProductCard";
import ProductGridPagination from "./ProductGridPagination";

const ProductGrid = () => {
    return (
        <div className="col">
            <div className="row">
                {Array(6).fill(1).map((el, i) =>
                    <CategoryProductCard />
                )}

                <ProductGridPagination/>
            </div>
        </div>
    )
}

export default ProductGrid
