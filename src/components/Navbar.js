import NavLink from "./NavLink"
import SearchBox from "./SearchBox"
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="index.html">OmniShop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
                    <ul className="navbar-nav m-auto">
                      
                        <NavLink link='#' title='Home' variant='active'/>
                           
                        <NavLink link='category.html' title='Categories' />
                        
                        <NavLink link='product.html' title='Product' />
                        
                        <NavLink link='cart.html' title='Cart' />
                        
                        <NavLink link='contact.html' title='Contact' />
                        
                    </ul>

                    <SearchBox/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
