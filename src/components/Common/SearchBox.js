import MiniCart from "./MiniCart"

const SearchBox = () => {
    return (
        <form className="form-inline my-2 my-lg-0">
            <div className="input-group input-group-sm">
                <input type="text" className="form-control" placeholder="Search..." name="searchInput" />
                <div class="input-group-append">
                    <button type="button" className="btn btn-secondary btn-number">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
           
            <MiniCart/>
        </form>
    )
}

export default SearchBox
