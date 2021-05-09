const Breadcrumb = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="category.html">Category</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Product</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb
