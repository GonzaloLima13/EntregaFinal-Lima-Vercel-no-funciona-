import React from 'react';
import "./navbar.css";
import "./cartwidget.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div>

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">GL Lures</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav.Link href="#link">Social</Nav.Link>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>                


    </div>
  )
}

export default NavBar
