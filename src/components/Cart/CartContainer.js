import CartActions from "./CartActions"
import ShopCartSummary from "./ShopCartSummary"

const CartContainer = () => {
    return (
        <div className="container mb-4">
            <div className="row">
                <ShopCartSummary />
                <CartActions/>
            </div>
        </div>
    )
}

export default CartContainer
