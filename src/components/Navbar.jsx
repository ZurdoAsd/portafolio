import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar2() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="home">
      <Container>
        <Navbar.Brand className="mr-1" href="#home">My Portfolio </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <NavDropdown title="Social media" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://github.com/ZurdoAsd" target="_blank" rel="noopener noreferrer">Git Hub</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/aldo-gaspar" target="_blank"rel="noopener noreferrer">Linkedin</NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/dr.al.do" target="_blank" rel="noopener noreferrer">Instagram</NavDropdown.Item>
              </NavDropdown> 
          </Nav>
          <Nav>
            <Nav.Link className="ms-auto" eventKey={2} href="#contact">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}