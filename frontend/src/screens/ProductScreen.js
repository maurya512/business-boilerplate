import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ({ match }) => {
    const product = products.find((p) => p._id === match.params.id)

    return (
        <>
            {/* A button that redirects to the home page */}
            <Link className='btn btn-light my-3' to='/'>
                Go Back
        </Link>
            <Row>
                {/* A column that will display the product image */}
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>
                                {product.name}
                            </h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            {/* displays the price of an item */}
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                </Col>
                                    <Col>
                                        <strong>{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item> 
                            {/* displays whether an item is in stock */}
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {/* a button to add the product into cart which is disabled if product out of stock */}
                                <Button className='btn-block' type='button' disabled={product.countInStock === 0} >
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
