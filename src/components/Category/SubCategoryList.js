import React from 'react'
import { Link } from 'react-router-dom'

const SubCategoryList = ({parentCategoryId}) => {
    return (
        <div className="col-12 col-sm-3">
            <div className="card bg-light mb-3">
                <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-list"></i> Categories</div>
                <ul className="list-group category_block">
                    <li className="list-group-item"><Link to="/category/l1-1">Sub Category-1</Link></li>
                    <li className="list-group-item"><Link to="/category/l1-2">Sub Category-2</Link></li>
                    <li className="list-group-item"><Link to="/category/l1-3">Sub Category-3</Link></li>
                    <li className="list-group-item"><Link to="/category/l1-4">Sub Category-4</Link></li>
                    <li className="list-group-item"><Link to="/category/l1-5">Sub Category-5</Link></li>
                </ul>
            </div>
            <div className="card bg-light mb-3">
                <div className="card-header bg-success text-white text-uppercase">Last product</div>
                <div className="card-body">
                    <img className="img-fluid" src="https://dummyimage.com/600x400/55595c/fff" alt="category"/>
                    <h5 className="card-title">Product title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="bloc_left_price">$99.00</p>
                </div>
            </div>
        </div>
    )
}

export default SubCategoryList
