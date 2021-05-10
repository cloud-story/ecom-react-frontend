import { Link } from "react-router-dom"

const ProductGridPagincation = () => {
    return (
        <div className="col-12">
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item disabled">
                        <Link className="page-link" to="/category/l1" tabindex="-1">Previous</Link>
                    </li>
                    <li className="page-item"><Link className="page-link" to="/category/l1">1</Link></li>
                    <li className="page-item active">
                        <Link className="page-link" to="/category/l1">2 <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="page-item"><Link className="page-link" to="/category/l1">3</Link></li>
                    <li className="page-item">
                        <Link className="page-link" to="/category/l1">Next</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default ProductGridPagincation
