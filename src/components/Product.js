import Header from "./Header"
const Product = ({name,shortdesc}) => {
    let title ="Product Page"
    let desc = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
    return (
        <>
            <Header title={title} desc={desc}/>
        </>
    )
}

export default Product
