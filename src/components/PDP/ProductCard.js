import ProductImage from "./ProductImage"
import ProductCheckout from "./ProductCheckout"
import ProductDescription from "./ProductDescription"
import ProductReview from "./ProductReview"
const ProductCard = () => {
    return (
        <>
            <div className="row">
                <ProductImage />
                <ProductCheckout />
            </div>
            <div className="row">
                <ProductDescription/>
                <ProductReview/>
            </div>
        </>
    )
}

export default ProductCard
