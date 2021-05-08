import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const NavLink = ({ link, title, variant }) => {
let liClass = 'nav-item';
liClass = (variant === "active"?liClass+' active':liClass);

    return (
        <li className={liClass}>
            <Link className="nav-link" to={link}>{title}
            
            
            {
                variant === "active"?
                    <span className="sr-only">(current)</span>
                    :null
            }
            
            </Link>
        </li>
    )
}

NavLink.defaultProps = {
    variant: 'inactive'
}

NavLink.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    variant: PropTypes
    .oneOf([ 'active', 'inactive'])
}

export default NavLink
