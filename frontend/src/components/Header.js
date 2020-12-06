import React from 'react'
import { Navbar, Nav, Container }
    from 'react-bootstrap'

// rafce es7 shortcut that creates an arrow function
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    {/* redirects the user back to the main page */}
                    {/* the business's brand name */}
                    <Navbar.Brand href="/">Your Business</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {/* redirects the user to their shopping cart */}
                            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                            {/* redirects the user to login/signup page */}
                            <Nav.Link href="/login"><i className=
                                'fas fa-user'></i>Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header