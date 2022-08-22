import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar2() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="home">
      <Container>
        <Navbar.Brand href="#home">Welcome to my Portfolio </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Project1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Project2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Project3</NavDropdown.Item>
              </NavDropdown> 
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">Dank Themes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}