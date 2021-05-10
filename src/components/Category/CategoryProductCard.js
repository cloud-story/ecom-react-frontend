import { Link } from "react-router-dom"

const CategoryProductCard = () => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="row">
                        <div className="col">
                            <p className="btn btn-danger btn-block">99.00 $</p>
                        </div>
                        <div className="col">
                            <Link to="/cart" className="btn btn-success btn-block">Add to cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryProductCard
