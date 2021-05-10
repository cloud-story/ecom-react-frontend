import {Link} from 'react-router-dom'
const MiniCart = () => {
    return (
        <Link className="btn btn-success btn-sm ml-3" to="/cart">
            <i className="fa fa-shopping-cart"></i> Cart
             <span className="badge badge-light">3</span>
        </Link>
    )
}

export default MiniCart
