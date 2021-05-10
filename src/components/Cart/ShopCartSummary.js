import CartItemDesc from "./CartItemDesc"
import CartPriceSummary from "./CartPriceSummary"

const ShopCartItemsTable = () => {
    return (
        <div class="col-12">
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Product</th>
                            <th scope="col">Available</th>
                            <th scope="col" className="text-center">Quantity</th>
                            <th scope="col" className="text-right">Price</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartItemDesc productName="Omni Shoe" invstatus="In Stock" unitprice="99.99" qty="1" />
                        <CartItemDesc productName="Omni Shirt" invstatus="In Stock" unitprice="19.99" qty="1" />
                        <CartItemDesc productName="Omni Trouser" invstatus="In Stock" unitprice="29.99" qty="1" />

                        <CartPriceSummary subtotal="149.97" shippingCharge="5.00" total="154.97" />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShopCartItemsTable
