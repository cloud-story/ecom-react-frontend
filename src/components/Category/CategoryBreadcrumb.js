import {Link} from 'react-router-dom'
const CategoryBreadcrumb = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/category/l1">Category</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Sub-category</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default CategoryBreadcrumb
