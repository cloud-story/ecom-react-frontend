import Header from "./Header"
import ProductCarousel from "./ProductCarousel"
import FeaturedProducts from "./FeaturedProducts"
const Home = () => {
    return (
        <>
            <Header title="Omni Shop" desc="Shop what you want!"/>
            <ProductCarousel />
            <FeaturedProducts type="last" />
            <FeaturedProducts type="top" />
        </>
    )
}

export default Home
