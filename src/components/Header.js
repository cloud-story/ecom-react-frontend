const Header = ({title, desc}) => {
    return (
        <section className="jumbotron text-center">
            <div className="container">
                <h1 className="jumbotron-heading">{title}</h1>
                <p className="lead text-muted mb-0">{desc}</p>
            </div>
        </section>
    )
}

export default Header
