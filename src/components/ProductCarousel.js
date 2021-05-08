import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import TopProduct from "./TopProduct"

const ProductCarousel = () => {
    return (
        <div className="container">
            <div className="row">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://dummyimage.com/855x365/55595c/fff"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://dummyimage.com/855x365/a30ca3/fff"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://dummyimage.com/855x365/1443ff/fff"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <TopProduct/>
            </div>
        </div>
    )
}

export default ProductCarousel
