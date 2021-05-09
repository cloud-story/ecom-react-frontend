import ProductCard from "./ProductCard"

const FeaturedProducts = (type) => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-sm">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-uppercase">
                            <i className={type === 'last' ? 'fa fa-star' : 'fa fa-heart'}></i>
                            {type === 'last' ? 'Last products' : 'Top product'}
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <ProductCard name='Product title' shortdesc="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    price='99.99' image='https://dummyimage.com/600x400/55595c/fff'  link='product.html'/>
                                <ProductCard name='Product title' shortdesc="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    price='99.99' image='https://dummyimage.com/600x400/55595c/fff'  link='product.html'/>
                                <ProductCard name='Product title' shortdesc="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    price='99.99' image='https://dummyimage.com/600x400/55595c/fff'  link='product.html'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
