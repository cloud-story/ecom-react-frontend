const CartItemDesc = ({productName,invstatus,unitprice,qty}) => {
    return (
        <tr>
            <td><img src="https://dummyimage.com/50x50/55595c/fff" alt="product"/> </td>
            <td>{productName}</td>
            <td>{invstatus}</td>
            <td><input className="form-control" type="text" value={qty} /></td>
            <td className="text-right">${unitprice}</td>
            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
        </tr>
    )
}

export default CartItemDesc
