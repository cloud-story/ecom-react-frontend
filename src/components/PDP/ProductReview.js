const ProductReview = () => {
    return (
        <div className="col-12" id="reviews">
            <div className="card border-light mb-3">
                <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-comment"></i> Reviews</div>
                <div className="card-body">
                    <div className="review">
                        <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                        <meta itemprop="datePublished" content="01-01-2016" />January 01, 2018

                    <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    by Paul Smith
                    <p className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </p>
                        <hr />
                    </div>
                    <div className="review">
                        <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                        <meta itemprop="datePublished" content="01-01-2016" />January 01, 2018

                    <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                    by Paul Smith
                    <p className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductReview
