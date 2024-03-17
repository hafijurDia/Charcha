import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CHARCHA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
            <NavDropdown title="PRODUCT" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PRODUCT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               PRODUCT ONE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PRODUCT TOW</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                PRODUCT THREE
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href="#home">LOGIN</Nav.Link>
            <Nav.Link href="#about">SIGN UP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;