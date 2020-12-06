import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container }
    from 'react-bootstrap'

// rafce es7 shortcut that creates an arrow function
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        {/* redirects the user back to the main page */}
                        {/* the business's brand name */}
                        <Navbar.Brand>Your Business</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/cart'>
                                {/* redirects the user to their shopping cart */}
                                <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                {/* redirects the user to login/signup page */}
                                <Nav.Link href><i className=
                                    'fas fa-user'></i>Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header