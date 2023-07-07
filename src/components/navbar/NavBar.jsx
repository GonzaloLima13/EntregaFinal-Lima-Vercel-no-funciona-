import React from 'react';
import "./navbar.css";
import "./cartwidget.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
          </Nav>
          <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
            <div className="qty-display">0</div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>                


    </div>
  )
}

export default NavBar
