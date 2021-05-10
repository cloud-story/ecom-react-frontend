import {Link} from 'react-router-dom'
const ProductCheckout = () => {
    return (
        <div className="col-12 col-lg-6 add_to_cart_block">
            <div className="card bg-light mb-3">
                <div className="card-body">
                    <p className="price">99.00 $</p>
                    <p className="price_discounted">149.90 $</p>
                    <form method="get" action="cart.html">
                        <div className="form-group">
                            <label for="colors">Color</label>
                            <select className="custom-select" id="colors">
                                <option selected>Select</option>
                                <option value="1">Blue</option>
                                <option value="2">Red</option>
                                <option value="3">Green</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Quantity :</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button type="button" className="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control"  id="quantity" name="quantity" min="1" max="100" value="1"/>
                                <div className="input-group-append">
                                    <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Link to="/cart" className="btn btn-success btn-lg btn-block text-uppercase">                       
                            <i className="fa fa-shopping-cart"></i> Add To Cart
                        </Link>
                    </form>
                    <div className="product_rassurance">
                        <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-truck fa-2x"></i><br/>Fast delivery</li>
                            <li className="list-inline-item"><i className="fa fa-credit-card fa-2x"></i><br/>Secure payment</li>
                            <li className="list-inline-item"><i className="fa fa-phone fa-2x"></i><br/>+33 1 22 54 65 60</li>
                        </ul>
                    </div>
                    <div className="reviews_product p-3 mb-2 ">
                        3 reviews
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        (4/5)
                        <a className="pull-right" href="#reviews">View all reviews</a>
                    </div>
                    <div className="datasheet p-3 mb-2 bg-info text-white">
                        <a href="/" className="text-white"><i className="fa fa-file-text"></i> Download DataSheet</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCheckout
