const Footer = () => {
    return (
        <footer className="text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-4 col-xl-3">
                        <h5>About</h5>
                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                        <p className="mb-0">
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                        <h5>Informations</h5>
                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                        <ul className="list-unstyled">
                            <li><a href="/">Link 1</a></li>
                            <li><a href="/">Link 2</a></li>
                            <li><a href="/">Link 3</a></li>
                            <li><a href="/">Link 4</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                        <h5>Others links</h5>
                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                        <ul className="list-unstyled">
                            <li><a href="/">Link 1</a></li>
                            <li><a href="/">Link 2</a></li>
                            <li><a href="/">Link 3</a></li>
                            <li><a href="/">Link 4</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3">
                        <h5>Contact</h5>
                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                        <ul className="list-unstyled">
                            <li><i className="fa fa-home mr-2"></i> My company</li>
                            <li><i className="fa fa-envelope mr-2"></i> email@example.com</li>
                           
                        </ul>
                    </div>
                    <div className="col-12 copyright mt-3">
                        <p className="float-left">
                            <a href="/">Back to top</a>
                        </p>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
