import {Link} from 'react-router-dom'
const ProductCard = ({name,shortdesc, price,image, link}) => {
    return (
        <div className="col-sm">
            <div className="card">
                <img className="card-img-top" src={image} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title"><Link to={`product/10001`}>{name}</Link></h4>
                    <p className="card-text">{shortdesc}</p>
                    <div className="row">
                        <div className="col">
                            <p className="btn btn-danger btn-block">{price}$</p>
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

export default ProductCard
