const CartPriceSummary = ({subtotal,shippingCharge,total}) => {
    return (
        <>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Sub-Total</td>
                <td className="text-right">${subtotal}</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Shipping</td>
                <td className="text-right">${shippingCharge}</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><strong>Total</strong></td>
                <td className="text-right"><strong>${total}</strong></td>
            </tr>
        </>
    )
}

export default CartPriceSummary
