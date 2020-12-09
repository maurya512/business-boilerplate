import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
import { listProducts } from '../actions/productListActions'
import Message from '../components/Message'
import Loading from '../components/Loader'
// import axios from 'axios'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <h1>LATEST PRODUCTS</h1>
            {/* loading spinner */}
            {/* checks for error and if no error display the products */}
            {loading ? (<Loading />) : error ? (<Message variant='danger'>{error}</Message>) : (<Row>
                {/* want to loop through products' array of objects and for each product display the product component */}
                {products.map(product => (
                    //    determines the screen size each product will hold
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        {/* Product Component */}
                        <Product product={product} />
                        {/* <h3>{product.image}</h3> */}
                    </Col>
                ))}
            </Row>)}
        </>
    )
}

export default HomeScreen
