const TopProduct = () => {
    return (
        <div className="col-12 col-md-3">
            <div className="card">
                <div className="card-header bg-success text-white text-uppercase">
                    <i className="fa fa-heart"></i> Top product
                </div>
                <img className="img-fluid border-0" src="https://dummyimage.com/600x400/55595c/fff" alt="Card cap"/>
                <div className="card-body">
                    <h4 className="card-title text-center"><a href="product.html" title="View Product">Product title</a></h4>
                    <div className="row">
                        <div className="col">
                            <p className="btn btn-danger btn-block">99.00 $</p>
                        </div>
                        <div className="col">
                            <a href="product.html" className="btn btn-success btn-block">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProduct
