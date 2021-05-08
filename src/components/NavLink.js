import PropTypes from 'prop-types'

const NavLink = ({ link, title, variant }) => {
let liClass = 'nav-item';
liClass = (variant === "active"?liClass+' active':liClass);

    return (
        <li className={liClass}>
            <a className="nav-link" href={link}>{title} 
            
            {
                variant === "active"?
                    <span className="sr-only">(current)</span>
                    :null
            }
            
            </a>
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
