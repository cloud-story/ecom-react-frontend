const ProductImage = () => {
    return (
        <div className="col-12 col-lg-6">
            <div className="card bg-light mb-3">
                <div className="card-body">
                    <a href="/" data-toggle="modal" data-target="#productModal">
                        <img className="img-fluid" src="https://dummyimage.com/800x800/55595c/fff" alt="product"/>
                        <p className="text-center">Zoom</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductImage
