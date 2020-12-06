import React from 'react'
import products from '../products'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <>
            <h1>LATEST PRODUCTS</h1>
            <Row>
                {/* want to loop through products' array of objects and for each product display the product component */}
                {products.map(product => (
                    //    determines the screen size each product will hold
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        {/* Product Component */}
                        <Product product={product} />
                        {/* <h3>{product.image}</h3> */}
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
