import React from 'react'
// importing container, row and col from react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    {/* styling is integreted in the className */}
                    <Col className='text-center py-3'>
                        Copyright &copy; Your Business
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
