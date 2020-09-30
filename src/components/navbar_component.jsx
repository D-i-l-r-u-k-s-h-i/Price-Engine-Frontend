import React from 'react'
// import {NavbarBrand, Navbar,Nav,NavItem,NavLink} from 'reactstrap';
import { Navbar,Nav} from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';

function NavBarComponent() {
    
    return (
        <div>
        <Navbar bg="dark" variant="dark" fixed='top'>
          <Navbar.Brand href="/">Price Engine</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/calc">Calculate Order</Nav.Link>
          </Nav>
        </Navbar>
            <br /><br /><br /><br />
        </div>
    )
}

export default NavBarComponent